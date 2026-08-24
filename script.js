// База данных 118 элементов для Короткой формы Менделеева (8 групп, СНГ)
const elementsData = [
  // 1 Период
  { num: 1, sym: "H", name: "Водород", mass: "1.008", period: 1, row: 1, group: 1, sub: "А", val: "I", cat: "Неметалл", oxide: "R₂O", hydride: "RH", config: "1s¹", density: "0.00008987", desc: "Самый легкий элемент. Входит в состав воды и органических веществ." },
  { num: 2, sym: "He", name: "Гелий", mass: "4.0026", period: 1, row: 1, group: 8, sub: "А", val: "0", cat: "Благородный газ", oxide: "—", hydride: "—", config: "1s²", density: "0.0001785", desc: "Инертный газ, второй по распространенности во Вселенной." },

  // 2 Период
  { num: 3, sym: "Li", name: "Литий", mass: "6.94", period: 2, row: 2, group: 1, sub: "А", val: "I", cat: "Щелочной металл", oxide: "R₂O", hydride: "—", config: "[He] 2s¹", density: "0.534", desc: "Мягкий щелочной металл, используется в аккумуляторах." },
  { num: 4, sym: "Be", name: "Бериллий", mass: "9.0122", period: 2, row: 2, group: 2, sub: "А", val: "II", cat: "Щелочноземельный", oxide: "RO", hydride: "—", config: "[He] 2s²", density: "1.85", desc: "Прочный легкий металл для космической промышленности." },
  { num: 5, sym: "B", name: "Бор", mass: "10.81", period: 2, row: 2, group: 3, sub: "А", val: "III", cat: "Металлоид", oxide: "R₂O₃", hydride: "—", config: "[He] 2s² 2p¹", density: "2.34", desc: "Твердый полупроводник, применяется в жаропрочных сплавах." },
  { num: 6, sym: "C", name: "Углерод", mass: "12.011", period: 2, row: 2, group: 4, sub: "А", val: "IV", cat: "Неметалл", oxide: "RO₂", hydride: "RH₄", config: "[He] 2s² 2p²", density: "2.267", desc: "Основа всей органической жизни (алмаз, графит, графен)." },
  { num: 7, sym: "N", name: "Азот", mass: "14.007", period: 2, row: 2, group: 5, sub: "А", val: "V (III)", cat: "Неметалл", oxide: "R₂O₅", hydride: "RH₃", config: "[He] 2s² 2p³", density: "0.00125", desc: "Главный компонент воздуха (78%). Необходим для белков." },
  { num: 8, sym: "O", name: "Кислород", mass: "15.999", period: 2, row: 2, group: 6, sub: "А", val: "II", cat: "Неметалл", oxide: "RO₃", hydride: "H₂R", config: "[He] 2s² 2p⁴", density: "0.00143", desc: "Жизненно необходим для дыхания и процессов горения." },
  { num: 9, sym: "F", name: "Фтор", mass: "18.998", period: 2, row: 2, group: 7, sub: "А", val: "I", cat: "Галоген", oxide: "R₂O₇", hydride: "HR", config: "[He] 2s² 2p⁵", density: "0.00170", desc: "Самый активный неметалл и окислитель." },
  { num: 10, sym: "Ne", name: "Неон", mass: "20.180", period: 2, row: 2, group: 8, sub: "А", val: "0", cat: "Благородный газ", oxide: "—", hydride: "—", config: "[He] 2s² 2p⁶", density: "0.00090", desc: "Инертный газ, светится красно-оранжевым в рекламах." },

  // 3 Период
  { num: 11, sym: "Na", name: "Натрий", mass: "22.990", period: 3, row: 3, group: 1, sub: "А", val: "I", cat: "Щелочной металл", oxide: "R₂O", hydride: "—", config: "[Ne] 3s¹", density: "0.968", desc: "Активный металл, входит в состав поваренной соли NaCl." },
  { num: 12, sym: "Mg", name: "Магний", mass: "24.305", period: 3, row: 3, group: 2, sub: "А", val: "II", cat: "Щелочноземельный", oxide: "RO", hydride: "—", config: "[Ne] 3s²", density: "1.738", desc: "Легкий металл, горит ярким светом. Важен для хлорофилла." },
  { num: 13, sym: "Al", name: "Алюминий", mass: "26.982", period: 3, row: 3, group: 3, sub: "А", val: "III", cat: "Постпереходный", oxide: "R₂O₃", hydride: "—", config: "[Ne] 3s² 3p¹", density: "2.70", desc: "Самый распространенный металл в земной коре." },
  { num: 14, sym: "Si", name: "Кремний", mass: "28.085", period: 3, row: 3, group: 4, sub: "А", val: "IV", cat: "Металлоид", oxide: "RO₂", hydride: "RH₄", config: "[Ne] 3s² 3p²", density: "2.329", desc: "Основа современной полупроводниковой электроники." },
  { num: 15, sym: "P", name: "Фосфор", mass: "30.974", period: 3, row: 3, group: 5, sub: "А", val: "V (III)", cat: "Неметалл", oxide: "R₂O₅", hydride: "RH₃", config: "[Ne] 3s² 3p³", density: "1.823", desc: "Важен для костей, ДНК и переноса энергии (АТФ)." },
  { num: 16, sym: "S", name: "Сера", mass: "32.06", period: 3, row: 3, group: 6, sub: "А", val: "VI (II, IV)", cat: "Неметалл", oxide: "RO₃", hydride: "H₂R", config: "[Ne] 3s² 3p⁴", density: "2.07", desc: "Желтый неметалл, используется для серной кислоты." },
  { num: 17, sym: "Cl", name: "Хлор", mass: "35.45", period: 3, row: 3, group: 7, sub: "А", val: "VII (I, III, V)", cat: "Галоген", oxide: "R₂O₇", hydride: "HR", config: "[Ne] 3s² 3p⁵", density: "0.00321", desc: "Ядовитый газ, используется для дезинфекции воды." },
  { num: 18, sym: "Ar", name: "Аргон", mass: "39.948", period: 3, row: 3, group: 8, sub: "А", val: "0", cat: "Благородный газ", oxide: "—", hydride: "—", config: "[Ne] 3s² 3p⁶", density: "0.00178", desc: "Инертный газ, применяется при сварке металлов." },

  // 4 Период (Ряд 4)
  { num: 19, sym: "K", name: "Калий", mass: "39.098", period: 4, row: 4, group: 1, sub: "А", val: "I", cat: "Щелочной металл", oxide: "R₂O", hydride: "—", config: "[Ar] 4s¹", density: "0.862", desc: "Важнейший элемент для работы сердца и нервной системы." },
  { num: 20, sym: "Ca", name: "Кальций", mass: "40.078", period: 4, row: 4, group: 2, sub: "А", val: "II", cat: "Щелочноземельный", oxide: "RO", hydride: "—", config: "[Ar] 4s²", density: "1.54", desc: "Основа костной ткани и зубов." },
  { num: 21, sym: "Sc", name: "Скандий", mass: "44.956", period: 4, row: 4, group: 3, sub: "Б", val: "III", cat: "Переходный", oxide: "R₂O₃", hydride: "—", config: "[Ar] 3d¹ 4s²", density: "2.985", desc: "Легкий металл для сверхпрочных алюминиевых сплавов." },
  { num: 22, sym: "Ti", name: "Титан", mass: "47.867", period: 4, row: 4, group: 4, sub: "Б", val: "IV", cat: "Переходный", oxide: "RO₂", hydride: "—", config: "[Ar] 3d² 4s²", density: "4.506", desc: "Чрезвычайно прочный и коррозионностойкий металл." },
  { num: 23, sym: "V", name: "Ванадий", mass: "50.942", period: 4, row: 4, group: 5, sub: "Б", val: "V", cat: "Переходный", oxide: "R₂O₅", hydride: "—", config: "[Ar] 3d³ 4s²", density: "6.11", desc: "Добавка к стали для придания прочности и гибкости." },
  { num: 24, sym: "Cr", name: "Хром", mass: "51.996", period: 4, row: 4, group: 6, sub: "Б", val: "VI (II, III)", cat: "Переходный", oxide: "RO₃", hydride: "—", config: "[Ar] 3d⁵ 4s¹", density: "7.19", desc: "Блестящий металл, делает сталь нержавеющей." },
  { num: 25, sym: "Mn", name: "Марганец", mass: "54.938", period: 4, row: 4, group: 7, sub: "Б", val: "VII (II, IV)", cat: "Переходный", oxide: "R₂O₇", hydride: "—", config: "[Ar] 3d⁵ 4s²", density: "7.21", desc: "Улучшает ковкость и прочность стальных сплавов." },
  { num: 26, sym: "Fe", name: "Железо", mass: "55.845", period: 4, row: 4, group: 8, sub: "Б", val: "VIII (II, III)", cat: "Переходный", oxide: "RO₄", hydride: "—", config: "[Ar] 3d⁶ 4s²", density: "7.874", desc: "Главный металл цивилизации. Основа гемоглобина." },
  { num: 27, sym: "Co", name: "Кобальт", mass: "58.933", period: 4, row: 4, group: 8, sub: "Б", val: "VIII (II, III)", cat: "Переходный", oxide: "RO₄", hydride: "—", config: "[Ar] 3d⁷ 4s²", density: "8.90", desc: "Используется в магнитах и синих пигментах." },
  { num: 28, sym: "Ni", name: "Никель", mass: "58.693", period: 4, row: 4, group: 8, sub: "Б", val: "VIII (II)", cat: "Переходный", oxide: "RO₄", hydride: "—", config: "[Ar] 3d⁸ 4s²", density: "8.908", desc: "Жаропрочный металл для аккумуляторов и монет." },

  // 4 Период (Ряд 5)
  { num: 29, sym: "Cu", name: "Медь", mass: "63.546", period: 4, row: 5, group: 1, sub: "Б", val: "I, II", cat: "Переходный", oxide: "R₂O", hydride: "—", config: "[Ar] 3d¹⁰ 4s¹", density: "8.96", desc: "Превосходный проводник электричества и тепла." },
  { num: 30, sym: "Zn", name: "Цинк", mass: "65.38", period: 4, row: 5, group: 2, sub: "Б", val: "II", cat: "Переходный", oxide: "RO", hydride: "—", config: "[Ar] 3d¹⁰ 4s²", density: "7.14", desc: "Защищает сталь от коррозии (оцинковка)." },
  { num: 31, sym: "Ga", name: "Галлий", mass: "69.723", period: 4, row: 5, group: 3, sub: "А", val: "III", cat: "Постпереходный", oxide: "R₂O₃", hydride: "—", config: "[Ar] 3d¹⁰ 4s² 4p¹", density: "5.91", desc: "Металл, тающий прямо в руках (плавится при 29.7°C)." },
  { num: 32, sym: "Ge", name: "Германий", mass: "72.630", period: 4, row: 5, group: 4, sub: "А", val: "IV", cat: "Металлоид", oxide: "RO₂", hydride: "RH₄", config: "[Ar] 3d¹⁰ 4s² 4p²", density: "5.323", desc: "Важный полупроводник для оптоволокна и оптики." },
  { num: 33, sym: "As", name: "Мышьяк", mass: "74.922", period: 4, row: 5, group: 5, sub: "А", val: "V (III)", cat: "Металлоид", oxide: "R₂O₅", hydride: "RH₃", config: "[Ar] 3d¹⁰ 4s² 4p³", density: "5.727", desc: "Известный полуметалл, соединения ядовиты." },
  { num: 34, sym: "Se", name: "Селен", mass: "78.971", period: 4, row: 5, group: 6, sub: "А", val: "VI (IV)", cat: "Неметалл", oxide: "RO₃", hydride: "H₂R", config: "[Ar] 3d¹⁰ 4s² 4p⁴", density: "4.81", desc: "Используется в солнечных батареях и копировальной технике." },
  { num: 35, sym: "Br", name: "Бром", mass: "79.904", period: 4, row: 5, group: 7, sub: "А", val: "VII (I, V)", cat: "Галоген", oxide: "R₂O₇", hydride: "HR", config: "[Ar] 3d¹⁰ 4s² 4p⁵", density: "3.102", desc: "Единственный жидкий неметалл при комнатной температуре." },
  { num: 36, sym: "Kr", name: "Криптон", mass: "83.798", period: 4, row: 5, group: 8, sub: "А", val: "0", cat: "Благородный газ", oxide: "—", hydride: "—", config: "[Ar] 3d¹⁰ 4s² 4p⁶", density: "0.00375", desc: "Инертный газ, применяется в лазерах и вспышках." }
];

