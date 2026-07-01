const unlockAll = true;
const storageKey = "hurufKiDunyaProgress";

const alphabetData = [
  { letter: "ا", name: "الف", soundText: "الف", image: "assets/images/alif.png", audio: "assets/sounds/alif.mp3", unlocked: true, completed: false, words: [
    { word: "انار", letters: ["ا", "ن", "ا", "ر"], imageHint: "pomegranate", image: "assets/images/anar.png", audioText: "الف سے انار", emoji: "🍎" },
    { word: "املی", letters: ["ا", "م", "ل", "ی"], imageHint: "tamarind", image: "assets/images/imli.png", audioText: "الف سے املی", emoji: "🫘" },
    { word: "انگور", letters: ["ا", "ن", "گ", "و", "ر"], imageHint: "grapes", image: "assets/images/angoor.png", audioText: "الف سے انگور", emoji: "🍇" },
    { word: "اونٹ", letters: ["ا", "و", "ن", "ٹ"], imageHint: "camel", image: "assets/images/ont.png", audioText: "الف سے اونٹ", emoji: "🐪" }
  ]},
  { letter: "آ", name: "الف مد", soundText: "الف مد", image: "assets/images/alif-mad.png", audio: "assets/sounds/alif-mad.mp3", unlocked: true, completed: false, words: [
    { word: "آم", letters: ["آ", "م"], imageHint: "mango", image: "assets/images/aam.png", audioText: "الف مد سے آم", emoji: "🥭" },
    { word: "آگ", letters: ["آ", "گ"], imageHint: "fire", image: "assets/images/aag.png", audioText: "الف مد سے آگ", emoji: "🔥" },
    { word: "آٹا", letters: ["آ", "ٹ", "ا"], imageHint: "flour", image: "assets/images/aata.png", audioText: "الف مد سے آٹا", emoji: "🌾" },
    { word: "آری", letters: ["آ", "ر", "ی"], imageHint: "saw", image: "assets/images/aari.png", audioText: "الف مد سے آری", emoji: "🪚" }
  ]},
  { letter: "ب", name: "بے", soundText: "بے", image: "assets/images/be.png", audio: "assets/sounds/be.mp3", unlocked: false, completed: false, words: [
    { word: "بلی", letters: ["ب", "ل", "ی"], imageHint: "cat", image: "assets/images/billi.png", audioText: "بے سے بلی", emoji: "🐱" },
    { word: "بکری", letters: ["ب", "ک", "ر", "ی"], imageHint: "goat", image: "assets/images/bakri.png", audioText: "بے سے بکری", emoji: "🐐" },
    { word: "بطخ", letters: ["ب", "ط", "خ"], imageHint: "duck", image: "assets/images/batakh.png", audioText: "بے سے بطخ", emoji: "🦆" },
    { word: "بستہ", letters: ["ب", "س", "ت", "ہ"], imageHint: "school bag", image: "assets/images/basta.png", audioText: "بے سے بستہ", emoji: "🎒" }
  ]},
  { letter: "پ", name: "پے", soundText: "پے", image: "assets/images/pe.png", audio: "assets/sounds/pe.mp3", unlocked: false, completed: false, words: [
    { word: "پتنگ", letters: ["پ", "ت", "ن", "گ"], imageHint: "kite", image: "assets/images/patang.png", audioText: "پے سے پتنگ", emoji: "🪁" },
    { word: "پانی", letters: ["پ", "ا", "ن", "ی"], imageHint: "water", image: "assets/images/pani.png", audioText: "پے سے پانی", emoji: "💧" },
    { word: "پنکھا", letters: ["پ", "ن", "ک", "ھ", "ا"], imageHint: "fan", image: "assets/images/pankha.png", audioText: "پے سے پنکھا", emoji: "🪭" },
    { word: "پہاڑ", letters: ["پ", "ہ", "ا", "ڑ"], imageHint: "mountain", image: "assets/images/pahar.png", audioText: "پے سے پہاڑ", emoji: "⛰️" }
  ]},
  { letter: "ت", name: "تے", soundText: "تے", image: "assets/images/te.png", audio: "assets/sounds/te.mp3", unlocked: false, completed: false, words: [
    { word: "تربوز", letters: ["ت", "ر", "ب", "و", "ز"], imageHint: "watermelon", image: "assets/images/tarbooz.png", audioText: "تے سے تربوز", emoji: "🍉" },
    { word: "تتلی", letters: ["ت", "ت", "ل", "ی"], imageHint: "butterfly", image: "assets/images/titli.png", audioText: "تے سے تتلی", emoji: "🦋" },
    { word: "تالا", letters: ["ت", "ا", "ل", "ا"], imageHint: "lock", image: "assets/images/tala.png", audioText: "تے سے تالا", emoji: "🔒" },
    { word: "تختی", letters: ["ت", "خ", "ت", "ی"], imageHint: "writing slate", image: "assets/images/takhti.png", audioText: "تے سے تختی", emoji: "📋" }
  ]},
  { letter: "ٹ", name: "ٹے", soundText: "ٹے", image: "assets/images/tte.png", audio: "assets/sounds/tte.mp3", unlocked: false, completed: false, words: [
    { word: "ٹماٹر", letters: ["ٹ", "م", "ا", "ٹ", "ر"], imageHint: "tomato", image: "assets/images/tamatar.png", audioText: "ٹے سے ٹماٹر", emoji: "🍅" },
    { word: "ٹوپی", letters: ["ٹ", "و", "پ", "ی"], imageHint: "cap", image: "assets/images/topi.png", audioText: "ٹے سے ٹوپی", emoji: "🧢" },
    { word: "ٹرین", letters: ["ٹ", "ر", "ی", "ن"], imageHint: "train", image: "assets/images/train.png", audioText: "ٹے سے ٹرین", emoji: "🚂" },
    { word: "ٹوکری", letters: ["ٹ", "و", "ک", "ر", "ی"], imageHint: "basket", image: "assets/images/tokri.png", audioText: "ٹے سے ٹوکری", emoji: "🧺" }
  ]},
  { letter: "ث", name: "ثے", soundText: "ثے", image: "assets/images/se.png", audio: "assets/sounds/se.mp3", unlocked: false, completed: false, words: [
    { word: "ثمر", letters: ["ث", "م", "ر"], imageHint: "fruit", image: "assets/images/samar.png", audioText: "ثے سے ثمر", emoji: "🍒" },
    { word: "ثواب", letters: ["ث", "و", "ا", "ب"], imageHint: "reward", image: "assets/images/sawab.png", audioText: "ثے سے ثواب", emoji: "🏅" },
    { word: "ثریا", letters: ["ث", "ر", "ی", "ا"], imageHint: "star cluster", image: "assets/images/surayya.png", audioText: "ثے سے ثریا", emoji: "✨" },
    { word: "ثعلبہ", letters: ["ث", "ع", "ل", "ب", "ہ"], imageHint: "fox-like animal", image: "assets/images/salaba.png", audioText: "ثے سے ثعلبہ", emoji: "🦊" }
  ]}
];

