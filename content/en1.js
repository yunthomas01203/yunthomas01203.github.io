LL.course({ id: 'en', name: '영어', native: 'English', tts: 'en-US', sample: 'Hello, nice to meet you.',
  levels: ['기초 (소리·문장 뼈대)', '초중급 (A2~B1)', '중급 (B1~B2)', '중상급 (B2~C1)', '고급 (C1~C2)'] });
LL.add('en', [
{ id: 's1', lv: 1, t: 'script', title: '모음: 한국어에 없는 구별', sub: '길이가 아니라 혀와 입의 모양', body: `
영어 모음은 철자와 소리가 일치하지 않고, 한국어 다섯~일곱 모음으로 덮을 수 없습니다. "길게/짧게"가 아니라 **긴장/이완**과 **입 벌림**으로 구별합니다.
| 쌍 | 구별법 |
| /iː/ sheep · /ɪ/ ship | /iː/는 입꼬리를 당긴 긴장된 '이'. /ɪ/는 힘을 빼고 '이'와 '에' 사이. 길이만 줄여서는 안 됩니다 |
| /uː/ pool · /ʊ/ pull | /uː/는 입술을 내민 '우'. /ʊ/는 힘을 뺀 '우'와 '으' 사이 |
| /e/ bed · /æ/ bad | /æ/는 '애'보다 턱을 훨씬 크게 내리고 입을 양옆으로 |
| /ʌ/ cup · /ɑː/ cop | /ʌ/는 짧은 '어'. /ɑː/는 입을 크게 벌린 '아' (미국 영어의 hot, stop은 '아') |
| /ɔː/ caught · /oʊ/ coat | /oʊ/는 반드시 '오우'로 미끄러짐. boat를 '보트'로 내면 bought로 들립니다 |
| /ɜːr/ bird · /ɑːr/ bard | /ɜːr/는 입을 거의 벌리지 않은 '어r' (work, word, world, girl) |
## 슈와 /ə/: 영어에서 가장 흔한 모음
- 강세 없는 음절의 모음은 대부분 힘 빠진 '어'로 약해집니다: **a**bout, banan**a**, p**o**lice, fam**i**ly, t**o**day.
- 철자대로 또박또박 읽으면 오히려 알아듣기 어렵습니다. photograph /ˈfoʊtəɡræf/ → photography /fəˈtɑːɡrəfi/.
## 이중모음
- /eɪ/ day, /aɪ/ my, /ɔɪ/ boy, /aʊ/ now, /oʊ/ go: 첫 소리에서 둘째 소리로 **미끄러지며** 한 음절로.`,
items: `sheep|/ʃiːp/ 양
ship|/ʃɪp/ 배
leave|/liːv/ 떠나다
live|/lɪv/ 살다
beach|/biːtʃ/ 해변
pool|/puːl/ 수영장
pull|/pʊl/ 당기다
full|/fʊl/ 가득 찬
fool|/fuːl/ 바보
bed|/bed/ 침대
bad|/bæd/ 나쁜
men|/men/ 남자들
man|/mæn/ 남자
cup|/kʌp/ 컵
cop|/kɑːp/ 경찰
coat|/koʊt/ 코트
caught|/kɔːt/ 잡았다
won't|/woʊnt/ ~하지 않을 것이다
want|/wɑːnt/ 원하다
work|/wɜːrk/ 일하다
walk|/wɔːk/ 걷다
about|/əˈbaʊt/ ~에 대하여
banana|/bəˈnænə/ 바나나`,
ex: `I live here, but I'm going to leave soon.|나는 여기 살지만 곧 떠날 거예요.
Don't sit on that seat.|그 자리에 앉지 마세요.|sit /ɪ/ · seat /iː/
The man met the men at the bank.|그 남자는 은행에서 그 남자들을 만났다.
I won't do what you want.|나는 네가 원하는 걸 하지 않을 거야.|won't /oʊ/ · want /ɑː/
I walk to work every day.|나는 매일 걸어서 출근해요.|walk에는 l 소리가 없음`,
quiz: `'살다'는?|live /lɪv/|leave /liːv/|life /laɪf/|leaf /liːf/ >> /ɪ/는 힘을 뺀 소리.
banana에서 강세가 없는 첫 음절의 모음은?|/ə/ (약한 '어')|/æ/|/ɑː/|/eɪ/ >> 강세 없는 음절은 슈와로 약화됩니다.
walk의 발음에 대한 설명으로 옳은 것은?|l을 발음하지 않는다|l을 분명히 발음한다|work와 같다|woke와 같다 >> walk /wɔːk/, talk, half, could의 l은 묵음.` },

{ id: 's2', lv: 1, t: 'script', title: '자음: R/L, F/P, V/B, TH, Z', sub: '뜻을 바꾸는 소리', body: `
| 소리 | 만드는 법 | 흔한 실수 |
| /r/ | 혀끝이 **어디에도 닿지 않음**. 입술을 살짝 둥글게, 혀를 뒤로 | ㄹ로 내서 혀가 닿음 |
| /l/ | 혀끝을 윗잇몸에 **붙이고** 소리. 단어 끝 l(dark L)은 '을'에 가까움: milk, feel | 끝의 l을 '으'로 생략 |
| /f/ · /v/ | 윗니를 아랫입술 안쪽에 대고 바람(f) / 울림(v) | ㅍ·ㅂ으로 냄 |
| /θ/ · /ð/ | 혀끝을 윗니 끝에 가볍게 대고 바람(think) / 울림(this) | ㅆ·ㄷ으로 냄 |
| /z/ | /s/ 자세에서 성대를 울림. 벌 소리 | ㅈ으로 냄 (zoo ≠ 주) |
| /ʒ/ · /dʒ/ | vision /ʒ/는 혀가 닿지 않고, joy /dʒ/는 닿았다 떨어짐 | 구별 없이 ㅈ |
| /ʃ/ · /s/ | she /ʃ/는 입술을 내밈, see /s/는 입술을 폄 | see를 '쉬'로 |
| /w/ | 입술을 작게 오므렸다 풂. wood, would, woman | '우'로 시작해 자음이 없음 |
| /j/ | year /jɪr/ ≠ ear /ɪr/ | y 소리를 빼먹음 |
## 끝소리를 살리기
- 한국어 화자는 끝 자음 뒤에 '으'를 붙이거나(bus → 버스) 삼키기 쉽습니다. 영어는 끝 자음이 문법입니다: work / works / worked, cat / cats, bag / back.
- 유성음 앞의 모음은 길고 무성음 앞은 짧습니다: bag(길게) / back(짧게), eyes / ice, peas / peace.
## -ed와 -s의 세 가지 소리
- -ed: 무성음 뒤 /t/(worked, stopped), 유성음 뒤 /d/(played, called), t·d 뒤 /ɪd/(wanted, needed).
- -s: 무성음 뒤 /s/(cats), 유성음 뒤 /z/(dogs, plays), 치찰음 뒤 /ɪz/(buses, watches).`,
items: `right|/raɪt/ 옳은, 오른쪽
light|/laɪt/ 빛
rice|/raɪs/ 쌀
lice|/laɪs/ 이 (벌레)
pray|/preɪ/ 기도하다
play|/pleɪ/ 놀다
fan|/fæn/ 선풍기
pan|/pæn/ 프라이팬
coffee|/ˈkɔːfi/ 커피
copy|/ˈkɑːpi/ 복사
very|/ˈveri/ 매우
berry|/ˈberi/ 베리
think|/θɪŋk/ 생각하다
sink|/sɪŋk/ 가라앉다
they|/ðeɪ/ 그들
day|/deɪ/ 날
zoo|/zuː/ 동물원
she|/ʃiː/ 그녀
see|/siː/ 보다
year|/jɪr/ 해, 년
ear|/ɪr/ 귀
worked|/wɜːrkt/ 일했다
wanted|/ˈwɑːntɪd/ 원했다`,
ex: `I really like rice.|나는 쌀밥을 정말 좋아해요.
Turn right at the light.|신호등에서 우회전하세요.
I think they're very late.|그들이 많이 늦는 것 같아요.
She sells seashells by the seashore.|그녀는 바닷가에서 조개껍데기를 판다.|/ʃ/와 /s/ 연습용 잰말놀이
I worked late and missed the bus.|늦게까지 일해서 버스를 놓쳤어요.|worked /t/, missed /t/`,
quiz: `/r/ 소리를 낼 때 혀끝은?|입 안 어디에도 닿지 않는다|윗잇몸에 닿는다|윗니에 닿는다|아랫입술에 닿는다 >> 닿으면 /l/이 됩니다.
wanted의 -ed 발음은?|/ɪd/|/t/|/d/|발음 안 함 >> t·d 뒤에서는 /ɪd/.
worked의 -ed 발음은?|/t/|/d/|/ɪd/|/ed/ >> 무성음 /k/ 뒤에서는 /t/. '워크드'가 아닙니다.
dogs의 -s 발음은?|/z/|/s/|/ɪz/|/ʃ/ >> 유성음 뒤에서는 /z/.` },

{ id: 's3', lv: 1, t: 'script', title: '강세·리듬·연음', sub: '들리지 않던 이유', body: `
영어는 **강세 박자 언어**입니다. 중요한 단어(내용어)는 길고 높고 또렷하게, 나머지(기능어)는 짧고 약하게 흘립니다. 모든 음절을 같은 세기로 말하는 한국어식 리듬이 알아듣기 힘든 가장 큰 원인입니다.
## 단어 강세
- 강세 위치가 틀리면 다른 단어이거나 못 알아듣습니다: **RE**cord(명사) / re**CORD**(동사), **PRE**sent / pre**SENT**, **DE**sert(사막) / de**SSERT**(디저트).
- 경향: 2음절 명사·형용사는 앞, 2음절 동사는 뒤. -tion/-sion/-ic 바로 앞 음절(infor**MA**tion, eco**NO**mic), -ity/-graphy/-logy는 뒤에서 세 번째(u**NI**versity, pho**TO**graphy).
## 문장 강세
- 내용어(명사·본동사·형용사·부사·부정어·의문사)에 강세, 기능어(관사·전치사·대명사·조동사·be동사·접속사)는 약화.
- 약형: to /tə/, for /fər/, of /əv/, and /ən/, can /kən/, at /ət/, you /jə/, him /ɪm/, them /ðəm/.
- **can /kən/** 은 약하게, **can't /kænt/** 는 강하고 길게. 구별은 t가 아니라 모음과 강세입니다.
## 연음
- 자음 + 모음은 이어서: an_apple, pick_it_up, not_at_all.
- 같은 자음은 한 번만: bus_stop, want_to → wanna.
- t + y → /tʃ/(don't you → 돈츄), d + y → /dʒ/(did you → 디쥬).
- **플랩 T** (미국): 모음 사이 t는 부드러운 ㄹ처럼: water, better, city, a lot of, get it.
- **삼키는 T**: 단어 끝이나 n 앞의 t는 숨만 멈춤: button, mountain, what, that.
- nt → n: internet, twenty, center(미국 구어).
## 축약
- gonna(going to), wanna(want to), gotta(got to), kinda, lemme, gimme, dunno. 말할 때는 자연스럽지만 격식 있는 글에서는 쓰지 않습니다.`,
items: `a record|REcord 기록 (명사)
to record|reCORD 녹음하다 (동사)
a present|PREsent 선물 (명사)
to present|preSENT 발표하다 (동사)
desert|DEsert 사막
dessert|deSSERT 디저트
photograph|PHOtograph 사진
photography|phoTOgraphy 사진술
economy|eCOnomy 경제
economic|ecoNOmic 경제의
water|플랩 T: '워러'에 가깝게
button|삼키는 T: '벗-은'
twenty|nt → n: '트웨니' (미국 구어)
comfortable|COMF-ter-ble 3음절
vegetable|VEG-tuh-ble 3음절
chocolate|CHOC-lit 2음절
interesting|IN-tres-ting 3음절`,
ex: `I can do it.|나는 할 수 있어요.|can은 약하게 /kən/
I can't do it.|나는 할 수 없어요.|can't는 강하게 /kænt/
What are you going to do?|뭐 할 거예요?|실제 발음: Whaddaya gonna do?
Did you eat yet?|벌써 먹었어요?|실제 발음: Didja eat yet?
Not at all.|전혀요.|이어서: no-ta-tall
I'd like a glass of water.|물 한 잔 주세요.
Pick it up and put it on the table.|그것을 집어서 탁자 위에 놓으세요.`,
quiz: `"I can swim"과 "I can't swim"을 구별하는 가장 중요한 단서는?|can't의 모음이 강하고 길다|끝의 t 소리|문장 끝 억양|말하는 속도 >> t는 자주 삼켜집니다. can은 /kən/으로 약화.
information의 강세 위치는?|infor-MA-tion|IN-formation|in-FOR-mation|informa-TION >> -tion 바로 앞 음절.
다음 중 보통 약하게 발음하는 단어는?|to|never|where|book >> 전치사는 기능어입니다.
dessert(디저트)의 강세는?|뒤 음절|앞 음절|둘 다 강하게|강세 없음 >> desert(사막)는 앞.` },

{ id: 'g1', lv: 2, t: 'grammar', title: '시제 ①: 현재·진행·과거·현재완료', sub: '한국어에 없는 현재완료를 중심으로', body: `
## 현재 단순 vs 현재 진행
- **현재 단순**: 습관·사실·시간표. I **work** at a bank. The train **leaves** at 9.
- **현재 진행**: 지금 이 순간, 일시적 상황, 확정된 가까운 미래. I'**m working** from home this week. I'**m meeting** her tomorrow.
- **상태 동사는 진행형 불가**: know, like, want, need, believe, understand, belong, own, seem. I'm knowing(×). 단, 뜻이 동작으로 바뀌면 가능: I'm having lunch / I'm thinking about it / You're being rude(일시적 행동).
## 과거 단순 vs 현재완료
| | 과거 단순 | 현재완료 (have + p.p.) |
| 시점 | 끝난 시점이 **명시되거나 분명함** | 시점이 중요하지 않거나 **지금까지 이어짐** |
| 신호어 | yesterday, last year, in 2020, ago, when | ever, never, already, yet, just, so far, since, for, recently |
| 예 | I **lost** my key yesterday. | I'**ve lost** my key. (그래서 지금 없음) |
- 현재완료의 네 쓰임: 경험(I've been to Japan), 계속(I've lived here for 5 years), 완료(I've just finished), 결과(He's gone).
- **끝난 과거 시점 표현과 현재완료는 함께 못 씁니다**: I've seen him yesterday(×) → I saw him yesterday.
- **have been to**(갔다 왔다) / **have gone to**(가 버려서 여기 없다).
- **for** + 기간(for three years) / **since** + 시작점(since 2020).
## 현재완료 진행 (have been -ing)
- 과거에 시작해 지금도 진행 중이거나 방금까지 계속된 활동: I'**ve been waiting** for an hour. 결과보다 **과정·지속**에 초점. 횟수·완성량을 말하면 단순 완료: I've read three chapters.
## 과거 진행·과거완료
- I **was cooking** when she **called**. (배경 + 사건)
- When I arrived, the train **had** already **left**. (과거보다 더 이전)`,
ex: `I usually take the subway, but I'm driving today.|보통은 지하철을 타는데 오늘은 운전해서 가요.
I've lived in Seoul for ten years.|서울에 10년째 살고 있어요.|지금도 살고 있음
I lived in Busan for ten years.|부산에 10년 살았어요.|지금은 살지 않음
Have you ever been to New York?|뉴욕에 가 본 적 있어요?
I haven't finished my report yet.|아직 보고서를 끝내지 못했어요.
She's gone to the bank. She'll be back soon.|그녀는 은행에 갔어요. 곧 돌아올 거예요.
I've been studying English since I was ten.|열 살 때부터 영어를 공부해 오고 있어요.
I was taking a shower when you called.|네가 전화했을 때 샤워 중이었어.
By the time we got there, the movie had already started.|우리가 도착했을 때는 영화가 이미 시작한 뒤였다.
I'm seeing the dentist tomorrow morning.|내일 아침에 치과에 가기로 되어 있어요.`,
quiz: `I ___ him yesterday.|saw|have seen|have been seeing|see >> 끝난 시점(yesterday)에는 과거 단순.
I ___ here since 2019.|have worked|work|am working|worked >> since + 현재완료.
I ___ what you mean.|know|am knowing|have been knowing|knowing >> know는 상태 동사.
"Where's Tom?" "He ___ to the store."|has gone|has been|went ever|is gone to >> 가서 지금 없음: has gone.
I ___ for you for two hours! Where were you?|have been waiting|am waiting|wait|waited since >> 지금까지 계속된 활동.
When I got home, my family ___ dinner. (이미 다 먹음)|had already eaten|already ate have|has already eaten|was already eat >> 과거보다 이전: 과거완료.` },

{ id: 'g2', lv: 2, t: 'grammar', title: '관사: a/an, the, 무관사', sub: '한국어에 없는 범주', body: `
관사는 "듣는 사람이 어느 것인지 **알고 있는가**"를 표시합니다.
## a / an: 듣는 사람이 아직 모르는 하나
- 처음 언급, 여럿 중 하나, 직업·종류: I saw **a** dog. She's **a** doctor.
- 소리 기준: **an** hour, **an** MBA, **a** university, **a** European.
## the: 서로 어느 것인지 아는 것
- 앞에서 언급: I saw a dog. **The** dog was huge.
- 상황상 하나뿐: Can you open **the** window? **the** sun, **the** internet, **the** government.
- 수식어로 한정: **the** book I bought yesterday, **the** capital of Korea.
- 최상급·서수·only·same: **the** best, **the** first, **the** same.
- 악기(play **the** piano), 발명품·종 전체(**The** tiger is endangered), the + 형용사(**the** rich).
## 무관사
- 일반적 의미의 복수·불가산: **Dogs** are loyal. I like **music**. **Life** is short. (The life is short ×)
- 식사·운동·학과·언어: have **breakfast**, play **soccer**, study **history**, speak **English**.
- 본래 목적의 기관: go to **school / bed / work / church / prison**, in **hospital**(영), at **home**. 건물 자체를 말하면 the: I went to **the** school to meet the teacher.
- 교통·통신 수단 by: by **bus**, by **email**.
## 고유명사
- 무관사: 대부분의 나라·도시·사람·산·호수·대륙·거리 (Korea, Seoul, Mount Everest, Lake Michigan).
- the: 복수형·연합 국가(**the** United States, **the** Netherlands, **the** Philippines, **the** UK), 강·바다·산맥·사막(**the** Han River, **the** Pacific, **the** Alps), 신문·호텔·박물관(**the** Times, **the** Hilton).
## 뜻이 달라지는 경우
- a few(조금 있다) / few(거의 없다), a little / little. in **the** future(미래에) / in future(앞으로는, 영). **the** number of(~의 수) / **a** number of(많은).`,
ex: `I bought a laptop yesterday. The laptop is very light.|어제 노트북을 샀어요. 그 노트북은 아주 가벼워요.
She works as an engineer at a tech company.|그녀는 기술 회사에서 엔지니어로 일해요.
Could you pass me the salt, please?|소금 좀 건네주시겠어요?
I love coffee, but the coffee here is terrible.|나는 커피를 좋아하지만 여기 커피는 형편없어요.|일반 vs 특정
Life is too short to worry about small things.|인생은 사소한 일을 걱정하기엔 너무 짧아요.
He goes to work by bus.|그는 버스로 출근해요.
The United States is bigger than Korea.|미국은 한국보다 커요.
It's the best movie I've ever seen.|내가 본 영화 중 최고예요.
I have a few friends in London.|런던에 친구가 몇 명 있어요.
I have few friends in London.|런던에는 친구가 거의 없어요.|a의 유무로 긍정/부정`,
quiz: `She is ___ honest person.|an|a|the|(무관사) >> honest의 h는 묵음.
I usually have ___ breakfast at seven.|(무관사)|a|the|an >> 식사 이름은 무관사.
___ sun rises in the east.|The|A|An|(무관사) >> 세상에 하나뿐인 것.
I like ___ music. (음악 일반)|(무관사)|the|a|an >> 일반적 의미의 불가산 명사.
He lives in ___ Netherlands.|the|a|(무관사)|an >> 복수형 국가명에는 the.
"I have little money"의 뜻은?|돈이 거의 없다|돈이 조금 있다|돈이 많다|돈이 딱 맞게 있다 >> a little은 '조금 있다', little은 '거의 없다'.` },

{ id: 'g3', lv: 2, t: 'grammar', title: '가산·불가산 명사와 수량 표현', sub: 'informations ×, advices ×', body: `
## 한국인이 자주 복수로 만드는 불가산 명사
- information, advice, furniture, equipment, luggage/baggage, news, homework, research, evidence, knowledge, progress, traffic, weather, software, feedback, staff, stuff, work(일), money, mail.
- 셀 때는 단위 명사: **a piece of** advice / information / furniture / news, **two pieces of** luggage, **a lot of** homework.
## 뜻에 따라 달라지는 명사
- paper(종이) / a paper(신문·논문), glass(유리) / a glass(잔), time(시간) / a time(번·때), experience(경험 전반) / an experience(한 번의 체험), room(공간) / a room(방), work(일) / a work(작품), chicken(닭고기) / a chicken(닭 한 마리), hair(머리카락 전체) / a hair(한 올).
## 수량사
| | 가산 복수 | 불가산 |
| 많은 | many | much (주로 부정·의문) |
| 약간 | a few | a little |
| 거의 없는 | few | little |
| 더 적은 | fewer | less |
| 둘 다 | a lot of, lots of, some, any, plenty of, enough, most, all |
- 긍정 평서문에서는 much·many보다 **a lot of**가 자연스럽습니다. I have much money(어색) → a lot of money.
- **some / any**: 긍정 some, 부정·의문 any. 권유·부탁 의문문에는 some(Would you like **some** tea?). 긍정문의 any는 "어떤 ~든".
- **every / each + 단수**, **all + 복수**: Every student **has** a book. **most** students / **most of the** students (most of students ×).
## 항상 복수인 것
- glasses, pants, jeans, scissors, shorts: a **pair of** jeans. people(복수 취급), police(복수 취급): The police **are** coming.
- 수 일치 주의: The news **is** good. Everyone **is** here. Ten dollars **is** enough. The number of students **is** increasing / A number of students **are** absent.`,
ex: `Can you give me some advice?|조언 좀 해 주실 수 있어요?
I need more information about the course.|그 과정에 대한 정보가 더 필요해요.
We bought two pieces of furniture.|우리는 가구 두 점을 샀어요.
I don't have much time, but I have a lot of work.|시간은 별로 없는데 일은 많아요.
There were fewer people than I expected.|예상보다 사람이 적었어요.
Would you like some coffee?|커피 좀 드릴까요?
Most of my friends live abroad.|내 친구들 대부분은 해외에 살아요.
The news was surprising.|그 소식은 놀라웠어요.
Every employee has to attend the meeting.|모든 직원이 회의에 참석해야 합니다.
She has a lot of experience in marketing.|그녀는 마케팅 경험이 많아요.`,
quiz: `Thank you for the ___.|information|informations|an information|informationes >> 불가산 명사.
I have ___ homework tonight.|a lot of|many|a few|several >> homework는 불가산.
___ students passed the exam.|Most|Most of|Almost|The most of >> most + 명사 / most of the + 명사.
There is ___ milk left. We need to buy some.|little|few|a few|many >> 불가산 + 거의 없는.
The police ___ looking for him.|are|is|was|has >> police는 복수 취급.
Let me give you ___.|a piece of advice|an advice|advices|some advices >> advice는 불가산.` },

{ id: 'g4', lv: 2, t: 'grammar', title: '전치사: 시간·장소·방향', sub: 'in / on / at의 원리', body: `
## 시간
| at (점) | on (날) | in (기간 속) |
| at 7:30, at noon, at night, at the weekend(영), at Christmas(시기), at the moment | on Monday, on May 5th, on my birthday, on Friday morning, on the weekend(미) | in May, in 2024, in summer, in the morning, in the 1990s, in two weeks(2주 뒤에) |
- **this / last / next / every / today / tomorrow** 앞에는 전치사 없음: I'll see you ~~on~~ next Monday.
- **by**(~까지, 기한) / **until**(~까지 계속): Finish it **by** Friday. / I'll stay **until** Friday.
- **for**(기간의 길이) / **during**(어떤 일이 벌어지는 동안) / **while** + 절: for two hours, during the meeting, while I was sleeping.
- **in** two days(지금부터 이틀 뒤) / **within** two days(이틀 이내) / two days **ago**(이틀 전) / two days **later**(그로부터 이틀 뒤).
- on time(정각에) / in time(늦지 않게).
## 장소
| at (지점) | on (표면·선) | in (공간 안) |
| at the bus stop, at the door, at home, at work, at school, at the airport, at a party | on the table, on the wall, on the second floor, on the street, on the bus/train/plane, on the left | in the room, in Seoul, in Korea, in the car/taxi, in the picture, in the world, in bed |
- 탈것: 서서 다닐 수 있으면 **on**(bus, train, plane, ship), 앉기만 하면 **in**(car, taxi). 자전거·말은 on.
- at the corner(길모퉁이 지점) / in the corner(방 구석) / on the corner(모퉁이 건물).
- arrive **at** the station(지점) / arrive **in** Paris(도시·나라). **arrive to ×**.
## 방향
- to(도착점), into(안으로), onto(위로), toward(쪽으로), through(통과), across(가로질러), along(따라서), past(지나쳐), over(위를 넘어).
- **home, here, there, abroad, downtown, upstairs** 앞에는 to 없음: go home, come here, go abroad.
## 전치사를 쓰지 않는 타동사 (한국어 조사에 끌리지 말 것)
- discuss ~~about~~, marry ~~with~~, enter ~~into~~ the room, reach ~~to~~, attend ~~to~~ the meeting, mention ~~about~~, approach ~~to~~, resemble ~~with~~, answer ~~to~~ the question, contact ~~to~~, call ~~to~~ me, explain **to me**(반대로 to 필요), ask me(to 없음).`,
ex: `The meeting starts at 9 on Monday morning.|회의는 월요일 아침 9시에 시작해요.
I was born in 1995, in April.|저는 1995년 4월에 태어났어요.
I'll be back in ten minutes.|10분 뒤에 돌아올게요.
Please submit the form by Friday.|금요일까지 양식을 제출해 주세요.
I waited until midnight, but he didn't come.|자정까지 기다렸지만 그는 오지 않았어요.
My office is on the fifth floor.|제 사무실은 5층에 있어요.
I read it on the train.|기차에서 읽었어요.
She got in the car and drove away.|그녀는 차에 타고 떠났어요.
We arrived in London at six in the morning.|우리는 아침 6시에 런던에 도착했어요.
We need to discuss the budget.|예산에 대해 논의해야 합니다.|discuss about ×
She married a doctor.|그녀는 의사와 결혼했어요.|married with ×
I fell asleep during the movie.|영화 보는 도중에 잠들었어요.`,
quiz: `See you ___ Friday.|on|in|at|to >> 요일은 on.
I'll see you ___ next week.|(전치사 없음)|on|in|at >> next/last/this 앞에는 전치사 없음.
You must finish this ___ 5 p.m. (기한)|by|until|for|during >> 기한은 by.
We discussed ___ the problem.|(전치사 없음)|about|on|for >> discuss는 타동사.
I'm ___ the bus now.|on|in|at|by >> 버스·기차·비행기는 on.
He arrived ___ the airport late.|at|to|in|on >> 지점은 at. arrive to는 틀림.
I lived there ___ three years.|for|during|while|since >> 기간의 길이는 for.` },

{ id: 'c1', lv: 2, t: 'confuse', title: '기본 동사의 구별', sub: 'say·tell·speak·talk / make·do / see·look·watch 외', body: `
## say / tell / speak / talk
- **say** + 말의 내용 (+ to 사람): He **said** (that) he was tired. / He said **to me**…
- **tell** + **사람** + 내용: He **told me** (that)… (told to me ×). tell a story / a lie / the truth / the difference.
- **speak**: 언어·공식적 발화. speak English, speak **to/with** someone, speak at a conference.
- **talk**: 대화. talk **to/with** someone **about** something.
## make / do
- **make**: 만들어 냄. make a mistake / a decision / a plan / an effort / money / a call / a reservation / progress / a difference / friends / an appointment / noise / sure.
- **do**: 수행. do homework / the dishes / the laundry / business / research / a favor / your best / damage / exercise / well.
## see / look / watch, hear / listen
- **see·hear**: 저절로 보이고 들림. **look at·listen to**: 의도적으로. **watch**: 움직이는 것을 지켜봄(watch TV, watch a game). 영화관에서는 see a movie.
## come / go, bring / take
- 기준은 **듣는 사람**: 상대에게 갈 때는 come. "I'm **coming**!"(갈게요!) — I'm going이라고 하면 다른 데로 간다는 뜻. bring(이쪽·상대 쪽으로 가져옴) / take(다른 곳으로 가져감).
## borrow / lend, rent
- borrow A **from** B(빌리다) / lend B A = lend A **to** B(빌려주다). Can I **borrow** your pen? = Can you **lend** me your pen?
## learn / study, know / find out / realize
- study는 공부하는 행위, learn은 습득하는 결과. know는 아는 상태, find out은 알아내다, realize는 깨닫다, recognize는 알아보다, get to know는 사람을 알아 가다.
## wear / put on, hope / wish / expect / look forward to
- put on은 입는 동작, wear는 입고 있는 상태. hope는 가능한 바람(I hope you **pass**), wish는 사실과 반대(I wish I **were** taller) 또는 기원(wish you luck), expect는 그럴 것이라 예상(기대하며 설렌다는 뜻 아님), look forward to **-ing**는 설레며 기다림.
## play / hang out, meet / see
- 어른이 "친구와 놀았다"는 hang out with friends(play with friends는 아이). 처음 만남은 meet(Nice to **meet** you), 아는 사람을 만남은 see(Nice to **see** you again). 약속해서 만나는 것도 I'm **seeing/meeting** a friend.`,
ex: `She told me that she was leaving.|그녀는 떠난다고 나에게 말했어요.
He said nothing to me about it.|그는 그것에 대해 나에게 아무 말도 하지 않았어요.
Can I speak to Mr. Kim, please?|김 선생님과 통화할 수 있을까요?
I made a mistake on the test.|시험에서 실수를 했어요.
Could you do me a favor?|부탁 하나 들어줄 수 있어요?
I'm coming! Wait for me.|가요! 기다려 주세요.|going이 아님
Can I borrow your charger?|충전기 좀 빌릴 수 있을까요?
I hung out with my friends last weekend.|지난 주말에 친구들이랑 놀았어요.
I'm looking forward to seeing you.|당신을 만나기를 고대하고 있어요.|to 뒤에 -ing
I wish I had more time.|시간이 더 있으면 좋을 텐데.
It was nice meeting you.|만나서 반가웠어요.|헤어질 때`,
quiz: `He ___ me the truth.|told|said|spoke|talked >> tell + 사람 + 내용.
I need to ___ a decision.|make|do|take a|have do >> make a decision.
"Dinner's ready!" "OK, I'm ___!"|coming|going|arriving to|bringing >> 듣는 사람 쪽으로 이동은 come.
Can you ___ me some money?|lend|borrow|rent to|owe >> 빌려주다는 lend.
I'm looking forward to ___ from you.|hearing|hear|heard|be heard >> look forward to + -ing.
I ___ my homework before dinner.|did|made|played|worked >> do homework.
(성인이 친구와 놀았다고 할 때) I ___ with my friends.|hung out|played|toyed|gamed >> play with는 아이들에게 쓰는 말.` },

{ id: 'p1', lv: 2, t: 'phrase', title: '만남·스몰토크·맞장구', sub: '교과서 밖의 실제 인사', body: `
"How are you?" — "I'm fine, thank you. And you?"는 틀리지는 않지만 지나치게 교과서적입니다. How are you?는 대부분 **인사**이지 질문이 아니므로 짧게 받고 되물으면 됩니다.
- 인사: How's it going? / How are you doing? / What's up?(뭐 해, 별일 없지) / How have you been?(오랜만에)
- 대답: Good, thanks. You? / Pretty good. / Not bad. / Can't complain. / (What's up?에는) Not much. You?
- 스몰토크 화제: 날씨, 주말, 일, 음식, 여행. 나이·결혼·연봉·체중·종교·정치는 피합니다.
- 맞장구가 없으면 무관심해 보입니다: Really? / Oh, nice. / That's great. / No way! / That makes sense. / I see. / Right. / Exactly. / Tell me about it.(내 말이) / That sounds tough. / Good for you!`,
ex: `Hey, how's it going?|안녕, 어떻게 지내?
Pretty good, thanks. How about you?|잘 지내요, 고마워요. 당신은요?
Long time no see! How have you been?|오랜만이에요! 어떻게 지냈어요?
What do you do?|무슨 일 하세요?|직업을 묻는 표현. What's your job?보다 자연스러움
I work in marketing.|마케팅 일을 해요.
What do you do for fun?|취미가 뭐예요?|What's your hobby?보다 자연스러움
I'm really into hiking these days.|요즘 등산에 푹 빠져 있어요.
How was your weekend?|주말 어땠어요?
Nothing special. I just stayed home and relaxed.|별거 없었어요. 그냥 집에서 쉬었어요.
That sounds great!|좋겠네요!
Oh, really? I didn't know that.|아, 정말요? 몰랐어요.
I'm sorry to hear that.|그것 참 안됐네요.|나쁜 소식을 들었을 때
Sorry, I didn't catch that. Could you say that again?|죄송해요, 못 알아들었어요. 다시 말씀해 주시겠어요?
It was nice talking to you.|이야기 나눠서 즐거웠어요.
I should get going. Take care!|이제 가 봐야겠어요. 잘 지내요!
Let's keep in touch.|계속 연락하고 지내요.`,
quiz: `"What's up?"에 가장 자연스러운 대답은?|Not much. You?|I'm fine, thank you. And you?|The ceiling.|Yes, I am. >> 가벼운 인사에는 가볍게.
직업을 묻는 가장 자연스러운 표현은?|What do you do?|What is your job name?|What are you?|How do you work? >> What do you do (for a living)?
상대의 나쁜 소식에 알맞은 반응은?|I'm sorry to hear that.|Good for you.|No problem.|You're welcome. >> 유감을 표하는 표현.
못 알아들었을 때 정중하게 되묻는 말은?|Sorry, I didn't catch that.|What?|Speak again.|I can't hear your English. >> What?만 쓰면 무례하게 들릴 수 있습니다.` },

{ id: 'p2', lv: 2, t: 'phrase', title: '식당·카페·쇼핑', sub: '주문은 I want가 아니라', body: `
주문·부탁에서 **I want…**와 **Give me…**는 무례하게 들릴 수 있습니다. **Can I get / Could I have / I'd like / I'll have**를 쓰세요. 끝에 please를 붙이면 충분합니다.`,
ex: `Hi, table for two, please.|안녕하세요, 두 명 자리 부탁해요.
Do you have a reservation?|예약하셨나요?|직원의 말
Could we see the menu, please?|메뉴판 좀 볼 수 있을까요?
Are you ready to order?|주문하시겠어요?|직원의 말
We need a few more minutes.|조금만 더 시간을 주세요.
I'll have the grilled salmon, please.|구운 연어로 할게요.
Can I get a medium latte to go?|미디엄 라테 포장으로 주시겠어요?
For here or to go?|드시고 가세요, 가져가세요?|직원의 말
How would you like your steak?|스테이크는 어떻게 익혀 드릴까요?|rare, medium rare, medium, well-done
Does this have nuts in it? I'm allergic.|여기에 견과류가 들어가나요? 알레르기가 있어서요.
Could we get the check, please?|계산서 좀 주시겠어요?|영국은 bill
Can we split the bill?|따로 계산할 수 있을까요?
I'm just looking, thanks.|그냥 둘러보는 중이에요, 감사합니다.
Do you have this in a smaller size?|이거 더 작은 사이즈 있나요?
Can I try this on?|이거 입어 봐도 될까요?
I'd like to return this. Here's my receipt.|이거 반품하고 싶어요. 영수증 여기 있어요.
It's on me.|내가 살게요.`,
quiz: `카페에서 가장 자연스러운 주문은?|Can I get an iced americano, please?|I want iced americano.|Give me iced americano.|Iced americano, bring. >> Can I get / I'll have / I'd like.
"For here or to go?"의 뜻은?|매장에서 드시나요, 포장인가요|여기로 가나요, 저기로 가나요|현금인가요, 카드인가요|지금인가요, 나중인가요 >> to go = 포장(영국은 takeaway).
가게에서 점원이 "Can I help you?"라고 할 때, 그냥 구경 중이라면?|I'm just looking, thanks.|No.|Don't help me.|I'm seeing only. >> 정형 표현입니다.` },

{ id: 'r1', lv: 2, t: 'read', title: '읽기: A New Job', sub: '초중급 본문 · 시제의 흐름', body: `과거 단순, 현재완료, 현재 진행이 한 글 안에서 어떻게 역할을 나누는지 살펴보세요.`,
ex: `I started a new job three weeks ago.|저는 3주 전에 새 직장을 시작했습니다.
Before that, I had worked at a small bookstore for five years.|그 전에는 작은 서점에서 5년 동안 일했습니다.
I liked the bookstore, but I wanted to try something different.|서점이 좋았지만 뭔가 다른 것을 해 보고 싶었습니다.
Now I work for a company that makes language-learning apps.|지금은 언어 학습 앱을 만드는 회사에서 일합니다.
So far, everything has gone well.|지금까지는 모든 것이 순조로웠습니다.
My coworkers have been very kind, and I've already learned a lot.|동료들은 아주 친절했고 저는 벌써 많은 것을 배웠습니다.
This week, I'm working on my first real project.|이번 주에는 저의 첫 진짜 프로젝트를 진행하고 있습니다.
It's challenging, but I'm enjoying it.|어렵지만 즐기고 있습니다.
I still miss the smell of old books sometimes.|가끔은 여전히 오래된 책 냄새가 그립습니다.
But I think I made the right decision.|하지만 옳은 결정을 내렸다고 생각합니다.`,
quiz: `How long did the writer work at the bookstore?|Five years|Three weeks|One year|It doesn't say >> had worked … for five years.
Why does the writer use "has gone" in "everything has gone well"?|The period started in the past and continues to now|It happened at a finished time|It will happen in the future|It is a habit >> so far + 현재완료.
What is the writer doing this week?|Working on a first project|Selling books|Looking for a job|Taking a vacation >> I'm working on my first real project.` },
]);
