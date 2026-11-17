# Lingua Atlas

영어·일본어·중국어·스페인어·러시아어를 문자부터 고급 표현까지 학습하는 웹앱입니다.
빌드 과정이 없는 정적 파일이라 GitHub Pages에 그대로 올리면 동작하고, 휴대폰에서는 "홈 화면에 추가"로 앱처럼 설치됩니다.

## GitHub Pages에 올리기

1. GitHub에서 새 저장소를 만듭니다. 주소를 `https://아이디.github.io/` 로 쓰려면 저장소 이름을 `아이디.github.io` 로, 아니면 아무 이름(예: `lingua`)으로 만듭니다.
2. 이 폴더의 모든 파일을 저장소 최상위에 올립니다(Add file → Upload files, 폴더째 끌어다 놓기).
3. 저장소 Settings → Pages → Source를 "Deploy from a branch", Branch를 `main` / `/ (root)` 로 지정하고 저장합니다.
4. 1~2분 뒤 `https://아이디.github.io/저장소이름/` 으로 접속합니다.

음성(듣기·말하기)은 기기에 설치된 음성 엔진을 사용합니다. 특정 언어의 음성이 없다고 나오면 기기 설정의 "텍스트 음성 변환"에서 해당 언어 음성을 내려받으세요. 발음 인식은 Chrome·Safari에서 동작합니다.

## Google 로그인 켜기 (Firebase)

값을 넣기 전에는 기록이 기기 브라우저에만 저장됩니다. 켜면 기기 간에 기록이 이어집니다.

1. https://console.firebase.google.com 에서 프로젝트를 만듭니다.
2. 빌드 → Authentication → 시작하기 → 로그인 방법에서 **Google**을 사용 설정합니다.
3. Authentication → 설정 → 승인된 도메인에 `아이디.github.io` 를 추가합니다.
4. 빌드 → Firestore Database → 데이터베이스 만들기(프로덕션 모드). 규칙 탭에 아래를 붙여 넣고 게시합니다. 각 사용자가 자기 기록만 읽고 쓸 수 있게 하는 규칙입니다.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

5. 프로젝트 설정 → 일반 → 내 앱 → 웹 앱 추가(`</>`)를 누르면 나오는 `firebaseConfig` 값을 `firebase-config.js` 의 `window.FIREBASE_CONFIG = null;` 자리에 넣습니다.
6. 파일을 다시 올리면 설정 화면에 "Google 계정으로 로그인" 버튼이 나타납니다.

Firebase 웹 설정값(apiKey 등)은 공개되어도 되는 식별자입니다. 보안은 4번의 규칙과 3번의 승인된 도메인이 담당하므로 이 둘을 반드시 설정하세요.

## 콘텐츠 추가하기

`content/` 폴더의 파일이 과정 전체입니다. 한 과는 아래 모양이고, 새 파일을 만들면 `index.html` 과 `sw.js` 의 목록에 파일 이름을 추가합니다.

```js
LL.add('es', [
  { id: 'g99', lv: 3, t: 'grammar', title: '제목', sub: '한 줄 설명',
    body: `설명. ## 소제목, - 목록, **굵게**, | 표 | 지원`,
    items: `단어|뜻|예문|예문 뜻`,          // 중국어만: 단어|병음|뜻|예문|예문 뜻
    ex: `문장|뜻|주의할 점`,                 // 중국어만: 문장|병음|뜻|주의할 점
    quiz: `문제 ___|정답|오답|오답|오답 >> 해설` },
]);
```

- `lv` 는 1~5 단계, `t` 는 script·vocab·grammar·phrase·confuse·read·idiom 중 하나입니다.
- `u` 는 단원 이름, `o` 는 단계 안에서의 순서(작을수록 먼저)입니다. 같은 `u` 를 가진 과가 한 단원으로 묶여 보입니다. 이미 있는 과에는 `LL.meta('ja', { 과id: ['단원 이름', 순서] })` 로 지정합니다.
- 일본어 후리가나는 `漢字[かんじ]`, 러시아어 강세는 모음 뒤에 강세 부호(´)를 붙여 적습니다.
- 어휘와 예문을 넣으면 뜻 고르기·받아쓰기·문장 배열·작문·따라 말하기 문제와 복습 카드가 자동으로 만들어집니다.

## 안드로이드 앱으로 만들기 (다음 단계)

이 폴더를 그대로 감싸는 방식이 가장 간단합니다. Capacitor(`npx cap add android`)로 감싸거나, GitHub Pages 주소를 Bubblewrap/PWABuilder로 TWA 패키징하면 Play 스토어에 올릴 수 있습니다.
