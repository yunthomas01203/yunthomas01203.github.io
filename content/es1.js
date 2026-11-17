LL.course({ id: 'es', name: '스페인어', native: 'Español', tts: 'es-ES', sample: 'Hola, ¿qué tal?',
  levels: ['입문 (발음·철자)', '초급 (A1~A2)', '중급 (B1)', '중상급 (B2)', '고급 (C1~C2)'] });
LL.add('es', [
{ id: 's1', lv: 1, t: 'script', title: '알파벳과 발음', sub: '쓰인 대로 읽는 언어', body: `
스페인어는 철자와 발음이 거의 1:1로 대응합니다. 규칙만 알면 처음 보는 단어도 정확히 읽을 수 있습니다.
## 모음: 다섯 개, 언제나 같은 소리
- a(아) e(에) i(이) o(오) u(우). 영어처럼 약해지거나 이중모음화되지 않습니다. no는 '노우'가 아니라 짧고 또렷한 '노'.
## 주의할 자음
| 철자 | 소리 | 예 |
| c + a/o/u, qu + e/i | ㄲ (된소리에 가까움) | casa, queso, quien |
| c + e/i, z | 스페인: 영어 th /θ/, 중남미: s | cena, zapato |
| g + a/o/u, gu + e/i | ㄱ (모음 사이에서는 부드럽게) | gato, guerra, guitarra |
| g + e/i, j | 목구멍을 긁는 ㅎ /x/ | gente, jamón, México(x도 이 소리) |
| gü + e/i | '구에, 구이' (u를 발음) | pingüino, vergüenza |
| h | **항상 묵음** | hola(올라), hotel(오텔) |
| ll | 대부분 지역에서 y와 같음 ('야' 계열) | llamar, calle |
| ñ | '냐' 계열 | España, año, niño |
| r | 혀끝을 한 번 튕김 (한국어 모음 사이 ㄹ) | pero, caro |
| rr, 단어 첫 r | 혀끝을 여러 번 떪 | perro, carro, rosa |
| v | **b와 같은 소리** (영어 v 아님) | vino = bino |
| b/d/g | 모음 사이에서 마찰음으로 부드러워짐 | lado, agua, haba |
| p/t/k | 숨을 내뿜지 않는 된소리 ㅃ·ㄸ·ㄲ | papá, té |
| x | ks 또는 s | examen, extraño |
| y | 단독은 '이'(y = 그리고), 그 외 '야' 계열 | yo, hoy |
- **pero**(그러나) / **perro**(개), **caro**(비싼) / **carro**(차)처럼 r/rr이 뜻을 가릅니다.
- p·t·k를 영어식으로 숨을 섞어 내면 외국인 억양이 됩니다. '파파'가 아니라 '빠빠'.`,
items: `casa|집
queso|치즈
cena|저녁 식사
zapato|신발
gato|고양이
gente|사람들
guitarra|기타
pingüino|펭귄
jamón|햄
hola|안녕
hotel|호텔
llamar|부르다
calle|거리
niño|남자아이
año|해, 년
pero|그러나
perro|개
caro|비싼
carro|수레, 차 (중남미)
vino|와인
agua|물
yo|나
hoy|오늘
México|멕시코`,
ex: `El perro de San Roque no tiene rabo.|산 로케의 개는 꼬리가 없다.|rr 연습용 잰말놀이
Mi niño tiene un año.|우리 아이는 한 살이에요.
Hola, ¿hay un hotel en esta calle?|안녕하세요, 이 거리에 호텔이 있나요?|h는 모두 묵음`,
quiz: `hola의 발음은?|올라|홀라|오라|욜라 >> h는 항상 묵음.
gente의 g 소리는?|목을 긁는 ㅎ|ㄱ|ㅈ|묵음 >> g + e/i는 j와 같은 소리.
vino의 v는 어떤 소리인가?|b와 같은 소리|영어 v|w|f >> 스페인어에서 b와 v는 같은 소리입니다.
'개'는?|perro|pero|pelo|perrro >> pero는 '그러나', pelo는 '머리카락'.
pingüino에서 ü의 역할은?|u를 발음하라는 표시|강세 표시|묵음 표시|장음 표시 >> güe, güi에서 u를 소리 냅니다.` },

{ id: 's2', lv: 1, t: 'script', title: '강세 규칙과 악센트 부호', sub: '어디를 세게 읽을까', body: `
## 세 가지 규칙
- ① **모음, n, s**로 끝나는 단어 → **뒤에서 둘째** 음절에 강세: **ca**sa, **ha**blan, **lu**nes, e**xa**men.
- ② **그 외 자음**으로 끝나는 단어 → **마지막** 음절: ha**blar**, espa**ñol**, ciu**dad**, re**loj**.
- ③ 위 규칙을 어기는 단어는 **악센트 부호(tilde)**로 표시: ca**fé**, **mú**sica, **ár**bol, ja**món**, te**lé**fono.
## 그래서 생기는 일
- 복수가 되며 부호가 사라지거나 생깁니다: can**ción** → can**cio**nes, e**xa**men → e**xá**menes, **jo**ven → **jó**venes.
- 뒤에서 셋째 음절에 강세가 있는 단어(esdrújula)는 항상 부호: **rá**pido, **mé**dico, **dí**melo.
## 이중모음
- 강모음(a, e, o)과 약모음(i, u), 또는 약모음끼리는 한 음절: **bue**no, **ciu**dad, **ai**re.
- 약모음에 부호가 있으면 갈라집니다: d**í**a(dí-a), pa**í**s(pa-ís), r**í**o.
## 뜻을 구별하는 부호
| 부호 없음 | 부호 있음 |
| el (정관사) | él (그) |
| tu (너의) | tú (너) |
| mi (나의) | mí (나, 전치사 뒤) |
| si (만약) | sí (네; 자신) |
| se (재귀 대명사) | sé (나는 안다) |
| te (너를) | té (차) |
| mas (그러나, 문어) | más (더) |
| de (~의) | dé (dar의 접속법) |
- 의문사·감탄사에는 항상 부호: **qué, quién, cómo, cuándo, dónde, cuánto, cuál, por qué**. (porque = 왜냐하면)
- 의문문·감탄문은 앞에 뒤집힌 부호를 씁니다: **¿**Cómo estás**?** **¡**Qué bien**!**
- 시제를 가르는 강세: **ha**blo(나는 말한다) / ha**bló**(그가 말했다), **es**ta(이) / es**tá**(있다).`,
items: `casa|CA-sa · 집
hablan|HA-blan · 그들은 말한다
español|es-pa-ÑOL · 스페인어
ciudad|ciu-DAD · 도시
café|ca-FÉ · 커피
música|MÚ-si-ca · 음악
teléfono|te-LÉ-fo-no · 전화
canción|can-CIÓN · 노래
canciones|can-CIO-nes · 노래들
día|DÍ-a · 날
país|pa-ÍS · 나라
hablo|HA-blo · 나는 말한다
habló|ha-BLÓ · 그/그녀가 말했다
está|es-TÁ · (그가) 있다
esta|ES-ta · 이 (여성형)
él|그 (정관사 el과 구별)
sí|네 (si 만약과 구별)
más|더`,
quiz: `hablar의 강세는?|마지막 음절 (-blar)|첫 음절 (ha-)|강세 없음|둘 다 >> n·s 외의 자음으로 끝나면 마지막 음절.
"canción"의 복수형은?|canciones|canciónes|cancións|cancionés >> 음절이 늘어 규칙대로 강세가 놓이므로 부호가 사라집니다.
"그가 말했다"는?|habló|hablo|hábló|hablò >> 마지막 음절 강세 + 부호.
"너"(주어)는?|tú|tu|té|te >> tu는 '너의'.
의문사로 쓰인 것은?|¿Dónde vives?|Donde vives.|¿Donde vives?|Dónde vives. >> 의문사에는 부호, 문장 앞뒤에 ¿ ?` },

{ id: 'v1', lv: 2, t: 'vocab', title: '인사와 기본 표현', sub: 'tú와 usted의 거리', body: `
스페인어에는 **tú**(친근: 친구·가족·또래)와 **usted**(격식: 처음 만난 어른, 고객, 윗사람)가 있고 동사 형태가 달라집니다. usted는 3인칭 동사를 씁니다. 스페인에서는 tú를 넓게 쓰고, 중남미는 usted를 더 자주 씁니다. 스페인의 복수 친근형 **vosotros**는 중남미에서 쓰지 않고 **ustedes**로 통일합니다.`,
items: `hola|안녕, 안녕하세요|¡Hola! ¿Qué tal?|안녕! 어떻게 지내?
buenos días|좋은 아침입니다|Buenos días, señora García.|안녕하세요, 가르시아 부인.
buenas tardes|좋은 오후입니다|Buenas tardes a todos.|모두 안녕하세요.
buenas noches|좋은 밤입니다 (만날 때·헤어질 때 모두)|Buenas noches, hasta mañana.|안녕히 주무세요, 내일 봐요.
¿cómo estás?|어떻게 지내? (tú)|¿Cómo estás? — Muy bien, gracias.|어떻게 지내? — 아주 잘 지내, 고마워.
¿cómo está usted?|어떻게 지내십니까? (usted)|¿Cómo está usted, señor?|어떻게 지내십니까, 선생님?
gracias|감사합니다|Muchas gracias por tu ayuda.|도와줘서 정말 고마워.
de nada|천만에요|— Gracias. — De nada.|— 고마워요. — 천만에요.
por favor|부탁합니다|Un café, por favor.|커피 한 잔 부탁합니다.
perdón|죄송합니다, 실례합니다|Perdón, ¿puede repetir?|죄송한데 다시 말씀해 주시겠어요?
lo siento|미안합니다 (유감)|Lo siento mucho, llego tarde.|정말 미안해요, 늦었네요.
con permiso|실례하겠습니다 (지나갈 때)|Con permiso, ¿puedo pasar?|실례합니다, 지나가도 될까요?
mucho gusto|만나서 반갑습니다|Me llamo Minsu. Mucho gusto.|저는 민수라고 합니다. 반갑습니다.
encantado / encantada|반갑습니다 (말하는 사람의 성에 맞춤)|Encantada de conocerte.|만나서 반가워. (여성 화자)
hasta luego|나중에 봐요|Me voy. ¡Hasta luego!|갈게. 나중에 봐!
adiós|안녕히 가세요|Adiós, que te vaya bien.|안녕, 잘 지내.
¿cómo te llamas?|이름이 뭐야?|¿Cómo te llamas? — Me llamo Ana.|이름이 뭐야? — 아나라고 해.
¿de dónde eres?|어디 출신이야?|¿De dónde eres? — Soy de Corea.|어디 출신이야? — 한국에서 왔어.
vale|좋아, 알았어 (스페인)|— ¿Quedamos a las ocho? — Vale.|— 8시에 만날까? — 좋아.
claro|물론이지|¡Claro que sí!|물론이지!`,
quiz: `처음 만난 어르신에게 안부를 물을 때는?|¿Cómo está usted?|¿Cómo estás?|¿Qué pasa, tío?|¿Cómo estáis? >> 격식은 usted + 3인칭 동사.
여성 화자가 "만나서 반갑습니다"라고 할 때는?|Encantada.|Encantado.|Encantados.|Encantar. >> 말하는 사람의 성에 일치.
"Gracias"에 대한 대답은?|De nada.|Por favor.|Lo siento.|Perdón. >> 천만에요.` },

{ id: 'g1', lv: 2, t: 'grammar', title: '명사의 성·수와 관사', sub: 'el problema, la mano', body: `
모든 명사는 남성 또는 여성이며, 관사·형용사가 **성과 수에 일치**합니다.
## 성 구별의 경향
- **남성**: -o(el libro), -or(el amor), -aje(el viaje), -ma(그리스어계: el problema, el tema, el sistema, el idioma, el clima, el programa), 요일·월·숫자·강·바다·언어.
- **여성**: -a(la casa), -ción/-sión(la canción), -dad/-tad(la ciudad, la libertad), -tud(la actitud), -umbre(la costumbre), -ie(la serie), -z 다수(la luz, la paz).
- **예외**: el día, el mapa, el planeta, el sofá / la mano, la foto(grafía), la moto(cicleta), la radio.
- 강세 있는 a-/ha-로 시작하는 여성 명사는 단수에서 el: **el** agua frí**a**, **el** hambre, **el** aula → 복수 **las** aguas. (성은 여전히 여성)
- 사람: el profesor / la profesora, el estudiante / la estudiante, el artista / la artista.
- 성에 따라 뜻이 다른 명사: el capital(자본) / la capital(수도), el cura(신부) / la cura(치료), el orden(순서) / la orden(명령), el papa(교황) / la papa(감자).
## 복수
- 모음 + **s**(casas), 자음 + **es**(ciudades), -z → **-ces**(luz → luces), 강세 없는 -s는 불변(el lunes → los lunes).
## 관사
| | 남성 단수 | 여성 단수 | 남성 복수 | 여성 복수 |
| 정관사 | el | la | los | las |
| 부정관사 | un | una | unos | unas |
- 축약: a + el = **al**, de + el = **del**. (Voy al cine. Vengo del trabajo.)
- **정관사를 쓰는 곳** (영어·한국어와 다름): 일반론(Me gusta **el** café. **Los** perros son fieles), 요일(**el** lunes 월요일에, **los** lunes 월요일마다), 시각(Son **las** dos), 신체·옷(Me duele **la** cabeza. Me lavo **las** manos — mi 아님), 호칭을 언급할 때(**El** señor López está aquí), 언어(주어일 때: **El** español es fácil).
- **부정관사를 쓰지 않는 곳**: 직업·국적·종교(Soy médico. 수식어가 붙으면 Soy **un** médico muy bueno), otro(otro café, un otro ×), medio, cien, mil, ¡Qué…!
## 형용사
- 명사 **뒤**가 기본, 성·수 일치: un coche roj**o**, una casa roj**a**, unos coches roj**os**.
- -e·자음으로 끝나면 성 변화 없음: verde, fácil, azul. 국적 형용사는 자음으로 끝나도 여성형: español → española.
- 앞에 오면 뜻이 바뀌는 것: un **gran** hombre(위대한) / un hombre **grande**(큰), un **viejo** amigo(오랜) / un amigo **viejo**(늙은), un **pobre** hombre(불쌍한) / un hombre **pobre**(가난한).
- 남성 단수 앞에서 어미 탈락: bueno → **buen** día, malo → **mal** tiempo, primero → **primer** piso, tercero → **tercer**, alguno → **algún**, ninguno → **ningún**, grande → **gran**(남녀 모두).`,
ex: `El problema es muy difícil.|그 문제는 매우 어렵습니다.
Tengo una foto de mi familia en la mano.|저는 손에 가족 사진을 들고 있어요.
El agua está muy fría.|물이 아주 차가워요.|agua는 여성이지만 단수 관사는 el
Me gusta el café con leche.|저는 카페라테를 좋아해요.|일반적인 것에도 정관사
Los lunes voy al gimnasio.|월요일마다 헬스장에 가요.
Me duele la cabeza.|머리가 아파요.|mi cabeza가 아님
Mi madre es profesora.|우리 어머니는 선생님이에요.|직업에는 부정관사 없음
¿Quiere otro café?|커피 한 잔 더 드시겠어요?|un otro는 틀림
Es un buen amigo y una gran persona.|그는 좋은 친구이자 훌륭한 사람이에요.
Las ciudades españolas son muy bonitas.|스페인 도시들은 아주 예뻐요.`,
quiz: `___ problema es grave.|El|La|Los|Un la >> -ma로 끝나는 그리스어계 명사는 남성.
___ mano|la|el|lo|un >> mano는 -o로 끝나지만 여성.
Soy ___ estudiante. (직업·신분)|(관사 없음)|un|el|uno >> 직업·신분에는 부정관사를 쓰지 않습니다.
Voy ___ cine.|al|a el|del|en el >> a + el = al.
un ___ día|buen|bueno|buena|buenos >> 남성 단수 명사 앞에서 bueno → buen.
luz의 복수형은?|luces|luzes|luzs|luz >> -z → -ces.
Me lavo ___ manos.|las|mis|los|unas mis >> 신체에는 소유사 대신 정관사.` },

{ id: 'g2', lv: 2, t: 'grammar', title: 'ser와 estar', sub: '본질과 상태, 두 개의 be동사', body: `
| ser (soy, eres, es, somos, sois, son) | estar (estoy, estás, está, estamos, estáis, están) |
| 정체·직업·국적·관계: Soy coreano. Es mi hermano. | 위치: Madrid está en España. |
| 본질적 특징·성격: Es alto. Es simpática. | 일시적 상태·기분·건강: Estoy cansado. Está enferma. |
| 시간·날짜: Son las tres. Hoy es lunes. | 진행형: Estoy comiendo. |
| 재료·소유·출신: Es de madera. Es de Juan. Soy de Seúl. | 변화의 결과: Está roto. Está muerto. La puerta está abierta. |
| **행사가 열리는 곳**: La fiesta es en mi casa. | 날짜(estamos a): Estamos a 5 de mayo. |
| 수동태: Fue construido en 1900. | 주관적 인상·맛: ¡Qué guapa estás! La sopa está rica. |
## 형용사의 뜻이 달라지는 경우
| | ser | estar |
| aburrido | 지루한 (사람·것) | 지루해하는 |
| listo | 똑똑한 | 준비된 |
| malo | 나쁜 | 아픈; 맛없는 |
| bueno | 착한, 좋은 | 맛있는; (속어) 매력적인 |
| rico | 부유한 | 맛있는 |
| verde | 초록색인 | 덜 익은 |
| seguro | 안전한 | 확신하는 |
| vivo | 약삭빠른, 활발한 | 살아 있는 |
| orgulloso | 거만한 | 자랑스러워하는 |
| atento | 친절한 | 주의를 기울이는 |
| callado | 과묵한 | 조용히 있는 |
- **estar muerto**(죽어 있다)는 영구적이지만 **결과 상태**이므로 estar.
- **hay**(haber)는 불특정한 것의 존재: **Hay** un banco cerca. / 특정한 것의 위치는 estar: **El** banco **está** cerca.
- 결혼 여부: Estoy casado / soltero (ser도 가능하지만 estar가 일반적).
- 가격: ¿Cuánto **es**? (총액) / ¿A cuánto **están** los tomates? (변동 가격)`,
ex: `Soy coreana, pero ahora estoy en México.|저는 한국인이지만 지금은 멕시코에 있어요.
Mi hermano es médico y está muy ocupado.|우리 형은 의사이고 매우 바빠요.
La reunión es en la sala dos.|회의는 2번 방에서 열려요.|행사 장소는 ser
La sala dos está al final del pasillo.|2번 방은 복도 끝에 있어요.
Este libro es aburrido.|이 책은 지루해요.
Estoy aburrido; no hay nada que hacer.|지루해. 할 게 없어.
¿Estás lista? — Sí, ya estoy.|준비됐어? — 응, 됐어.
Esta paella está riquísima.|이 파에야 정말 맛있어요.
La ventana está abierta.|창문이 열려 있어요.
Hay una farmacia en la esquina.|모퉁이에 약국이 하나 있어요.
¡Qué guapo estás hoy!|오늘 정말 멋지네!|오늘 특히 그렇다는 인상
Son las diez y media.|10시 반이에요.`,
quiz: `Madrid ___ en España.|está|es|hay|son >> 위치는 estar.
El concierto ___ en el estadio.|es|está|hay|están >> 행사가 열리는 장소는 ser.
Mi abuelo ___ muerto.|está|es|hay|ser >> 결과 상태는 estar.
Ana ___ muy lista; siempre saca buenas notas.|es|está|hay|tiene >> ser listo = 똑똑하다.
___ un supermercado cerca de aquí.|Hay|Está|Es|Son >> 불특정한 것의 존재는 hay.
La sopa ___ fría. (지금 상태)|está|es|hay|tiene >> 일시적 상태.
Estas manzanas ___ verdes; no las comas todavía.|están|son|hay|es >> estar verde = 덜 익었다.` },

{ id: 'g3', lv: 2, t: 'grammar', title: '직설법 현재: 규칙과 불규칙', sub: '동사 활용의 지도', body: `
동사 어미가 주어를 알려 주므로 **주어 대명사는 보통 생략**합니다(강조·대조 때만 사용).
## 규칙 활용
| | hablar | comer | vivir |
| yo | hablo | como | vivo |
| tú | hablas | comes | vives |
| él/ella/usted | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| vosotros | habláis | coméis | vivís |
| ellos/ustedes | hablan | comen | viven |
## 어간 모음 변화 (nosotros·vosotros 제외 — "장화 동사")
- **e → ie**: querer(quiero, queremos), pensar, empezar, entender, preferir, cerrar, sentir, perder, tener*, venir*
- **o → ue**: poder(puedo, podemos), dormir, volver, encontrar, costar, recordar, contar, morir, jugar(u→ue)
- **e → i**: pedir(pido, pedimos), servir, repetir, seguir, decir*, vestir, reír
## yo만 불규칙 (-go 등)
- hacer → **hago**, poner → **pongo**, salir → **salgo**, traer → **traigo**, caer → **caigo**, tener → **tengo**, venir → **vengo**, decir → **digo**, oír → **oigo**
- conocer → **conozco**, conducir → **conduzco**, parecer → **parezco**, saber → **sé**, ver → **veo**, dar → **doy**
## 완전 불규칙
- **ser**: soy, eres, es, somos, sois, son / **estar**: estoy, estás, está… / **ir**: voy, vas, va, vamos, vais, van / **haber**: he, has, ha, hemos, habéis, han (hay)
## 현재형의 쓰임
- 습관, 현재 사실, **가까운 미래**(Mañana trabajo), 진행 중인 일(¿Qué haces? 뭐 해?). 진행형 estar + -ando/-iendo는 "바로 지금"을 강조할 때만.
- **ir a + 동사원형**: ~할 것이다(Voy a estudiar). **acabar de + 원형**: 막 ~했다. **tener que + 원형**: ~해야 한다. **hay que + 원형**: (일반적으로) ~해야 한다. **soler + 원형**: ~하곤 하다. **llevar + 기간 + -ando**: ~째 하고 있다(Llevo dos años estudiando). **desde hace + 기간**: ~전부터.`,
ex: `Hablo español un poco.|스페인어를 조금 합니다.
¿Dónde vives? — Vivo en Seúl.|어디 살아? — 서울에 살아.
No entiendo. ¿Puedes repetir?|이해가 안 돼요. 다시 말해 줄 수 있어요?
Quiero un vaso de agua.|물 한 잔 주세요.
¿Cuánto cuesta este bolso?|이 가방 얼마예요?
Siempre pido lo mismo.|저는 항상 같은 걸 주문해요.
Tengo que salir temprano mañana.|내일 일찍 나가야 해요.
No sé dónde está, pero conozco a alguien que lo sabe.|어디 있는지는 모르지만 아는 사람을 알아요.
Voy a visitar a mis abuelos este fin de semana.|이번 주말에 조부모님을 뵈러 갈 거예요.
Acabo de llegar a casa.|방금 집에 도착했어요.
Llevo tres años estudiando español.|스페인어를 3년째 공부하고 있어요.
Suelo desayunar a las siete.|보통 7시에 아침을 먹어요.`,
quiz: `Yo no ___ nada. (hacer)|hago|haco|hace|hazo >> hacer의 yo는 hago.
Nosotros ___ ir al cine. (querer)|queremos|quieremos|quieren|querimos >> nosotros는 어간 변화 없음.
¿A qué hora ___ tú? (volver)|vuelves|volves|vuelvas|volvés >> o → ue.
Yo ___ a María. (conocer)|conozco|conoco|conoce|conozo >> -cer → -zco.
___ estudiar más. (나는 ~해야 한다)|Tengo que|Tengo de|Hay|Debo que >> tener que + 원형.
"방금 먹었어요"는?|Acabo de comer.|Voy a comer.|Suelo comer.|Tengo que comer. >> acabar de + 원형.
Ellos ___ lo mismo. (pedir)|piden|peden|pieden|pidan >> e → i.` },

{ id: 'g4', lv: 2, t: 'grammar', title: 'gustar형 동사와 재귀동사', sub: '"나에게 ~이 즐거움을 준다"', body: `
## gustar: 주어는 좋아하는 "대상"
- **Me gusta** el café. = 커피가 나에게 즐거움을 준다. 동사는 **뒤의 대상**에 일치합니다.
- 대상이 단수·동사원형 → **gusta**: Me gusta bailar. Me gusta cantar y bailar(원형이 여럿이어도 단수).
- 대상이 복수 → **gustan**: Me gusta**n** los gatos.
| (a mí) | me | |
| (a ti) | te | |
| (a él/ella/usted) | le | gusta / gustan |
| (a nosotros) | nos | |
| (a vosotros) | os | |
| (a ellos/ustedes) | les | |
- 강조·명확화: **A mí** me gusta, **a Juan** le gusta. 사람 이름에는 **a** 필수: **A** María le gusta el té.
- 동의: A mí también(나도) / A mí tampoco(나도 안) / A mí sí / A mí no. (Yo también ×)
- 같은 구조의 동사: **encantar**(아주 좋아하다), **interesar**, **importar**, **molestar**, **doler**(아프다: Me duele la cabeza / Me duelen los pies), **faltar**(부족하다), **quedar**(남다; 어울리다), **parecer**(~로 보이다: ¿Qué te parece?), **apetecer**(당기다), **caer bien/mal**(사람이 마음에 들다/안 들다), **dar igual**(상관없다), **hacer falta**(필요하다).
- 사람을 좋아한다고 할 때 gustar는 **이성적 끌림**을 뜻합니다. 인간적으로 좋으면 **caer bien**: Me cae bien tu hermano.
## 재귀동사: 동작이 자기에게 돌아옴
| me levanto | te levantas | se levanta | nos levantamos | os levantáis | se levantan |
- 일과: levantarse, despertarse(ie), ducharse, lavarse, vestirse(i), peinarse, acostarse(ue), dormirse(ue), sentarse(ie), llamarse, quedarse, irse.
- 대명사 위치: 활용 동사 **앞**(Me levanto), 원형·현재분사·긍정 명령 **뒤에 붙임**(Voy a levantar**me** = Me voy a levantar, levánta**te**).
- 재귀 여부로 뜻이 달라짐: ir(가다) / **irse**(떠나다), dormir(자다) / **dormirse**(잠들다), llamar(부르다) / **llamarse**(이름이 ~이다), quedar(약속하다; 남다) / **quedarse**(머물다), poner(놓다) / **ponerse**(입다; ~해지다), parecer(~로 보이다) / **parecerse a**(닮다), acordar(합의하다) / **acordarse de**(기억하다), volver(돌아오다) / **volverse**(~하게 변하다).
- 상호: Nos vemos mañana(내일 보자). Se quieren mucho(서로 사랑한다).
- "~해지다": **ponerse** + 형용사(일시적 감정: ponerse nervioso), **volverse**(성격의 근본 변화: volverse loco), **hacerse**(노력·직업·신념: hacerse médico), **quedarse**(결과 상태: quedarse sorprendido), **convertirse en** + 명사(변신), **llegar a ser**(오랜 과정 끝에).`,
ex: `Me gusta mucho la música latina.|저는 라틴 음악을 아주 좋아해요.
¿Te gustan las películas de terror?|공포 영화 좋아해?
A mi hermana le encanta viajar.|우리 언니는 여행을 아주 좋아해요.
— No me gusta el fútbol. — A mí tampoco.|— 난 축구 안 좋아해. — 나도 안 좋아해.
Me duelen los pies.|발이 아파요.
¿Qué te parece este plan?|이 계획 어떻게 생각해?
Me cae muy bien tu novio.|네 남자 친구 참 괜찮은 사람이더라.
Me levanto a las seis y me acuesto a las once.|저는 6시에 일어나고 11시에 잠자리에 들어요.
Tengo que irme ya.|이제 가 봐야 해요.
Se puso muy nervioso antes del examen.|그는 시험 전에 몹시 긴장했어요.
No me acuerdo de su nombre.|그의 이름이 기억나지 않아요.
Nos vemos el sábado.|토요일에 보자.`,
quiz: `Me ___ los perros.|gustan|gusta|gusto|gustamos >> 대상이 복수이므로 gustan.
___ Juan le gusta el vino.|A|El|Para|De >> 사람 이름 앞에 a.
"— Me gusta el café. — (나도)"|A mí también.|Yo también.|A mí tampoco.|Me también. >> gustar 구문의 동의는 A mí.
Me ___ la cabeza.|duele|duelen|duelo|dolor >> 단수 대상.
Mañana tengo que ___ temprano.|levantarme|levantarse|me levantar|levantome >> 원형 뒤에 대명사를 붙이고 주어에 맞춥니다.
"떠나다"는?|irse|ir|irle|se ir >> ir(가다) / irse(떠나다).
"(인간적으로) 네 형 마음에 들어"는?|Me cae bien tu hermano.|Me gusta tu hermano.|Quiero a tu hermano.|Me encanta de tu hermano. >> gustar는 이성적 끌림을 암시할 수 있습니다.` },

{ id: 'g5', lv: 2, t: 'grammar', title: '과거 ①: 단순과거와 불완료과거', sub: 'indefinido와 imperfecto', body: `
스페인어의 과거는 "무슨 일이 **일어났는가**"(단순과거)와 "그때 **어떤 상황이었는가**"(불완료과거)를 구별합니다.
## 단순과거 (pretérito indefinido): 끝난 사건
| | hablar | comer / vivir |
| yo | hablé | comí |
| tú | hablaste | comiste |
| él | habló | comió |
| nosotros | hablamos | comimos |
| vosotros | hablasteis | comisteis |
| ellos | hablaron | comieron |
- 강불규칙(강세가 어간에, 부호 없음): tener → **tuve**, estar → **estuve**, poder → **pude**, poner → **puse**, saber → **supe**, hacer → **hice**(él **hizo**), querer → **quise**, venir → **vine**, decir → **dije**(ellos **dijeron**), traer → **traje**. 어미: -e, -iste, -o, -imos, -isteis, -ieron.
- **ser와 ir는 같은 형태**: fui, fuiste, fue, fuimos, fuisteis, fueron. dar: di, diste, dio. ver: vi, viste, vio.
- 3인칭만 어간 변화(-ir 동사): pedir → **pidió, pidieron**, dormir → **durmió, durmieron**, sentir → **sintió**.
- 철자 변화(yo): buscar → bus**qué**, llegar → lle**gué**, empezar → empe**cé**. leer → le**yó**, le**yeron**.
## 불완료과거 (pretérito imperfecto): 배경·습관·묘사
| hablar | hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban |
| comer/vivir | comía, comías, comía, comíamos, comíais, comían |
- 불규칙은 셋뿐: **ser**(era, eras, era, éramos, erais, eran), **ir**(iba, ibas, iba, íbamos, ibais, iban), **ver**(veía…).
## 구별
| 단순과거 | 불완료과거 |
| 한 번 일어나 끝난 일, 연속된 사건 | 반복·습관 ("~하곤 했다") |
| 기간이 명시된 일 (viví allí **dos años**) | 진행 중이던 배경 ("~하고 있었다") |
| 이야기를 앞으로 전진시킴 | 나이·시각·날씨·감정·외모 묘사 |
| ayer, anoche, el año pasado, una vez, de repente | siempre, todos los días, a menudo, de niño, antes, mientras |
- 배경 + 사건: **Dormía** cuando **sonó** el teléfono. (자고 있는데 전화가 울렸다)
- 뜻이 달라지는 동사: **conocí**(처음 만났다) / conocía(알고 있었다), **supe**(알게 되었다) / sabía(알고 있었다), **quise**(하려고 시도했다) / quería(원했다), **no quise**(거부했다), **pude**(해냈다) / podía(할 수 있었다), **tuve**(받았다, 생겼다) / tenía(가지고 있었다).`,
ex: `Ayer comí paella por primera vez.|어제 처음으로 파에야를 먹었어요.
El año pasado fuimos a Barcelona.|작년에 우리는 바르셀로나에 갔어요.
¿Qué hiciste el fin de semana?|주말에 뭐 했어?
Cuando era niño, jugaba al fútbol todos los días.|어렸을 때는 매일 축구를 했어요.
Eran las once y llovía mucho.|11시였고 비가 많이 오고 있었어요.
Mientras cocinaba, escuchaba la radio.|요리하면서 라디오를 듣고 있었어요.
Estaba viendo la tele cuando llegaste.|네가 도착했을 때 나는 TV를 보고 있었어.
Viví en Madrid durante cinco años.|마드리드에서 5년 동안 살았어요.|기간이 명시되면 단순과거
Conocí a mi mujer en la universidad.|아내를 대학에서 처음 만났어요.
No sabía que estabas enfermo.|네가 아픈 줄 몰랐어.
Me dijo que no podía venir.|그는 올 수 없다고 나에게 말했어요.
Quise llamarte, pero no tenía batería.|너한테 전화하려고 했는데 배터리가 없었어.`,
quiz: `Ayer ___ al cine. (yo, ir)|fui|iba|voy|fue >> 한 번 끝난 일. ir의 단순과거 yo는 fui.
De niño, ___ mucho. (yo, leer)|leía|leí|leo|leyó >> 과거의 습관은 불완료과거.
___ las ocho cuando salimos.|Eran|Fueron|Son|Era >> 시각 묘사는 불완료과거, 복수.
Mientras yo ___, sonó el teléfono. (dormir)|dormía|dormí|durmió|duermo >> 진행 중이던 배경.
Él ___ la verdad. (decir, 단순과거)|dijo|dició|decía|dijió >> decir의 강불규칙.
___ a Ana en una fiesta. (처음 만났다)|Conocí|Conocía|Conozco|Supe >> conocer 단순과거 = 처음 만나다.
Ellos ___ dos horas. (dormir, 단순과거)|durmieron|dormieron|dormían|duermen >> 3인칭에서 o → u.` },

{ id: 'c1', lv: 2, t: 'confuse', title: 'por와 para', sub: '원인·경로 vs 목적·도착점', body: `
| por (뒤를 돌아봄: 원인·경로·교환) | para (앞을 바라봄: 목적·도착점·기한) |
| **원인·동기**: Lo hice por ti (너 때문에/너를 위한 마음에) | **목적**: Estudio para aprender (~하기 위해) |
| **경로·통과**: Pasé por el parque. Viaja por Europa | **목적지**: Salgo para Madrid |
| **기간**: Estudié por dos horas (durante도 가능) | **기한**: Es para el lunes |
| **교환·가격**: Lo compré por 10 euros. Gracias por… | **받는 사람**: Este regalo es para ti |
| **수단**: por teléfono, por correo, por avión | **용도**: una taza para café |
| **대신에**: Trabajo por mi compañero | **의견**: Para mí, es difícil |
| **수동태 행위자**: Fue escrito por Cervantes | **기준 대비**: Para ser extranjero, habla muy bien |
| **단위당**: 100 km por hora, dos veces por semana | **고용**: Trabajo para una empresa |
| **때**: por la mañana / tarde / noche | |
- estar **por** + 원형: 아직 ~하지 않았다, ~할 참이다(지역에 따라) / estar **para** + 원형: 막 ~하려 하다.
- 관용구: por favor, por supuesto, por fin(마침내), por ejemplo, por eso(그래서), por lo menos(적어도), por cierto(그런데), por si acaso(혹시 몰라서), por lo general, por desgracia / para siempre(영원히), para nada(전혀), para colmo(설상가상으로), no es para tanto(그 정도는 아니다).
- **¿Por qué?**(왜?) — **Porque**…(왜냐하면) / **¿Para qué?**(무엇을 위해?) — **Para**…`,
ex: `Gracias por tu ayuda.|도와줘서 고마워요.
Este regalo es para ti.|이 선물은 너를 위한 거야.
Estudio español para trabajar en México.|멕시코에서 일하려고 스페인어를 공부해요.
Caminamos por la playa.|우리는 해변을 따라 걸었어요.
Lo compré por veinte euros.|20유로에 샀어요.
Necesito el informe para el viernes.|금요일까지 보고서가 필요해요.
Te llamo por la tarde.|오후에 전화할게.
Para mí, lo más importante es la salud.|저에게 가장 중요한 것은 건강이에요.
No pude salir por la lluvia.|비 때문에 나갈 수 없었어요.
El tren para Sevilla sale a las diez.|세비야행 기차는 10시에 떠나요.
Para ser tan joven, sabe mucho.|그렇게 젊은 것치고는 많이 알아요.
Voy al gimnasio tres veces por semana.|일주일에 세 번 헬스장에 가요.`,
quiz: `Gracias ___ todo.|por|para|de|a >> 감사의 이유는 por.
Este libro es ___ mi madre.|para|por|a|con >> 받는 사람은 para.
Tengo que terminarlo ___ mañana.|para|por|en|hasta de >> 기한은 para.
Pagué 50 euros ___ los zapatos.|por|para|de|en >> 교환·가격은 por.
Paseamos ___ el centro.|por|para|a|hacia de >> 경로·통과는 por.
___ ser extranjero, hablas muy bien.|Para|Por|De|Como de >> 기준 대비는 para.
Hablamos ___ teléfono.|por|para|en|con >> 수단은 por.` },

{ id: 'p1', lv: 2, t: 'phrase', title: '바·식당·시장에서', sub: '주문과 계산', body: `
스페인 식당에서는 직설적인 표현이 무례하지 않습니다. **¿Me pone…? / ¿Me trae…? / Quiero… / Para mí…** 모두 자연스럽고, por favor를 덧붙이면 충분합니다. 영어식 "¿Puedo tener…?"는 쓰지 않습니다. 점심(la comida)은 2~4시, 저녁(la cena)은 9시 이후가 보통이며 평일 점심의 **menú del día**(오늘의 정식)는 전채·메인·후식·음료가 포함된 세트입니다.`,
ex: `Una mesa para dos, por favor.|두 명 자리 부탁합니다.
¿Tienen menú del día?|오늘의 정식 있나요?
¿Qué me recomienda?|뭘 추천하시나요?
De primero, una ensalada; y de segundo, pescado.|전채로는 샐러드, 메인으로는 생선이요.
¿Me pone una caña, por favor?|생맥주 작은 잔 하나 주시겠어요?|caña: 스페인의 작은 생맥주 잔
Para mí, un café con leche.|저는 카페라테요.
¿Y para beber?|음료는요?|종업원의 말
Agua sin gas, por favor.|탄산 없는 물 주세요.
Soy alérgico a los frutos secos.|저는 견과류 알레르기가 있어요.
¿Lleva carne este plato?|이 요리에 고기가 들어가나요?
¡Está buenísimo!|정말 맛있어요!
¿Nos trae la cuenta, por favor?|계산서 좀 가져다주시겠어요?
¿Se puede pagar con tarjeta?|카드로 계산할 수 있나요?
Quédese con el cambio.|잔돈은 가지세요.
¿A cuánto está el kilo de tomates?|토마토 1킬로에 얼마예요?
Póngame medio kilo, por favor.|반 킬로 주세요.
¿Algo más? — No, nada más, gracias.|더 필요한 것 있으세요? — 아니요, 됐어요, 감사합니다.`,
quiz: `"계산서 주세요"는?|La cuenta, por favor.|La carta, por favor.|El cuento, por favor.|La cocina, por favor. >> la carta는 메뉴판, el cuento는 이야기.
스페인에서 맥주를 주문하는 자연스러운 표현은?|¿Me pone una caña?|¿Puedo tener una cerveza?|Dame cerveza ya.|Yo tomo tener cerveza. >> ¿Me pone…?가 정형 표현입니다.
"De primero"는 무슨 뜻인가?|첫 번째 요리(전채)로|처음부터|1등으로|우선 계산 >> primero / segundo / postre.` },

{ id: 'r1', lv: 2, t: 'read', title: '읽기: Mi abuela', sub: '초급 본문 · 두 과거 시제의 역할', body: `불완료과거(배경·습관)와 단순과거(사건)가 어떻게 번갈아 쓰이는지 확인하세요.`,
ex: `Cuando era pequeño, pasaba todos los veranos en el pueblo de mi abuela.|어렸을 때 나는 여름마다 할머니의 마을에서 보냈다.
Su casa era vieja, pero tenía un jardín enorme lleno de flores.|할머니 집은 낡았지만 꽃으로 가득한 커다란 정원이 있었다.
Cada mañana, mi abuela se levantaba muy temprano y preparaba pan con tomate.|매일 아침 할머니는 아주 일찍 일어나 토마토를 얹은 빵을 준비하셨다.
Yo me despertaba con el olor del café.|나는 커피 향에 잠에서 깨곤 했다.
Por las tardes, nos sentábamos en la puerta y ella me contaba historias de su juventud.|오후에는 문간에 앉아 있었고 할머니는 젊은 시절 이야기를 들려주셨다.
Un día, me enseñó una foto antigua.|어느 날 할머니는 나에게 오래된 사진 한 장을 보여 주셨다.
En la foto había una chica joven que sonreía.|사진 속에는 미소 짓는 젊은 아가씨가 있었다.
—¿Quién es? —le pregunté.|"누구예요?" 하고 내가 물었다.
—Soy yo —me respondió—. Tenía veinte años.|"나란다." 할머니가 대답하셨다. "스무 살이었지."
En ese momento entendí que mi abuela también fue joven una vez.|그 순간 나는 할머니도 한때 젊었다는 것을 이해했다.
Todavía guardo esa foto en mi cartera.|나는 아직도 그 사진을 지갑에 간직하고 있다.`,
quiz: `¿Dónde pasaba el narrador los veranos?|En el pueblo de su abuela|En la playa|En Madrid|En el extranjero >> pasaba todos los veranos en el pueblo de mi abuela.
¿Quién era la chica de la foto?|La abuela de joven|La madre|Una vecina|Una actriz >> —Soy yo.
"se levantaba muy temprano"에 불완료과거가 쓰인 이유는?|과거의 반복된 습관이라서|한 번 일어난 사건이라서|미래의 일이라서|명령이라서 >> cada mañana + 습관.
"me enseñó una foto"에 단순과거가 쓰인 이유는?|어느 날 한 번 일어난 사건이라서|늘 하던 일이라서|배경 묘사라서|가정이라서 >> un día + 사건.` },
]);
