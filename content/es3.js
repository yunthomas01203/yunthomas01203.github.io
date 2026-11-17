/* 스페인어 ③ — 단원 구성 + 소리 심화 + 첫 문장 */
LL.meta('es', {
  s1: ['① 소리와 철자', 10], s2: ['① 소리와 철자', 11],
  v1: ['① 첫 문장 만들기', 100], g1: ['① 첫 문장 만들기', 101], g2: ['① 첫 문장 만들기', 104],
  g3: ['② 현재 시제와 기본 구문', 200], g4: ['② 현재 시제와 기본 구문', 203], c1: ['② 현재 시제와 기본 구문', 208],
  g5: ['③ 과거 시제', 300],
  p1: ['⑤ 실생활 회화', 500], r1: ['⑥ 읽기·듣기', 600],
  g6: ['① 대명사·명령·관계사', 100], g9: ['① 대명사·명령·관계사', 101],
  g7: ['② 시제의 확장', 200], g8: ['③ 접속법', 300],
  c2: ['④ 어휘와 구별', 400], p2: ['⑤ 실생활 회화', 500], r2: ['⑥ 읽기·듣기', 600],
  g10: ['① 고급 문법', 100], g11: ['① 고급 문법', 101], i1: ['② 어휘와 관용 표현', 200],
  r3: ['③ 읽기·듣기', 300],
});
LL.add('es', [
{ id: 's3', lv: 1, t: 'script', u: '① 소리와 철자', o: 12, title: '음절·연음·억양', sub: '단어를 넘어 문장의 소리로', body: `
낱말 하나하나는 읽을 수 있는데 원어민의 말이 들리지 않는다면, 그 이유는 대개 **단어 사이의 경계가 소리에서 사라지기 때문**입니다. 스페인어는 단어가 아니라 **음절**을 단위로 흘러가는 언어입니다.

## 음절 박자 언어

스페인어는 모든 음절을 **거의 같은 길이**로 발음합니다. 영어처럼 강세 없는 음절을 뭉개지 않고, 한국어처럼 또박또박 끊지도 않습니다. 기관총처럼 "타타타타" 이어지는 리듬입니다.

- 강세 음절은 **조금 더 세고 높게** 낼 뿐, 길게 늘이지 않습니다.
- 강세 없는 모음도 a·e·i·o·u 본래의 소리를 그대로 유지합니다. chocolate는 "초콜릿"이 아니라 **초-코-라-떼** 네 음절입니다.

## 음절 나누기

음절을 나눌 줄 알아야 강세 규칙을 적용할 수 있고, 줄을 바꿀 때도 필요합니다.

- 자음 하나는 뒤 모음에 붙습니다: ca-sa, a-mi-go.
- 자음 둘은 갈라집니다: car-ta, es-tu-dian-te, ac-ción.
- 단, **자음 + l / r**(pr, br, tr, dr, cr, gr, fr, pl, bl, cl, gl, fl)은 한 덩어리입니다: ha-**bl**ar, li-**br**o, pa-**dr**e, a-**pl**i-car.
- ch, ll, rr은 나누지 않습니다: mu-**ch**o, ca-**ll**e, pe-**rr**o.
- **강모음(a, e, o) 둘**은 갈라집니다: te-a-tro, po-e-ta, ca-er.
- **강모음 + 약모음(i, u)** 또는 약모음끼리는 한 음절(이중모음)입니다: **ai**-re, **bue**-no, **ciu**-dad, **via**-je.
- 약모음에 강세 부호가 있으면 갈라집니다: dí-a, pa-ís, ba-úl.

## 연음 (enlace): 단어 경계를 넘는다

**① 자음 + 모음**: 앞 단어 끝 자음이 뒤 단어 첫 모음에 붙습니다.

- lo**s a**migos → lo-**sa**-mi-gos
- e**l o**tro → e-**lo**-tro
- u**n a**ño → u-**na**-ño
- co**n e**lla → co-**ne**-lla

**② 모음 + 모음** (sinalefa): 서로 다른 모음이 만나면 **한 음절처럼** 이어 발음합니다.

- m**i a**migo → mia-mi-go
- l**a e**scuela → laes-cue-la
- ¿Cóm**o e**stás? → có-moes-tás

**③ 같은 모음**: 하나로 합쳐집니다.

- v**a a** hablar → va-blar (h는 묵음이므로 a·a·a가 이어짐)
- d**e e**ste → des-te
- m**i hi**jo → mi-jo

그래서 "¿Qué vas a hacer?"는 "께 바사세르"처럼 들립니다. 듣기가 어려운 것은 어휘가 부족해서가 아니라 이 연음에 익숙하지 않아서인 경우가 많습니다.

## 자음의 약화

- 모음 사이의 **b·d·g**는 입술·혀를 완전히 닫지 않는 부드러운 마찰음이 됩니다. na**d**a, a**g**ua, sa**b**er.
- 단어 끝의 **-d**는 매우 약하거나 탈락합니다: Madri(d), verda(d), uste(d).
- 스페인 구어에서 **-ado**의 d는 자주 떨어집니다: cansa(d)o → cansao.
- 스페인 남부·카리브해·남미 여러 지역에서 음절 끝 **s**는 h처럼 숨소리가 되거나 탈락합니다: e(s)to(s), má(s) → "마".

## 억양

| 문장 종류 | 끝의 억양 |
| 평서문 | 내려감 ↘ |
| 예/아니오 의문문 | 올라감 ↗ |
| 의문사 의문문 | 내려감 ↘ (의문사에서 높게 시작) |
| 나열 | 항목마다 살짝 올리고 마지막에서 내림 |

스페인어는 **어순을 바꾸지 않고 억양만으로** 의문문을 만들 수 있습니다. "Tienes hambre."(배고프구나)와 "¿Tienes hambre?"(배고파?)는 글자는 같고 억양만 다릅니다. 그래서 글에서는 문장 **앞**에도 ¿를 써서 미리 알려 줍니다.

## 지역에 따른 발음

- **z, ce, ci**: 스페인 중북부는 영어 th /θ/(distinción), 그 밖의 대부분 지역은 s(seseo). 어느 쪽이든 표준입니다.
- **ll / y**: 대부분 지역에서 같은 소리(yeísmo). 아르헨티나·우루과이에서는 '쉬/쥐'에 가깝게 납니다(**ll**uvia → 슈비아).
- **j / g(e,i)**: 스페인은 목을 세게 긁고, 중남미는 부드러운 h에 가깝습니다.
- 학습할 때는 한 가지 발음을 정해 일관되게 쓰되, 다른 발음도 알아들을 수 있으면 됩니다.`,
items: `los amigos|lo-sa-mi-gos · 친구들
el otro|e-lo-tro · 다른 것
un año|u-na-ño · 일 년
mi amigo|mia-mi-go · 내 친구
la escuela|laes-cue-la · 학교
va a hablar|va-blar · 말할 것이다
de este|des-te · 이것의
chocolate|cho-co-la-te · 초콜릿 (4음절)
estudiante|es-tu-dian-te · 학생
teatro|te-a-tro · 극장 (강모음끼리 분리)
ciudad|ciu-dad · 도시 (이중모음)
día|dí-a · 날 (부호로 분리)
hablar|ha-blar · 말하다 (bl은 한 덩어리)
Madrid|끝의 d는 약하게 · 마드리드
nada|모음 사이 d는 부드럽게 · 아무것도`,
ex: `¿Qué vas a hacer?|뭐 할 거야?|소리: qué-va-sa-cer
¿Cómo estás?|어떻게 지내?|소리: có-moes-tás
Los otros alumnos están en el aula.|다른 학생들은 교실에 있어요.|소리: lo-so-tro-sa-lum-no-ses-tá-ne-ne-lau-la
Tienes hambre.|배고프구나.|평서문: 끝을 내림
¿Tienes hambre?|배고파?|의문문: 끝을 올림
Mi hijo va a la escuela.|우리 아들은 학교에 다녀요.`,
quiz: `"los amigos"의 실제 음절 흐름은?|lo-sa-mi-gos|los-a-mi-gos|lo-sam-i-gos|los-am-igos >> 자음이 뒤 단어의 모음에 붙습니다.
teatro의 음절 수는?|3음절 (te-a-tro)|2음절 (tea-tro)|4음절|1음절 >> 강모음 e와 a는 갈라집니다.
ha-blar처럼 나누지 않는 자음 묶음은?|bl|rt|st|nt >> 자음 + l/r은 한 덩어리.
"¿Tienes hambre?"가 의문문임을 나타내는 소리의 표지는?|문장 끝을 올리는 억양|어순 도치|의문 조사|강세의 위치 >> 어순은 평서문과 같습니다.
"va a hablar"에서 일어나는 현상은?|같은 모음이 하나로 합쳐진다|모든 a를 길게 따로 발음한다|h를 세게 발음한다|강세가 사라진다 >> h는 묵음이므로 a가 이어집니다.` },

{ id: 'g20', lv: 2, t: 'grammar', u: '① 첫 문장 만들기', o: 102, title: '주어 대명사와 호칭', sub: 'yo·tú·usted·vos·vosotros', body: `
스페인어 동사는 어미만으로 주어를 알 수 있습니다. 그래서 주어 대명사는 **보통 생략**하고, 넣으면 특별한 뜻이 생깁니다. 이것이 한국어·영어와 가장 다른 첫걸음입니다.

## 주어 대명사

| | 단수 | 복수 |
| 1인칭 | yo 나 | nosotros / nosotras 우리 |
| 2인칭 (친근) | tú 너 | vosotros / vosotras 너희 (스페인) |
| 2인칭 (격식) | usted 당신 | ustedes 당신들 / 너희 (중남미) |
| 3인칭 | él 그 / ella 그녀 | ellos 그들 / ellas 그녀들 |

- **usted·ustedes는 뜻은 2인칭이지만 동사는 3인칭**을 씁니다. 원래 "vuestra merced"(귀하)에서 온 말이기 때문입니다. 줄여서 Ud., Uds.로 씁니다.
- 여성만으로 이루어진 집단은 nosotras, vosotras, ellas. **남성이 한 명이라도 섞이면 남성형**을 씁니다.
- "그것"에 해당하는 주어 대명사는 사실상 없습니다. 사물이 주어이면 그냥 생략합니다: Es caro.(그것은 비싸다)

## 주어를 생략한다

- **Hablo** español.(나는 스페인어를 한다) — yo를 붙이지 않는 것이 보통입니다.
- **¿Tienes** hambre?(너 배고파?)

**주어 대명사를 넣는 경우**

- **대조·강조**: **Yo** trabajo y **él** descansa.(나는 일하고 그는 쉰다) **Yo** lo hice.(내가 했다)
- **모호함 해소**: 3인칭 동사는 él·ella·usted가 모두 가능하므로 필요하면 밝힙니다. **Ella** es profesora.
- **질문에 대한 답**: ¿Quién quiere café? — **Yo**.
- usted는 공손함을 드러내기 위해 자주 넣습니다: ¿Cómo está **usted**?

매 문장에 yo를 넣으면 "나는, 내가, 나야말로" 하고 자기를 내세우는 말투로 들립니다.

## tú와 usted: 거리의 문법

| | tú | usted |
| 관계 | 친구, 가족, 또래, 아이, 동료 | 초면의 어른, 고객, 상사, 노인, 공적 상황 |
| 동사 | 2인칭 단수 (hablas) | 3인칭 단수 (habla) |
| 소유사 | tu | su |
| 목적격 | te | lo / la / le |

- **스페인**: tú의 범위가 매우 넓습니다. 가게 점원, 처음 만난 또래, 젊은 교수에게도 tú를 씁니다. usted는 노인, 공식 석상, 고객 응대에 남아 있습니다.
- **중남미**: 대체로 usted를 더 넓게 씁니다. 콜롬비아·코스타리카 일부에서는 가족·연인 사이에도 usted를 씁니다.
- 잘 모르겠으면 **usted로 시작**하고, 상대가 "Puedes tutearme"(말 놓으세요) / "Trátame de tú"라고 하면 바꿉니다. tú로 말하는 것을 **tutear**라고 합니다.

## vosotros와 ustedes

- **스페인**: 친근한 복수는 **vosotros**, 격식의 복수는 ustedes.
- **중남미 전체와 스페인 카나리아 제도**: vosotros를 쓰지 않고 **ustedes 하나**로 통일합니다. 친구들에게도 ¿Cómo están (ustedes)?
- 중남미 스페인어를 목표로 한다면 vosotros 활용은 읽고 이해하는 수준이면 충분합니다.

## vos: 아르헨티나·우루과이·중미

tú 대신 **vos**를 쓰는 지역이 있고(voseo), 현재형과 명령형이 다릅니다.

- tú **tienes** → vos **tenés** / tú **eres** → vos **sos** / tú **puedes** → vos **podés**
- 명령: (tú) ven → (vos) **vení** / habla → **hablá** / di → **decí**
- 목적격·소유사는 tú와 같습니다(te, tu).

## 이름과 호칭

- **señor (Sr.)** / **señora (Sra.)** / **señorita (Srta.)** + 성(姓). 직접 부를 때는 관사 없이(Buenos días, **señor** López), 그 사람에 대해 말할 때는 정관사를 붙입니다(**El** señor López no está).
- **don / doña** + 이름: 존경을 담은 호칭. don Carlos, doña María.
- 직업 호칭: doctor/a, profesor/a, licenciado/a(멕시코 등에서 학사 이상 전문직).
- 스페인어권 사람은 **성이 둘**입니다(아버지 성 + 어머니 성). Gabriel García Márquez의 성은 García Márquez이고, 줄여 부를 때는 첫째 성 García를 씁니다.`,
ex: `Soy estudiante.|저는 학생입니다.|yo를 붙이지 않는 것이 보통
Yo soy de Corea y ella es de Japón.|나는 한국 출신이고 그녀는 일본 출신이야.|대조할 때는 주어를 밝힘
¿De dónde es usted?|어디 출신이십니까?
¿Cómo te llamas?|이름이 뭐야?|tú
¿Cómo se llama usted?|성함이 어떻게 되십니까?|usted는 3인칭 동사
Nosotras somos hermanas.|우리는 자매예요.|여성만 있을 때
¿Vosotros sois de aquí?|너희는 여기 출신이야?|스페인
¿Ustedes son de aquí?|여러분은 여기 출신인가요?|중남미에서는 친한 사이에도
¿Quién quiere café? — Yo.|누가 커피 마실래? — 나.
Puedes tutearme, ¿eh?|나한테 말 놓아도 돼.
Vos sos muy amable.|너 참 친절하구나.|아르헨티나의 vos
El señor García no está en la oficina.|가르시아 씨는 사무실에 안 계십니다.|그 사람에 대해 말할 때는 정관사
Buenos días, señora Ruiz.|안녕하세요, 루이스 부인.|직접 부를 때는 관사 없음`,
quiz: `usted와 함께 쓰는 동사의 인칭은?|3인칭 단수|2인칭 단수|1인칭 단수|2인칭 복수 >> usted habla, usted es.
"나는 스페인어를 해요"의 가장 자연스러운 표현은?|Hablo español.|Yo hablo yo español.|Mí hablo español.|Hablo yo mismo español siempre. >> 주어는 보통 생략합니다.
중남미에서 친구 여러 명에게 "너희"로 쓰는 말은?|ustedes|vosotros|vos|tús >> 중남미는 ustedes로 통일.
여성 네 명과 남성 한 명의 집단은?|ellos|ellas|elles만 가능|ustedas >> 남성이 한 명이라도 있으면 남성형.
아르헨티나의 "vos tenés"에 해당하는 표준형은?|tú tienes|usted tiene|vosotros tenéis|él tiene >> voseo.
그 사람에 대해 말할 때 올바른 것은?|La señora Ruiz es médica.|Señora Ruiz es médica.|Una señora Ruiz es médica.|Lo señora Ruiz es médica. >> 호칭 앞에 정관사.` },

{ id: 'g21', lv: 2, t: 'grammar', u: '① 첫 문장 만들기', o: 103, title: '지시사와 소유사', sub: 'este·ese·aquel / mi·tu·su·mío', body: `
## 지시사: 세 단계의 거리

한국어 "이·그·저"와 같은 3단계입니다.

| | 남성 단수 | 여성 단수 | 남성 복수 | 여성 복수 | 중성 |
| 이 (화자 가까이) | este | esta | estos | estas | esto |
| 그 (청자 가까이 / 조금 떨어짐) | ese | esa | esos | esas | eso |
| 저 (둘 다에게서 멂) | aquel | aquella | aquellos | aquellas | aquello |

- 남성 단수는 -o가 아니라 **este, ese**입니다. esto·eso는 중성이라 명사 앞에 쓸 수 없습니다: **este** libro(○), esto libro(×).
- 명사 앞에서는 형용사처럼(**este** coche), 명사 없이는 대명사로 씁니다(Quiero **este**).
- 짝이 되는 장소 부사: **aquí / acá**(여기), **ahí**(거기), **allí / allá**(저기).

**중성 esto·eso·aquello**: 이름을 모르는 것, 상황·말 전체를 가리킵니다. 복수형이 없습니다.

- ¿Qué es **esto**?(이게 뭐예요?)
- **Eso** es verdad.(그건 사실이야)
- **Eso** es.(바로 그거야) / **Eso** sí.(그건 그래) / Por **eso**.(그래서)

**시간의 지시**: **este** año(올해), **esta** semana, **ese** día(그날), en **aquella** época(그 시절에), en **aquel** entonces(그 당시).

## 소유 형용사 (명사 앞)

| 소유자 | 단수 명사 앞 | 복수 명사 앞 |
| yo | mi | mis |
| tú | tu | tus |
| él / ella / usted | su | sus |
| nosotros | nuestro / nuestra | nuestros / nuestras |
| vosotros | vuestro / vuestra | vuestros / vuestras |
| ellos / ellas / ustedes | su | sus |

**핵심: 소유사는 '소유자'가 아니라 '소유되는 것'의 수(와 성)에 일치합니다.**

- **mis** libros = 나의 책**들** (내가 여러 명인 것이 아님)
- **su** casa = 그의 / 그녀의 / 당신의 / 그들의 집 — 집이 하나이면 su
- **sus** casas = (누구의 것이든) 집**들**
- **nuestra** casa = 우리 집 (casa가 여성이라 nuestra)

**su의 모호함**: su는 여섯 가지 뜻(그의, 그녀의, 당신의, 그들의, 그녀들의, 당신들의)이 있습니다. 문맥으로 구별되지 않으면 **de + 대명사**로 풉니다.

- **su** libro → el libro **de él** / **de ella** / **de usted** / **de ellos**

## 소유 대명사 (명사 뒤·단독)

| mío / mía / míos / mías | 나의 것 |
| tuyo / tuya / tuyos / tuyas | 너의 것 |
| suyo / suya / suyos / suyas | 그의·그녀의·당신의·그들의 것 |
| nuestro / nuestra / … | 우리의 것 |
| vuestro / vuestra / … | 너희의 것 |

- **ser 뒤**: Este libro es **mío**.(이 책은 내 것이다)
- **정관사 + 소유 대명사**: Mi coche es rojo; **el tuyo** es azul.(내 차는 빨갛고 네 것은 파랗다)
- **명사 뒤**: un amigo **mío**(내 친구 중 하나), ¡Dios **mío**!(맙소사), hijo **mío**(얘야).
- **un amigo mío**와 **mi amigo**: 앞은 "친구 여럿 중 하나", 뒤는 "(이미 아는) 내 친구".

## 소유사를 쓰지 않는 곳

스페인어는 **신체 부위·옷·개인 소지품**에 소유사 대신 **정관사**를 씁니다. 누구의 것인지는 재귀 대명사나 간접 목적격 대명사가 알려 줍니다.

- **Me** lavo **las** manos.(나는 손을 씻는다 — mis manos ×)
- **Me** duele **la** cabeza.(머리가 아프다)
- **Se** puso **el** abrigo.(그는 외투를 입었다)
- Abre **los** ojos.(눈을 떠)
- **Le** robaron **la** cartera.(그는 지갑을 도둑맞았다)

영어·한국어식으로 mi cabeza, mis manos라고 하면 틀린 것은 아니어도 매우 어색합니다.

## 누구의 것인지 묻기

- **¿De quién** es este paraguas? — Es **mío**. / Es **de** Juan.(누구의 우산이에요? — 제 거예요. / 후안 거예요.)
- 소유는 **de + 명사**로 나타냅니다: el coche **de** mi padre(아버지의 차). 영어의 's 같은 형태는 없습니다.`,
ex: `Este libro es muy interesante.|이 책은 아주 재미있어요.
¿Quién es esa chica?|그 여자애는 누구야?
Aquella montaña es muy alta.|저 산은 아주 높아요.
¿Qué es esto? — Es un regalo para ti.|이게 뭐야? — 너 주려는 선물이야.
Eso no es verdad.|그건 사실이 아니에요.
Mis padres viven en Busan.|우리 부모님은 부산에 사세요.
Nuestra casa está cerca del parque.|우리 집은 공원 근처에 있어요.
¿Es su coche? — Sí, es mío.|당신 차예요? — 네, 제 거예요.
Mi móvil es viejo; el tuyo es nuevo.|내 휴대폰은 낡았고 네 것은 새것이야.
Un amigo mío trabaja en Madrid.|내 친구 하나가 마드리드에서 일해.
¿De quién son estas llaves?|이 열쇠들은 누구 거예요?
Me duele mucho la espalda.|허리가 많이 아파요.|mi espalda가 아님
Se lavó las manos antes de comer.|그는 먹기 전에 손을 씻었다.
En aquella época no había internet.|그 시절에는 인터넷이 없었다.`,
quiz: `___ libro es mío. (이)|Este|Esto|Esta|Estos >> 남성 단수 명사 앞은 este.
¿Qué es ___? (이름 모르는 것)|esto|este|esta|estos >> 중성 esto.
___ libros (나의 책들)|mis|mi|mío|míos libros >> 소유되는 것이 복수이므로 mis.
___ casa (우리 집)|nuestra|nuestro|nuestras|nos >> casa가 여성 단수.
Este paraguas es ___. (내 것)|mío|mi|mis|yo >> ser 뒤에는 소유 대명사.
Me lavo ___ manos.|las|mis|mías|unas >> 신체에는 정관사.
"su casa"가 가리킬 수 없는 것은?|나의 집|그의 집|당신의 집|그들의 집 >> su는 3인칭·usted(es)의 소유.
Mi coche es rojo; ___ es azul. (네 것)|el tuyo|tuyo el|tu|el tu >> 정관사 + 소유 대명사.` },

{ id: 'g22', lv: 2, t: 'grammar', u: '① 첫 문장 만들기', o: 105, title: 'hay·tener와 tener 관용 표현', sub: '"있다"의 여러 얼굴', body: `
한국어 "있다"는 스페인어에서 세 동사로 갈립니다. **hay**(존재), **estar**(위치), **tener**(소유)입니다.

## hay: ~이 있다 (존재)

haber의 특수한 현재형으로, **형태가 변하지 않습니다.** 단수에도 복수에도 hay입니다.

- **Hay** un libro en la mesa.(탁자에 책이 한 권 있다)
- **Hay** muchos libros en la mesa.(탁자에 책이 많이 있다)
- ¿**Hay** un banco por aquí?(이 근처에 은행이 있나요?)
- No **hay** problema.(문제없어요)

**hay 뒤에는 불특정한 것만** 옵니다.

| hay와 함께 쓰는 것 | hay와 함께 쓸 수 없는 것 |
| un / una / unos / unas | el / la / los / las |
| 숫자: dos, tres… | 소유사: mi, tu, su… |
| mucho, poco, algún, ningún | 지시사: este, ese… |
| 관사 없는 명사: Hay leche. | 고유명사 |

- **Hay** un restaurante.(○) / Hay **el** restaurante.(×) → **El** restaurante **está** allí.

## hay와 estar

| | hay | estar |
| 묻는 것 | 있는가, 없는가 (존재) | 어디에 있는가 (위치) |
| 대상 | 처음 꺼내는, 불특정한 것 | 이미 아는, 특정한 것 |
| 예 | **Hay** una farmacia en esta calle. | **La** farmacia **está** en esta calle. |

- ¿**Hay** un cajero cerca? — Sí, **hay** uno en la esquina. **Está** al lado del banco.(근처에 현금 인출기 있나요? — 네, 모퉁이에 하나 있어요. 은행 옆에 있어요.)

다른 시제: **había**(있었다 — 묘사), **hubo**(있었다 — 사건), **habrá**(있을 것이다), **ha habido**(있었다). 복수 명사가 와도 단수형을 씁니다: **Había** muchas personas.(habían ×)

## hay que + 동사원형: ~해야 한다 (일반적)

주어 없이 **누구에게나** 해당하는 의무입니다.

- **Hay que** estudiar para aprender.(배우려면 공부해야 한다)
- No **hay que** correr.(뛸 필요 없다 / 뛰면 안 된다)
- 특정한 사람의 의무는 **tener que**: **Tengo que** estudiar.

## tener: 가지다

| tengo | tienes | tiene | tenemos | tenéis | tienen |

- **Tengo** dos hermanos.(형제가 둘 있다)
- ¿**Tienes** tiempo?(시간 있어?)
- 부정에서 관사는 보통 생략합니다: No tengo coche.(차가 없다) No tengo hermanos.

## tener + 명사: 한국어·영어는 형용사로 말하는 것

몸의 감각과 상태를 스페인어는 **"~을 가지고 있다"**로 말합니다. 영어 I am hungry에 끌려 **Estoy hambre**(×)라고 하지 않도록 주의하세요.

| 표현 | 뜻 |
| tener hambre | 배고프다 |
| tener sed | 목마르다 |
| tener frío / calor | 춥다 / 덥다 (사람이 느끼는 것) |
| tener sueño | 졸리다 |
| tener miedo (de / a) | 무섭다 |
| tener prisa | 급하다, 서두르다 |
| tener razón | 옳다, 말이 맞다 |
| tener suerte | 운이 좋다 |
| tener cuidado | 조심하다 |
| tener ganas de + 원형 | ~하고 싶다 |
| tener éxito | 성공하다 |
| tener vergüenza | 창피하다 |
| tener … años | ~살이다 |
| tener dolor de… | ~이 아프다 |
| tener lugar | 개최되다 |
| tener en cuenta | 고려하다 |

- 명사이므로 강조는 **mucho/a**로 합니다: Tengo **mucha** hambre.(muy hambre ×) Tengo **mucho** frío. Tengo **muchas** ganas de verte.
- hambre·sed·razón·suerte·prisa는 여성 명사, frío·calor·sueño·miedo·cuidado는 남성 명사입니다.

## 나이

- ¿Cuántos años **tienes**? — **Tengo** veinte años.(몇 살이야? — 스무 살이야.) **Soy** veinte años(×).
- 생일: ¿Cuándo **es** tu cumpleaños? / **Cumplo** años el 5 de mayo.

## 날씨의 춥다·덥다는 hacer

- 사람이 느끼는 것: **Tengo** frío.(나는 춥다)
- 날씨: **Hace** frío.(날씨가 춥다)
- 물건의 온도: La sopa **está** fría.(수프가 차갑다)
- 사람의 성격: **Es** frío.(그는 차가운 사람이다)

## tener que + 동사원형: ~해야 한다

- **Tengo que** irme.(가 봐야 해요)
- No **tienes que** venir.(올 필요 없어)
- **deber** + 원형은 도덕적 당위·충고(Debes descansar), **tener que**는 외부 사정에 따른 필요, **hay que**는 일반적 의무입니다.

## tener + 과거분사 / tener + que ver

- **Tengo** hecha la maleta.(짐을 싸 놓았다)
- No **tiene nada que ver** con eso.(그것과 아무 관계가 없다)`,
ex: `¿Hay un supermercado cerca de aquí?|이 근처에 슈퍼마켓이 있나요?
Hay muchos turistas en la plaza.|광장에 관광객이 많이 있어요.
El supermercado está en la calle Mayor.|그 슈퍼마켓은 마요르 거리에 있어요.
No hay nadie en casa.|집에 아무도 없어요.
Había mucha gente en el concierto.|콘서트에 사람이 많았어요.
Hay que llegar a tiempo.|제시간에 도착해야 합니다.
Tengo dos hermanos y una hermana.|저는 형제가 둘, 누이가 하나 있어요.
Tengo mucha hambre. ¿Comemos algo?|배가 많이 고파요. 뭐 좀 먹을까요?
¿Tienes frío? Cierro la ventana.|추워? 창문 닫을게.
Hoy hace mucho calor.|오늘 날씨가 아주 덥네요.
Tienes razón. Lo siento.|네 말이 맞아. 미안해.
Mi abuela tiene ochenta años.|우리 할머니는 여든이세요.
Tengo ganas de viajar.|여행하고 싶어요.
Tengo que levantarme temprano mañana.|내일 일찍 일어나야 해요.
Ten cuidado, que el suelo está mojado.|조심해, 바닥이 젖었어.`,
quiz: `___ un banco en esta calle. (존재)|Hay|Está|Es|Tiene >> 불특정한 것의 존재는 hay.
El banco ___ en esta calle. (위치)|está|hay|es|tiene >> 특정한 것의 위치는 estar.
"배고파요"는?|Tengo hambre.|Estoy hambre.|Soy hambre.|Hago hambre. >> tener + 명사.
Tengo ___ sed.|mucha|muy|mucho|muchas >> sed는 여성 명사, 명사는 mucho/a로 강조.
"저는 스무 살입니다"는?|Tengo veinte años.|Soy veinte años.|Estoy veinte años.|Hago veinte años. >> 나이는 tener.
"날씨가 춥다"는?|Hace frío.|Tiene frío.|Está frío.|Es frío. >> 날씨는 hacer.
___ muchas personas en la fiesta. (있었다, 묘사)|Había|Habían|Hay|Estaban muchas >> haber의 무인칭은 복수 명사에도 단수.
___ que estudiar más. (누구나)|Hay|Tiene|Es|Está >> 일반적 의무: hay que.` },

{ id: 'g23', lv: 2, t: 'grammar', u: '① 첫 문장 만들기', o: 106, title: '의문문·부정문·감탄문', sub: '의문사와 이중 부정', body: `
## 의문문 만들기

스페인어는 조동사(do)가 없습니다. 평서문에 물음표를 붙이고 억양을 올리면 의문문이 됩니다. 문장 **앞에 ¿, 뒤에 ?**를 씁니다.

- Hablas español. → **¿**Hablas español**?**
- 주어를 넣을 때는 동사 뒤에 두는 일이 많습니다: ¿Habla **usted** inglés? ¿Viene **Juan**?
- 문장 일부만 질문이면 그 부분에만 부호를 씁니다: Y tú, **¿**qué quieres**?**
- 꼬리말: …, **¿no?** / …, **¿verdad?**(그렇지?). Eres coreano, **¿no?**

## 의문사 (모두 강세 부호가 붙는다)

| 의문사 | 뜻 | 예 |
| ¿qué? | 무엇, 무슨 | ¿Qué quieres? / ¿Qué libro lees? |
| ¿quién? / ¿quiénes? | 누구 (단수 / 복수) | ¿Quién es? / ¿Quiénes son? |
| ¿cuál? / ¿cuáles? | 어느 것 | ¿Cuál prefieres? |
| ¿cómo? | 어떻게 | ¿Cómo estás? |
| ¿dónde? | 어디 | ¿Dónde vives? |
| ¿cuándo? | 언제 | ¿Cuándo llegas? |
| ¿cuánto/a/os/as? | 얼마나, 몇 | ¿Cuánto cuesta? / ¿Cuántos años tienes? |
| ¿por qué? | 왜 | ¿Por qué no vienes? |
| ¿para qué? | 무엇을 위해 | ¿Para qué sirve esto? |

- 의문사 뒤에는 **동사가 바로** 옵니다: ¿Dónde **vive** Juan?(¿Dónde Juan vive? ×)
- **전치사는 의문사 앞**에 옵니다. 영어처럼 문장 끝에 둘 수 없습니다: ¿**De dónde** eres? ¿**Con quién** vas? ¿**A qué** hora? ¿**En qué** piensas? ¿**Para quién** es?
- **adónde**(어디로): ¿**Adónde** vas?
- **por qué**(왜, 두 단어 + 부호) / **porque**(왜냐하면, 한 단어) / **el porqué**(이유, 명사) / **por que**(전치사 + 관계사, 드묾).

## qué와 cuál: 한국인이 가장 헷갈리는 짝

원칙은 다음과 같습니다.

**¿Qué + ser…?** — **정의·설명**을 묻는다

- ¿**Qué** es un sustantivo?(명사란 무엇입니까?)
- ¿**Qué** es esto?(이게 뭐예요?)

**¿Cuál + ser…?** — 여러 가능성 중에서 **하나를 골라** 달라고 한다

- ¿**Cuál** es tu nombre?(이름이 뭐예요? — 수많은 이름 중 어느 것)
- ¿**Cuál** es tu número de teléfono? / ¿**Cuál** es la capital de Perú? / ¿**Cuál** es el problema?
- 한국어 "뭐예요?"에 끌려 ¿Qué es tu nombre?라고 하면 "이름이란 무엇인가"라는 철학적 질문이 됩니다.

**명사 바로 앞**에는 원칙적으로 **qué**를 씁니다.

- ¿**Qué** libro quieres?(어떤 책을 원해?) ¿**Qué** hora es?
- (중남미 구어에서는 ¿Cuál libro…?도 흔합니다.)

**de 앞·단독**에서 고를 때는 **cuál**.

- ¿**Cuál** de estos prefieres? / ¿**Cuál** quieres?

## 간접 의문문

문장 안에 들어간 의문문에서도 의문사는 부호를 유지합니다. 물음표는 없습니다.

- No sé **dónde** vive.(그가 어디 사는지 모른다)
- Dime **qué** quieres.
- 예/아니오 질문은 **si**(~인지): No sé **si** viene.(올지 안 올지 모르겠다)

## 부정문: no는 동사 앞

- **No** hablo francés.
- 대명사가 있으면 그 앞: **No** lo sé. **No** me gusta.
- 대답: ¿Tienes coche? — **No, no** tengo.(첫 no는 "아니요", 둘째 no는 부정)

## 이중 부정: 스페인어에서는 정상

부정어가 **동사 뒤**에 오면 동사 앞에 **no가 반드시** 필요합니다. 부정어가 **동사 앞**에 오면 no를 쓰지 않습니다.

| 긍정 | 부정 |
| algo 뭔가 | nada 아무것도 |
| alguien 누군가 | nadie 아무도 |
| alguno/a(s) 어떤 | ninguno/a 아무 (~도) |
| siempre 항상 | nunca / jamás 절대, 한 번도 |
| también ~도 | tampoco ~도 (아니다) |
| o… o… ~이거나 | ni… ni… ~도 ~도 아니다 |
| todavía / aún 아직 | ya no 이제 더는 |
| ya 이미 | todavía no 아직 ~않다 |

- **No** tengo **nada**.(아무것도 없다) / **Nada** tengo.(문어적)
- **No** vino **nadie**. = **Nadie** vino.
- **No** voy **nunca**. = **Nunca** voy.
- **No** tengo **ningún** problema.(남성 단수 앞에서 ninguno → **ningún**, alguno → **algún**)
- **No** quiero **ni** té **ni** café.
- 셋을 겹칠 수도 있습니다: **No** le digo **nunca nada** a **nadie**.

**también / tampoco**

- Me gusta el café. — A mí **también**.
- No me gusta el café. — A mí **tampoco**. (también no ×)

**ya / todavía**

- **Ya** he comido.(이미 먹었다) / **Todavía no** he comido.(아직 안 먹었다)
- **Todavía** vivo aquí.(아직 여기 산다) / **Ya no** vivo aquí.(이제 여기 살지 않는다)

## 감탄문

- **¡Qué** + 형용사/부사/명사**!**: ¡**Qué** bonito! ¡**Qué** bien! ¡**Qué** calor! ¡**Qué** pena!(안됐다)
- **¡Qué** + 명사 + **tan/más** + 형용사**!**: ¡**Qué** día **tan** bonito!(정말 좋은 날이네)
- **¡Cuánto/a…!**: ¡**Cuánto** tiempo!(이게 얼마 만이야) ¡**Cuánta** gente!
- **¡Cómo…!**: ¡**Cómo** llueve!(비가 엄청 오네)`,
ex: `¿Hablas español? — Sí, un poco.|스페인어 해? — 응, 조금.
¿De dónde eres?|어디 출신이야?|전치사는 의문사 앞
¿Con quién vives?|누구와 살아?
¿Cuál es tu número de teléfono?|전화번호가 뭐예요?|qué가 아님
¿Qué es esto?|이게 뭐예요?
¿Qué música te gusta?|어떤 음악을 좋아해?
¿Cuánto cuesta este bolso?|이 가방 얼마예요?
¿Por qué no vienes? — Porque tengo que trabajar.|왜 안 와? — 일해야 하거든.
No sé dónde están mis llaves.|내 열쇠가 어디 있는지 모르겠어.
No tengo nada que hacer.|할 일이 아무것도 없어요.
Nadie sabe la respuesta.|아무도 답을 몰라요.
Nunca he estado en México.|멕시코에 가 본 적이 한 번도 없어요.
No me gusta ni el fútbol ni el tenis.|저는 축구도 테니스도 좋아하지 않아요.
Todavía no he terminado.|아직 못 끝냈어요.
Ya no trabajo allí.|이제 거기서 일하지 않아요.
¡Qué día tan bonito!|정말 좋은 날이네요!`,
quiz: `¿___ es tu nombre?|Cuál|Qué|Cómo|Quién >> ser 앞에서 여러 가능성 중 하나를 고를 때는 cuál.
¿___ libro quieres?|Qué|Cuál de|Cómo|Cuánto >> 명사 바로 앞에는 qué.
¿___ dónde eres?|De|En|A|Por >> 출신: ¿De dónde…?
No tengo ___.|nada|algo|nadie alguien|ninguno cosa >> no + 동사 + nada.
___ vino a la fiesta. (아무도)|Nadie|No nadie|Alguien no|Ninguno no >> 부정어가 동사 앞이면 no 없음.
— No me gusta el pescado. — A mí ___.|tampoco|también|también no|ni >> 부정에 대한 동의는 tampoco.
"아직 안 먹었어요"는?|Todavía no he comido.|Ya no he comido.|Ya he comido no.|Todavía he comido. >> todavía no: 아직 ~않다.
No sé ___ viene mañana. (올지 안 올지)|si|que|qué|cuál >> 예/아니오 간접 의문은 si.
¡___ calor hace!|Qué|Cómo de|Cuál|Muy >> ¡Qué + 명사!` },

{ id: 'g24', lv: 2, t: 'grammar', u: '① 첫 문장 만들기', o: 107, title: '숫자·시각·날짜', sub: '성 일치와 정관사가 핵심', body: `
## 기수 0~100

| 0 cero | 10 diez | 20 veinte | 30 treinta |
| 1 uno | 11 once | 21 veintiuno | 31 treinta y uno |
| 2 dos | 12 doce | 22 veintidós | 40 cuarenta |
| 3 tres | 13 trece | 23 veintitrés | 50 cincuenta |
| 4 cuatro | 14 catorce | 24 veinticuatro | 60 sesenta |
| 5 cinco | 15 quince | 25 veinticinco | 70 setenta |
| 6 seis | 16 dieciséis | 26 veintiséis | 80 ochenta |
| 7 siete | 17 diecisiete | 27 veintisiete | 90 noventa |
| 8 ocho | 18 dieciocho | 28 veintiocho | 100 cien |
| 9 nueve | 19 diecinueve | 29 veintinueve | 101 ciento uno |

- **16~29는 한 단어**로 붙여 쓰고(dieciséis, veintidós), **31부터는 y로** 잇습니다(treinta **y** uno). y는 십의 자리와 일의 자리 사이에만 들어갑니다: ciento dos(102 — ciento y dos ×), mil novecientos noventa **y** nueve.
- 헷갈리는 짝: **sesenta**(60) / **setenta**(70), **seis**(6) / **siete**(7), **quince**(15) / **cincuenta**(50) / **quinientos**(500).

## uno의 변화

- 남성 명사 앞에서 **un**: **un** libro, veinti**ún** años, treinta y **un** días.
- 여성 명사 앞에서 **una**: **una** casa, veinti**una** personas, treinta y **una** semanas.
- 명사 없이 셀 때는 uno: Tengo **uno**.

## 100 이상

| 100 cien / ciento | 600 seiscientos |
| 200 doscientos | 700 **sete**cientos |
| 300 trescientos | 800 ochocientos |
| 400 cuatrocientos | 900 **nove**cientos |
| 500 **quinientos** | 1.000 mil |
| 1.000.000 un millón | 2.000.000 dos millones |

- **cien**은 정확히 100이거나 명사·mil·millones 앞일 때(cien euros, cien mil), 뒤에 숫자가 이어지면 **ciento**(ciento veinte).
- **200~900은 성이 일치**합니다: doscient**os** libros / doscient**as** páginas.
- **mil**은 변하지 않고 un을 붙이지 않습니다: mil(1.000), dos mil(2.000). un mil(×).
- **millón**은 명사입니다. 뒤에 명사가 오면 **de**가 필요합니다: un millón **de** euros, dos millones **de** habitantes.
- 스페인어권은 천 단위에 **마침표**, 소수점에 **쉼표**를 씁니다(영어와 반대): 1.500,75. 멕시코 등 일부는 영어식.
- 십억은 **mil millones**입니다. **un billón**은 1조(10의 12제곱)이니 영어 billion과 혼동하지 마세요.

## 서수

| 1.º primero | 6.º sexto |
| 2.º segundo | 7.º séptimo |
| 3.º tercero | 8.º octavo |
| 4.º cuarto | 9.º noveno |
| 5.º quinto | 10.º décimo |

- 형용사처럼 성·수가 일치합니다: la **primera** vez, el **segundo** piso.
- **primero·tercero**는 남성 단수 명사 앞에서 -o가 떨어집니다: el **primer** día, el **tercer** piso.
- 11 이상은 보통 기수로 대신합니다: el siglo **veintiuno**(21세기), el piso **doce**, Alfonso **XIII**(trece).

## 시각

**¿Qué hora es?**(몇 시예요?)

- 1시만 단수: **Es la** una. 나머지는 복수: **Son las** dos / tres…
- "~분": **y** — Son las dos **y** diez.(2시 10분)
- "~분 전": **menos** — Son las tres **menos** diez.(3시 10분 전 = 2시 50분). 중남미: Son diez **para** las tres. / Faltan diez para las tres.
- **y cuarto**(15분), **y media**(30분), **menos cuarto**(15분 전).
- **en punto**(정각), **mediodía**(정오), **medianoche**(자정).
- 시간대: **de la mañana**(오전), **de la tarde**(오후 — 점심 이후부터 해 질 때까지), **de la noche**(밤), **de la madrugada**(새벽).

**¿A qué hora…?**(몇 시에?)

- **A la** una. / **A las** ocho y media.
- **de** nueve **a** cinco = **desde** las nueve **hasta** las cinco.
- 시각을 말하지 않을 때는 **por**: **por** la mañana(아침에) / 시각과 함께면 **de**: a las ocho **de** la mañana.
- 공식 일정·시간표는 24시간제: a las 15:30(quince treinta).

## 요일·월

- 요일(모두 남성, 소문자): **lunes, martes, miércoles, jueves, viernes, sábado, domingo**.
- 월(소문자): enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.
- **요일에는 전치사 없이 정관사**: **el** lunes(월요일에), **los** lunes(월요일마다). en lunes(×).
- 월·연도·계절에는 **en**: **en** mayo, **en** 2024, **en** verano.
- lunes~viernes는 단·복수가 같고, sábado·domingo만 -s를 붙입니다.

## 날짜

- ¿Qué día es hoy? — Hoy es martes.
- ¿Qué fecha es hoy? / ¿A cuántos estamos? — **Es el** 5 **de** mayo. / **Estamos a** 5 **de** mayo.
- 형식: **el + 숫자 + de + 월 + de + 연도** — el 15 de agosto de 2024.
- 1일만 서수를 쓰기도 합니다: el **primero** de mayo(중남미) / el **uno** de mayo(스페인).
- 연도는 통째로 읽습니다: 1999 = mil novecientos noventa y nueve, 2024 = dos mil veinticuatro.
- 일-월-연 순서로 씁니다: 15/08/2024.

## 시간 표현

- **hoy**(오늘), **mañana**(내일), **ayer**(어제), **pasado mañana**(모레), **anteayer**(그저께)
- **esta mañana / tarde / noche**, **anoche**(어젯밤), **mañana por la mañana**(내일 아침)
- **la semana pasada / que viene**(지난주 / 다음 주), **el mes / año pasado**, **el próximo mes**
- **hace** + 기간: ~전에. **hace** dos años(2년 전). **dentro de** + 기간: ~후에. **dentro de** una hora.`,
ex: `Tengo veintiún años.|저는 스물한 살입니다.
Hay treinta y una personas en la clase.|반에 서른한 명이 있어요.
Este libro tiene doscientas páginas.|이 책은 200쪽이에요.
Cuesta cien euros.|100유로예요.
La ciudad tiene dos millones de habitantes.|그 도시는 인구가 200만이에요.
Vivo en el tercer piso.|저는 3층에 살아요.
¿Qué hora es? — Es la una y media.|몇 시예요? — 1시 반이에요.
Son las ocho menos cuarto.|8시 15분 전이에요.
La clase empieza a las nueve en punto.|수업은 9시 정각에 시작해요.
Trabajo de nueve a seis.|저는 9시부터 6시까지 일해요.
El lunes tengo un examen.|월요일에 시험이 있어요.
Los domingos no trabajo.|일요일에는 일하지 않아요.
Mi cumpleaños es el doce de octubre.|제 생일은 10월 12일이에요.
Nací en mil novecientos noventa y ocho.|저는 1998년에 태어났어요.
Llegué hace dos semanas.|2주 전에 도착했어요.
Vuelvo dentro de diez minutos.|10분 후에 돌아올게요.`,
quiz: `veintiuno + años는?|veintiún años|veintiuno años|veintiuna años|veinte y un años >> 남성 명사 앞에서 uno → un.
200 páginas는?|doscientas páginas|doscientos páginas|dos cien páginas|doscienta páginas >> 200~900은 성 일치.
1시입니다.|Es la una.|Son las una.|Es el uno.|Son la una. >> 1시만 단수.
"월요일에"는?|el lunes|en lunes|a lunes|al lunes >> 요일에는 정관사, 전치사 없음.
"5월에"는?|en mayo|el mayo|a mayo|de mayo >> 월에는 en.
3시 15분 전은?|Son las tres menos cuarto.|Son las tres y cuarto.|Son las dos menos cuarto.|Es la tres menos cuarto. >> menos: ~분 전.
un millón ___ euros|de|(없음)|a|en >> millón은 명사라 de가 필요.
el ___ piso (3층)|tercer|tercero|tres|tercera >> 남성 단수 앞에서 tercero → tercer.
"2년 전에"는?|hace dos años|dentro de dos años|desde dos años|en dos años atrás >> hace + 기간.` },
]);