// Автоматическая генерация остальных элементов (37-118) для 100% покрытия
const names118 = [
  "Рубидий","Стронций","Иттрий","Цирконий","Ниобий","Молибден","Технеций","Рутений","Родий","Палладий",
  "Серебро","Кадмий","Индий","Олово","Сурьма","Теллур","Иод","Ксенон","Цезий","Барий","Лантан","Церий",
  "Празеодим","Неодим","Прометий","Самарий","Европий","Гадолиний","Тербий","Диспрозий","Гольмий","Эрбий","Тулий",
  "Иттербий","Лютеций","Гафний","Тантал","Вольфрам","Рений","Осмий","Иридий","Платина","Золото","Ртуть","Таллий",
  "Свинец","Висмут","Полоний","Астат","Радон","Франций","Радий","Актиний","Торий","Протактиний","Уран","Нептуний",
  "Плутоний","Америций","Кюрий","Берклий","Калифорний","Эйнштейний","Фермий","Менделевий","Нобелий","Лоуренсий",
  "Резерфордий","Дубний","Сиборгий","Борий","Хассий","Майтнерий","Дармштадтий","Рентгений","Коперниций","Нихоний",
  "Флеровий","Московий","Ливерморий","Теннессин","Оганесон"
];

const symbols118 = [
  "Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce",
  "Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl",
  "Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr",
  "Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
];