const games = [
  { id: "flash", title: "فلیش کارڈ", icon: "🃏" }, { id: "balloon", title: "غبارہ پاپ", icon: "🎈" },
  { id: "matching", title: "میچنگ", icon: "🧩" }, { id: "build", title: "لفظ جوڑو", icon: "🔤" }
];
const colors = ["#ff6b6b", "#4dabf7", "#845ef7", "#20c997", "#f59f00", "#e64980", "#12b886"];
const correctMessages = ["شاباش!", "بہت خوب!", "زبردست!", "آپ نے درست جواب دیا!", "واہ! بہت اچھا!"];
const wrongMessages = ["دوبارہ کوشش کریں", "کوئی بات نہیں، پھر سے کریں", "غور سے دیکھیں", "آپ کر سکتے ہیں"];

let selectedIndex = 0, currentScreen = "home", flashIndex = 0, popScore = 0, buildIndex = 0, buildAnswer = [];
let progress = loadProgress();
const app = document.getElementById("app");

function loadProgress() {
  const base = { stars: 0, correct: 0, total: 0, letters: alphabetData.map((_, i) => ({ unlocked: i < 2, completed: false, games: {} })) };
  try { return { ...base, ...(JSON.parse(localStorage.getItem(storageKey)) || {}) }; } catch { return base; }
}
function saveProgress() { localStorage.setItem(storageKey, JSON.stringify(progress)); updateTopBar(); }
function updateTopBar() { starCount.textContent = progress.stars; correctCount.textContent = progress.correct; totalCount.textContent = progress.total; }
function rand(list) { return list[Math.floor(Math.random() * list.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function letterData() { return alphabetData[selectedIndex]; }
function mascot() { return document.getElementById("mascotTemplate").innerHTML; }
function setFeedback(text) { const el = document.getElementById("feedback"); if (el) el.textContent = text; }

function picture(word) { return `<span class="picture" role="img" aria-label="${word.imageHint}">${word.emoji || "🖼️"}</span>`; }
function gameButton(game) { return `<button class="game-button" type="button" onclick="startGame('${game.id}')"><span>${game.icon}</span><br>${game.title}</button>`; }

function renderHome() {
  currentScreen = "home"; updateTopBar();
  app.innerHTML = `<div class="hero"><h1>حروف کی دنیا</h1><p class="subtitle">حرف چنیں اور کھیل کھیلیں</p>${mascot()}</div>
    <div class="letters-grid">${alphabetData.map((item, i) => {
      const isUnlocked = unlockAll || progress.letters[i]?.unlocked || item.unlocked;
      return `<button class="letter-card ${isUnlocked ? "" : "locked"}" style="background:${colors[i]};--tilt:${i % 2 ? "2deg" : "-2deg"}" onclick="selectLetter(${i})" type="button">
        <span class="icon">${isUnlocked ? "🎪" : "🔒"}</span><span class="big-letter">${item.letter}</span><span class="letter-name">${item.name}</span>
      </button>`;
    }).join("")}</div>
    <div class="games-grid">${games.map(g => `<div class="game-button" aria-hidden="true">${g.icon}<br>${g.title}</div>`).join("")}</div>`;
}
function selectLetter(i) { selectedIndex = i; renderDetail(); }
function renderDetail() {
  currentScreen = "detail"; const item = letterData();
  app.innerHTML = `<div class="detail-head"><div><div class="feature-letter">${item.letter}</div><h2>${item.name}</h2><p class="instruction">کھیل چنیں اور ${item.name} سیکھیں</p></div>${mascot()}</div>
    <div class="words-preview">${item.words.map(w => `<div class="word-preview">${picture(w)}<div class="word-text">${w.word}</div></div>`).join("")}</div>
    <div class="games-grid">${games.map(gameButton).join("")}</div><p class="feedback" id="feedback"></p>`;
}
function startGame(id) { ({flash: renderFlash, balloon: renderBalloon, matching: renderMatching, build: renderBuild}[id])(); }

function renderFlash() { currentScreen = "flash"; flashIndex = Math.min(flashIndex, letterData().words.length - 1); const item = letterData(), w = item.words[flashIndex];
  app.innerHTML = `<div class="game-head"><h2>فلیش کارڈ</h2><p class="instruction">${item.name} سے الفاظ سنیں</p></div><div class="flash-wrap"><div class="flash-card"><div class="flash-letter">${item.letter}</div>${picture(w)}<div class="word-text">${w.word}</div><button class="audio-button" onclick="speakUrdu('${w.audioText}')">🔊 آواز سنیں</button></div><div class="controls"><button class="secondary-button" onclick="prevFlash()">پچھلا</button><button class="primary-button" onclick="nextFlash()">اگلا</button><button class="game-button" onclick="completeGame('flash')">مشق شروع کریں</button></div></div><p class="feedback" id="feedback"></p>`; }
function nextFlash(){ flashIndex=(flashIndex+1)%letterData().words.length; renderFlash(); }
function prevFlash(){ flashIndex=(flashIndex-1+letterData().words.length)%letterData().words.length; renderFlash(); }

function renderBalloon() { currentScreen = "balloon"; popScore = 0; drawBalloons(); }
function drawBalloons(){ const item=letterData(); const letters=shuffle([item.letter,item.letter,item.letter,item.letter,item.letter,...alphabetData.filter(x=>x.letter!==item.letter).map(x=>x.letter)]).slice(0,10);
  app.innerHTML=`<div class="game-head"><h2>غبارہ پاپ</h2><p class="instruction">${item.name} والا غبارہ پھوڑیں</p><div class="progress-pill">درست: <span id="popScore">${popScore}</span>/5</div></div><div class="balloons">${letters.map((l,i)=>`<button class="balloon" style="background:${colors[i%colors.length]};border-color:${colors[i%colors.length]}" onclick="popBalloon(this,'${l}')">${l}</button>`).join("")}</div><p class="feedback" id="feedback"></p>`; }
function popBalloon(btn, l){ progress.total++; if(l===letterData().letter){ popScore++; progress.correct++; btn.classList.add("pop"); playPopSound(); setFeedback(rand(correctMessages)); document.getElementById("popScore").textContent=popScore; if(popScore>=5){ setTimeout(()=>{ app.innerHTML=`<div class="result-panel"><h2>بہت خوب! آپ نے ${letterData().name} کے غبارے مکمل کر لیے</h2><button class="primary-button" onclick="completeGame('balloon','matching')">اگلا کھیل</button></div>`; },350); } } else { btn.classList.add("shake"); playWrongSound(); setFeedback(rand(wrongMessages)); } saveProgress(); }

function renderMatching(){ currentScreen="matching"; const item=letterData(); const cards=shuffle(item.words);
  app.innerHTML=`<div class="game-head"><h2>میچنگ</h2><p class="instruction">لفظ کو صحیح تصویر پر رکھیں</p></div><div class="matching-grid">${item.words.map(w=>`<div class="image-box" data-word="${w.word}" ondragover="event.preventDefault()" ondrop="dropWord(event,this)">${picture(w)}<div>یہاں لفظ رکھیں</div></div>`).join("")}</div><div class="word-cards">${cards.map(w=>`<div class="word-card" draggable="true" data-word="${w.word}" ondragstart="dragWord(event)" onclick="chooseWord(this)">${w.word}</div>`).join("")}</div><p class="feedback" id="feedback">لفظ کو کھینچ کر تصویر پر چھوڑیں</p>`; }
let chosenCard=null; function dragWord(e){ e.dataTransfer.setData("text/plain", e.target.dataset.word); }
function chooseWord(el){ chosenCard=el; setFeedback("اب تصویر پر کلک کریں"); document.querySelectorAll('.image-box').forEach(b=>b.onclick=()=>tryMatch(el,b)); }
function dropWord(e, box){ const word=e.dataTransfer.getData("text/plain"); const card=[...document.querySelectorAll('.word-card')].find(c=>c.dataset.word===word&&!c.classList.contains('hidden')); tryMatch(card,box); }
function tryMatch(card, box){ if(!card) return; progress.total++; if(card.dataset.word===box.dataset.word){ card.classList.add('hidden'); box.classList.add('correct'); box.innerHTML += `<div class="word-text">${card.dataset.word} ⭐</div>`; progress.correct++; playCorrectSound(); setFeedback("درست!"); if(document.querySelectorAll('.image-box.correct').length===letterData().words.length) completeGame('matching'); } else { playWrongSound(); setFeedback(rand(wrongMessages)); } saveProgress(); }

function renderBuild(){ currentScreen="build"; buildIndex=0; showBuildWord(); }
function showBuildWord(){ buildAnswer=[]; const w=letterData().words[buildIndex]; const tiles=shuffle(w.letters.map((l,i)=>({l,i})));
  app.innerHTML=`<div class="game-head"><h2>لفظ جوڑو</h2><p class="instruction">حروف کو ترتیب سے چنیں</p></div><div class="build-area"><div class="word-preview">${picture(w)}<div>تصویر دیکھیں</div></div><div class="answer-boxes">${w.letters.map(()=>`<div class="answer-slot"></div>`).join("")}</div><div class="letter-tiles">${tiles.map(t=>`<button class="letter-tile" data-i="${t.i}" onclick="pickLetter(this,'${t.l}')">${t.l}</button>`).join("")}</div><div class="controls"><button class="secondary-button" onclick="showBuildWord()">دوبارہ کریں</button><button class="primary-button" onclick="nextBuildWord()">اگلا لفظ</button></div></div><p class="feedback" id="feedback"></p>`; }
function pickLetter(btn,l){ const w=letterData().words[buildIndex]; if(buildAnswer.length>=w.letters.length) return; buildAnswer.push(l); btn.classList.add('used'); document.querySelectorAll('.answer-slot')[buildAnswer.length-1].textContent=l; if(buildAnswer.length===w.letters.length){ progress.total++; if(buildAnswer.join('')===w.word){ progress.correct++; playCorrectSound(); setFeedback(rand(correctMessages)); if(buildIndex===letterData().words.length-1) setTimeout(()=>completeGame('build'),600); } else { playWrongSound(); setFeedback(rand(wrongMessages)); } saveProgress(); } }
function nextBuildWord(){ buildIndex=(buildIndex+1)%letterData().words.length; showBuildWord(); }

function completeGame(id, next){ const lp=progress.letters[selectedIndex]; if(!lp.games[id]){ lp.games[id]=true; progress.stars++; } const complete=games.every(g=>lp.games[g.id]); if(complete){ lp.completed=true; const ni=selectedIndex+1; if(progress.letters[ni]) progress.letters[ni].unlocked=true; renderResult(); } else if(next) startGame(next); else { saveProgress(); setFeedback("آپ نے یہ کھیل مکمل کر لیا ⭐"); setTimeout(renderDetail, 900); } saveProgress(); }
function renderResult(){ const item=letterData(); app.innerHTML=`<div class="result-panel"><h2>مبارک ہو! آپ نے حرف ${item.name} مکمل کر لیا</h2><p class="instruction">سیکھے ہوئے الفاظ</p><div class="words-preview">${item.words.map(w=>`<div class="word-preview">${picture(w)}<div class="word-text">${w.word}</div></div>`).join("")}</div><p class="instruction">ستارے: ${progress.stars} ⭐</p><div class="result-actions"><button class="primary-button" onclick="nextLetter()">اگلا حرف</button><button class="secondary-button" onclick="renderDetail()">دوبارہ کھیلیں</button><button class="game-button" onclick="renderHome()">گھر جائیں</button></div></div>`; }
function nextLetter(){ selectedIndex=(selectedIndex+1)%alphabetData.length; renderDetail(); }

function speakUrdu(text){ try { if(!('speechSynthesis' in window)) return console.log('آواز:', text); const u=new SpeechSynthesisUtterance(text); u.lang='ur-PK'; const voice=speechSynthesis.getVoices().find(v=>v.lang.startsWith('ur')||v.lang.startsWith('ar')); if(voice) u.voice=voice; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch(e){ console.log('آواز:', text); } }
function beep(freq){ try { const c=new AudioContext(); const o=c.createOscillator(); const g=c.createGain(); o.frequency.value=freq; o.connect(g); g.connect(c.destination); g.gain.setValueAtTime(.08,c.currentTime); g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.18); o.start(); o.stop(c.currentTime+.18); } catch(e){} }
function playCorrectSound(){ beep(740); } function playWrongSound(){ beep(180); } function playPopSound(){ beep(520); }

homeButton.onclick=renderHome; backButton.onclick=()=> currentScreen==="home" ? renderHome() : (currentScreen==="detail" ? renderHome() : renderDetail());
updateTopBar(); renderHome();