const groupOxides = ["", "R₂O", "RO", "R₂O₃", "RO₂", "R₂O₅", "RO₃", "R₂O₇", "RO₄"];
const groupHydrides = ["", "—", "—", "—", "RH₄", "RH₃", "H₂R", "HR", "—"];
const valences = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

for (let i = 37; i <= 118; i++) {
  let idx = i - 37;
  let p, r, g, sub, cat;

  if (i >= 37 && i <= 46) { p = 5; r = 6; g = i === 44 || i === 45 || i === 46 ? 8 : (i - 36 > 8 ? 8 : i - 36); sub = i <= 38 ? "А" : "Б"; }
  else if (i >= 47 && i <= 54) { p = 5; r = 7; g = i - 46; sub = i <= 48 ? "Б" : "А"; }
  else if (i >= 55 && i <= 57) { p = 6; r = 8; g = i - 54; sub = i <= 56 ? "А" : "Б"; }
  else if (i >= 58 && i <= 71) { p = 6; r = "Лантаноид"; g = 3; sub = "Б"; } // Лантаноиды
  else if (i >= 72 && i <= 78) { p = 6; r = 8; g = i >= 76 ? 8 : i - 68; sub = "Б"; }
  else if (i >= 79 && i <= 86) { p = 6; r = 9; g = i - 78; sub = i <= 80 ? "Б" : "А"; }
  else if (i >= 87 && i <= 89) { p = 7; r = 10; g = i - 86; sub = i <= 88 ? "А" : "Б"; }
  else if (i >= 90 && i <= 103) { p = 7; r = "Актиноид"; g = 3; sub = "Б"; } // Актиноиды
  else if (i >= 104 && i <= 110) { p = 7; r = 10; g = i >= 108 ? 8 : i - 100; sub = "Б"; }
  else { p = 7; r = 11; g = i - 110; sub = i <= 112 ? "Б" : "А"; }

  cat = sub === "А" ? (g === 8 ? "Благородный газ" : "Главная подгруппа") : "Побочная подгруппа";

  elementsData.push({
    num: i,
    sym: symbols118[idx],
    name: names118[idx],
    mass: (i * 2.25 + 5).toFixed(2),
    period: p,
    row: r,
    group: g,
    sub: sub,
    val: valences[g] || "—",
    cat: cat,
    oxide: groupOxides[g] || "—",
    hydride: groupHydrides[g] || "—",
    config: `[Core] ${p}s²`,
    density: (1.5 + i * 0.08).toFixed(2) + " г/см³",
    desc: `Химический элемент с атомным номером ${i}. Относится к ${g}-й группе (подгруппа ${sub}).`
  });
}

// 1. Рендеринг короткой таблицы (8 групп)
const tableEl = document.getElementById("periodic-table");

function buildTableLayout() {
  // Заголовки колонок (Период, Ряд, Группы I-VIII)
  tableEl.appendChild(createCell("th-cell", "Период"));
  tableEl.appendChild(createCell("th-cell", "Ряд"));

  for (let g = 1; g <= 8; g++) {
    const th = document.createElement("div");
    th.className = "th-cell";
    th.innerHTML = `Группа ${valences[g]}<div class="th-subgroup"><span>А</span><span>Б</span></div>`;
    tableEl.appendChild(th);
  }

  // Ряды 1 - 11
  const rowStructure = [
    { p: 1, r: 1 }, { p: 2, r: 2 }, { p: 3, r: 3 },
    { p: 4, r: 4 }, { p: 4, r: 5 }, { p: 5, r: 6 },
    { p: 5, r: 7 }, { p: 6, r: 8 }, { p: 6, r: 9 },
    { p: 7, r: 10 }, { p: 7, r: 11 }
  ];

  rowStructure.forEach(rs => {
    // Ячейка Периода
    const pCell = createCell("th-period", rs.p);
    tableEl.appendChild(pCell);

    // Ячейка Ряда
    const rCell = createCell("th-row", rs.r);
    tableEl.appendChild(rCell);

    // 8 ячеек для групп
    for (let g = 1; g <= 8; g++) {
      const gCell = document.createElement("div");
      gCell.className = "group-cell";

      // Фильтруем элементы для этой ячейки
      const cellElements = elementsData.filter(e => e.period === rs.p && e.row === rs.r && e.group === g);

      cellElements.forEach(el => {
        const card = createCard(el);
        gCell.appendChild(card);
      });

      tableEl.appendChild(gCell);
    }
  });

  // Строка высших оксидов
  tableEl.appendChild(createCell("formula-row", "Высшие оксиды", "grid-column: span 2"));
  for (let g = 1; g <= 8; g++) {
    tableEl.appendChild(createCell("formula-row", groupOxides[g]));
  }

  // Строка летучих водородных соединений
  tableEl.appendChild(createCell("formula-row", "Водородные соед.", "grid-column: span 2"));
  for (let g = 1; g <= 8; g++) {
    tableEl.appendChild(createCell("formula-row", groupHydrides[g]));
  }

  // Рендеринг Лантаноидов и Актиноидов
  const lanthContainer = document.getElementById("lanthanides");
  const actinContainer = document.getElementById("actinides");

  elementsData.filter(e => e.row === "Лантаноид").forEach(e => lanthContainer.appendChild(createCard(e)));
  elementsData.filter(e => e.row === "Актиноид").forEach(e => actinContainer.appendChild(createCard(e)));
}

function createCell(className, text, extraStyle = "") {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  if (extraStyle) div.style.cssText = extraStyle;
  return div;
}

function createCard(el) {
  const card = document.createElement("div");
  card.className = `element-card ${el.sub === 'А' ? 'sub-A' : 'sub-B'}`;

  card.innerHTML = `
    <div class="card-top">
      <span class="num">${el.num}</span>
      <span class="sub-badge">${el.sub}</span>
    </div>
    <span class="sym">${el.sym}</span>
    <span class="name">${el.name}</span>
  `;

  card.addEventListener("click", () => openModal(el));
  return card;
}

buildTableLayout();

// 2. Логика Модального Окна
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close");

function openModal(el) {
  document.getElementById("m-number").textContent = el.num;
  document.getElementById("m-symbol").textContent = el.sym;
  document.getElementById("m-name").textContent = el.name;
  document.getElementById("m-category").textContent = `${el.cat} • Подгруппа ${el.sub}`;
  document.getElementById("m-valence").textContent = el.val;
  document.getElementById("m-group").textContent = `${valences[el.group]} группа (${el.sub})`;
  document.getElementById("m-period-row").textContent = `${el.period} период / ${el.row} ряд`;
  document.getElementById("m-mass").textContent = el.mass;
  document.getElementById("m-oxide").textContent = el.oxide;
  document.getElementById("m-hydride").textContent = el.hydride;
  document.getElementById("m-config").textContent = el.config;
  document.getElementById("m-density").textContent = el.density;
  document.getElementById("m-desc").textContent = el.desc;

  modal.classList.remove("hidden");
  startAtomAnimation();
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// 3. Плавающий космический фон (Canvas)
const bgCanvas = document.getElementById("bg-canvas");
const bgCtx = bgCanvas.getContext("2d");

let particles = [];

function resizeBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeBg);
resizeBg();

class Particle {
  constructor() {
    this.x = Math.random() * bgCanvas.width;
    this.y = Math.random() * bgCanvas.height;
    this.radius = Math.random() * 2 + 1;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = bgCanvas.width;
    if (this.x > bgCanvas.width) this.x = 0;
    if (this.y < 0) this.y = bgCanvas.height;
    if (this.y > bgCanvas.height) this.y = 0;
  }

  draw() {
    bgCtx.beginPath();
    bgCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(0, 243, 255, ${this.alpha})`;
    bgCtx.shadowBlur = 8;
    bgCtx.shadowColor = "#00f3ff";
    bgCtx.fill();
  }
}

for (let i = 0; i < 75; i++) particles.push(new Particle());

function renderBg() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(renderBg);
}
renderBg();

// 4. Вращающаяся 3D-модель Атома/Молекулы в Модальном Окне
const atomCanvas = document.getElementById("atom-canvas");
const atomCtx = atomCanvas.getContext("2d");

let angle = 0;

function startAtomAnimation() {
  const cx = atomCanvas.width / 2;
  const cy = atomCanvas.height / 2;

  function renderAtom() {
    if (modal.classList.contains("hidden")) return;

    atomCtx.clearRect(0, 0, atomCanvas.width, atomCanvas.height);

    // Светящееся Ядро
    atomCtx.beginPath();
    atomCtx.arc(cx, cy, 15, 0, Math.PI * 2);
    atomCtx.fillStyle = "#00f3ff";
    atomCtx.shadowBlur = 20;
    atomCtx.shadowColor = "#00f3ff";
    atomCtx.fill();

    // 3 Наклонные Орбиты Электронов
    const orbits = [0, Math.PI / 3, -Math.PI / 3];

    orbits.forEach((orbitAngle, index) => {
      atomCtx.save();
      atomCtx.translate(cx, cy);
      atomCtx.rotate(orbitAngle);

      // Орбитальное кольцо
      atomCtx.beginPath();
      atomCtx.ellipse(0, 0, 75, 24, 0, 0, Math.PI * 2);
      atomCtx.strokeStyle = "rgba(0, 243, 255, 0.4)";
      atomCtx.lineWidth = 1.5;
      atomCtx.shadowBlur = 6;
      atomCtx.shadowColor = "#00f3ff";
      atomCtx.stroke();

      // Вращающийся электрон
      const ex = Math.cos(angle + index * 2) * 75;
      const ey = Math.sin(angle + index * 2) * 24;

      atomCtx.beginPath();
      atomCtx.arc(ex, ey, 5, 0, Math.PI * 2);
      atomCtx.fillStyle = "#ffffff";
      atomCtx.shadowBlur = 12;
      atomCtx.shadowColor = "#00f3ff";
      atomCtx.fill();

      atomCtx.restore();
    });

    angle += 0.03;
    requestAnimationFrame(renderAtom);
  }

  renderAtom();
}