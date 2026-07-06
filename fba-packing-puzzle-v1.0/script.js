const gameConfig = { gameId: "fba-packing-puzzle", gameTitle: "FBA納品パズル", timeLimit: 60 };
const boxConfigs = {
  "100": { label: "100サイズ", cols: 10, rows: 8, shippingCost: 1000, difficulty: "高い" },
  "120": { label: "120サイズ", cols: 12, rows: 8, shippingCost: 1300, difficulty: "普通" },
  "140": { label: "140サイズ", cols: 14, rows: 8, shippingCost: 1700, difficulty: "低い" }
};
const pieceCatalog = {
  largeComicSet: { name: "大型コミックセット", set: true, defaultShape: "comicRect12" },
  smallComicSet: { name: "小型コミックセット", set: true, defaultShape: "smallRect6" },
  bunkoSet: { name: "文庫セット", set: true, defaultShape: "smallT5" },
  dictionary: { name: "辞書", defaultShape: "dictionary" },
  tankobon: { name: "単行本", defaultShape: "tankobon" },
  magazine: { name: "雑誌", defaultShape: "magazine" },
  bunko: { name: "文庫", defaultShape: "bunko" }
};
const shapeDefinitions = {
  comicRect12: ["1111", "1111", "1111"],
  comicL10: ["1111", "1111", "1100"],
  comicZ8: ["1100", "1111", "0011"],
  smallRect6: ["111", "111"],
  smallL5: ["111", "110"],
  smallT5: ["111", "010", "010"],
  dictionary: ["11", "11", "11"],
  magazine: ["11", "11", "11"],
  tankobon: ["11", "11"],
  bunko: ["1", "1"]
};
const bookVariants = {
  largeComicSet: [["大冒険ヒーロー", "#17314f", "#ffd15a"], ["銀河少年団", "#203c72", "#8fd6ff"], ["竜の町日記", "#254463", "#ff8f61"], ["青空剣士", "#182c55", "#f7e36d"], ["未来忍者隊", "#243a68", "#65d19a"], ["星くず学園", "#19375d", "#ffb4d1"], ["海辺の勇者", "#214d73", "#ffd25f"], ["まほろば探検", "#2c315d", "#86d8ff"], ["風車ファンタジー", "#19415f", "#f1c44e"], ["夜明けランナー", "#222f4b", "#ff795e"]],
  smallComicSet: [["サッカー小僧", "#58a9cc", "#ffffff"], ["ねこ町クラブ", "#72c5df", "#ffeb7a"], ["放課後キッチン", "#6bb8d5", "#ff9f9f"], ["ミニ探偵団", "#4fa3ca", "#fff2a7"], ["雲の郵便屋", "#7cc8e6", "#345"], ["となりの魔法", "#67badb", "#ffe07a"], ["海色スケッチ", "#50a7ce", "#fff"], ["朝練ドリーム", "#78cbe4", "#ff805f"], ["小さな船長", "#5fb6d9", "#f6d56d"], ["星空ホーム", "#4a9fc7", "#ffffff"]],
  bunkoSet: [["探偵ミステリー", "#d99a25", "#1e2428"], ["夕暮れ文庫", "#d79d30", "#fff7d9"], ["旅する短編集", "#e3aa3c", "#243"], ["古時計事件", "#c98b21", "#fff"], ["路地裏ノート", "#e8b449", "#222"], ["月影劇場", "#d39428", "#fff"], ["雨音文庫", "#efbd55", "#263238"], ["灯台通信", "#d6a03b", "#fff7d6"], ["喫茶小説集", "#e0a73b", "#3a2500"], ["小春文庫", "#efb23f", "#2c2114"]],
  dictionary: [["広辞苑風典", "#9b2d28", "#d9b95f"], ["ことば大鑑", "#8d2522", "#f1cf6a"], ["日本語宝典", "#a2352e", "#e9c56d"], ["新語辞林", "#7f2a27", "#f4d179"], ["表現辞典", "#9d332d", "#eac264"], ["漢字大全", "#842822", "#f2d073"], ["語源宝庫", "#a64036", "#f5d988"], ["知識字典", "#912f2b", "#dabb65"], ["ことのは苑", "#7a211f", "#e8c35d"], ["用例大事典", "#a83a32", "#f1d67b"]],
  tankobon: [["単行本入門", "#6f9e45", "#dceec6"], ["図解の森", "#7fab52", "#e2f2c7"], ["仕事の地図", "#5f8f3e", "#d7eeb7"], ["暮らし研究", "#80a957", "#f0f7dc"], ["やさしい統計", "#6a9a43", "#e7f2d0"], ["読書の技法", "#789f4c", "#eef7d7"], ["小さな経営", "#5d8c3d", "#d8ebb9"], ["道具の教室", "#83ad5b", "#f4f5df"], ["文章レッスン", "#679541", "#e5f0ce"], ["考える練習", "#749f50", "#edf3d6"]],
  magazine: [["TRENDY", "#c74335", "#ffffff"], ["MONTHLY", "#d8503e", "#fffaf2"], ["BOOK WALK", "#b7372e", "#ffffff"], ["LIFE NOW", "#cc4739", "#fff9ef"], ["TOOLS", "#d65b43", "#ffffff"], ["STORE", "#bd3b31", "#fefefe"], ["IDEA", "#d14c3d", "#fffaf4"], ["WEEKEND", "#c93f34", "#ffffff"], ["FRESH", "#da6048", "#fff8ee"], ["MARKET", "#b9322b", "#ffffff"]],
  bunko: [["窓ぎわの町", "#f3d8b4", "#4a2f1a"], ["花待ち手紙", "#f2dfc1", "#563519"], ["雨の栞", "#ead1ad", "#432"], ["小径の灯り", "#f6e2c5", "#4a2f1a"], ["風見鳥", "#edcfa8", "#382818"], ["夏色ページ", "#f5dfbd", "#55351f"], ["遠い約束", "#ead6b8", "#2f251c"], ["朝焼け文庫", "#f4dfc6", "#52331b"], ["月の喫茶店", "#ecd2ad", "#3f2a18"], ["古鍵の歌", "#f7e6cc", "#4a2e18"]]
};
const puzzleSets = [
  [["largeComicSet","comicRect12"],["largeComicSet","comicRect12"],["largeComicSet","comicRect12"],["largeComicSet","comicRect12"],["largeComicSet","comicL10"],["largeComicSet","comicL10"],["smallComicSet","smallRect6"],["tankobon","tankobon"],["bunko","bunko"]],
  [["largeComicSet","comicRect12"],["largeComicSet","comicL10"],["largeComicSet","comicRect12"],["smallComicSet","smallL5"],["largeComicSet","comicRect12"],["largeComicSet","comicL10"],["smallComicSet","smallL5"],["largeComicSet","comicRect12"],["bunko","bunko"]],
  [["largeComicSet","comicL10"],["largeComicSet","comicRect12"],["dictionary","dictionary"],["largeComicSet","comicRect12"],["largeComicSet","comicRect12"],["tankobon","tankobon"],["largeComicSet","comicL10"],["largeComicSet","comicRect12"],["bunko","bunko"]]
];

const screens = document.querySelectorAll(".screen");
const goodsPreview = document.getElementById("goodsPreview");
const boxOptions = document.getElementById("boxOptions");
const boxBoard = document.getElementById("boxBoard");
const pieceTray = document.getElementById("pieceTray");
const dragGhost = document.getElementById("dragGhost");
const rotationControls = document.getElementById("rotationControls");
const confettiLayer = document.getElementById("confettiLayer");
const exchangeButtons = document.getElementById("exchangeButtons");
const stageMessage = document.getElementById("stageMessage");
const pickupRoad = document.getElementById("pickupRoad");
const pickupTruck = document.getElementById("pickupTruck");
const pickupSpeech = document.getElementById("pickupSpeech");
const introLine = document.getElementById("introLine");
const introCountdown = document.getElementById("introCountdown");
const deliveryScene = document.getElementById("deliveryScene");

let pieces = [];
let selectedPieceId = null;
let currentBoxSize = "100";
let timeLeft = gameConfig.timeLimit;
let timerId = null;
let gameEnded = false;
let latestGameResult = null;
let audioContext = null;
let dragState = null;
let lastDragEvent = null;
let rotationWaitTimer = null;
let lastTickSecond = null;
let hasShownLastBook = false;
let introTimers = [];

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("screen-active", screen.id === id));
  if (id !== "gameScreen") {
    clearRotationWait();
    hideRotationControls();
    if (pickupSpeech) pickupSpeech.classList.remove("show");
  }
}
function yen(value) { return value.toLocaleString("ja-JP") + "円"; }
function ensureAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioContext = new AudioContextClass();
  }
}
function playTone(frequency, duration, type = "sine", delay = 0, volume = 0.045) {
  if (!audioContext) return;
  const start = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}
function soundDrop() { ensureAudioContext(); playTone(260, 0.06, "triangle", 0, 0.035); playTone(420, 0.08, "triangle", 0.055, 0.035); }
function soundSnap() { ensureAudioContext(); playTone(760, 0.07, "square", 0, 0.035); }
function cellsFromShape(shapeId) {
  return shapeDefinitions[shapeId].flatMap((row, y) => [...row].flatMap((cell, x) => cell === "1" ? [{ x, y }] : []));
}
function normalizeCells(cells) {
  const minX = Math.min(...cells.map((cell) => cell.x));
  const minY = Math.min(...cells.map((cell) => cell.y));
  return cells.map((cell) => ({ x: cell.x - minX, y: cell.y - minY }));
}
function rotateCells(cells) { return normalizeCells(cells.map((cell) => ({ x: -cell.y, y: cell.x }))); }
function rotateCellsBy(cells, turns) {
  let nextCells = cells;
  for (let index = 0; index < turns; index += 1) nextCells = rotateCells(nextCells);
  return nextCells;
}
function getCellBounds(cells) {
  return { w: Math.max(...cells.map((cell) => cell.x)) + 1, h: Math.max(...cells.map((cell) => cell.y)) + 1 };
}
function getPieceCells(piece) { return rotateCellsBy(piece.cells, piece.rotation || 0); }
function getPieceSize(piece) { return getCellBounds(getPieceCells(piece)); }
function getPiece(id) { return pieces.find((piece) => piece.id === id); }
function remainingPieces() { return pieces.filter((piece) => !piece.placed); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char])); }

function choosePuzzle() {
  const set = puzzleSets[Math.floor(Math.random() * puzzleSets.length)];
  const used = {};
  pieces = set.map(([kind, shapeId], index) => {
    used[kind] = used[kind] || 0;
    const variantIndex = used[kind] % 10;
    used[kind] += 1;
    const catalog = pieceCatalog[kind];
    const [title, base, accent] = bookVariants[kind][variantIndex];
    return { id: `${kind}-${index}`, kind, name: catalog.name, title, base, accent, shapeId, cells: cellsFromShape(shapeId || catalog.defaultShape), set: !!catalog.set, rotation: 0, placed: false, x: null, y: null };
  });
}
function renderBookFace(piece) {
  const title = escapeHtml(piece.title);
  const cells = getPieceCells(piece);
  const bounds = getCellBounds(cells);
  const cellSet = new Set(cells.map((cell) => `${cell.x}:${cell.y}`));
  const style = `--base:${piece.base};--accent:${piece.accent};--shape-cols:${bounds.w};--shape-rows:${bounds.h}`;
  const activeCells = [];
  for (let y = 0; y < bounds.h; y += 1) {
    for (let x = 0; x < bounds.w; x += 1) {
      if (!cellSet.has(`${x}:${y}`)) {
        activeCells.push(`<span class="shape-cell empty"></span>`);
      } else if (piece.set) {
        const cellNumber = activeCells.filter((cell) => !cell.includes(" empty")).length + 1;
        activeCells.push(`<span class="shape-cell spine"><span class="spine-title">${title}</span>${piece.kind.includes("Comic") ? `<span class="portrait-dot"></span>` : ""}<span class="spine-num">${cellNumber}</span></span>`);
      } else if (piece.kind === "magazine") {
        activeCells.push(`<span class="shape-cell magazine-cell"><span class="magazine-title">${title}</span><span class="magazine-date">2026</span></span>`);
      } else {
        activeCells.push(`<span class="shape-cell single-cell"><span class="single-title">${title}</span><span class="single-band"></span></span>`);
      }
    }
  }
  const textColor = piece.kind === "bunko" || piece.kind === "tankobon" ? "#213018" : "#f7d76d";
  return `<div class="book-face shape-face kind-${piece.kind}" style="${style};--text:${textColor};--paper-color:${piece.accent}">${activeCells.join("")}</div>`;
}
function renderGoodsPreview() {
  goodsPreview.innerHTML = pieces.map((piece, index) => `<div class="preview-book" style="animation-delay:${index * 0.035}s">${renderBookFace(piece)}</div>`).join("");
}
function renderBoxOptions() {
  boxOptions.innerHTML = Object.entries(boxConfigs).map(([size, box]) => `
    <button class="box-option" type="button" data-box="${size}">
      <span class="box-icon">${size}</span>
      <span><strong>${box.label}</strong><span>送料：${yen(box.shippingCost)} / 難易度：${box.difficulty}</span></span>
      <span class="primary-button">これで行く</span>
    </button>`).join("");
  boxOptions.querySelectorAll("[data-box]").forEach((button) => button.addEventListener("click", () => startCountdown(button.dataset.box)));
}
function updateHud() {
  const box = boxConfigs[currentBoxSize];
  document.getElementById("timeLeft").textContent = timeLeft;
  document.getElementById("remainingCount").textContent = remainingPieces().length;
  document.getElementById("currentBoxLabel").textContent = currentBoxSize;
  document.getElementById("boxName").textContent = box.label;
  document.getElementById("timeCard").classList.toggle("warning", timeLeft <= 10 && !gameEnded);
  document.getElementById("gameScreen").classList.toggle("last-book", remainingPieces().length === 1 && !gameEnded);
  updatePickupMeter();
}
function updatePickupMeter() {
  if (!pickupRoad || !pickupTruck || !pickupSpeech) return;
  const roadWidth = pickupRoad.clientWidth;
  const truckWidth = pickupTruck.offsetWidth || 52;
  const startX = Math.max(56, roadWidth - truckWidth - 4);
  const endX = 38;
  const progress = 1 - Math.max(0, Math.min(timeLeft, gameConfig.timeLimit)) / gameConfig.timeLimit;
  pickupTruck.style.left = `${startX + (endX - startX) * progress}px`;
  let speech = "";
  if (!gameEnded) {
    if (timeLeft <= 3) speech = "ピンポーン";
    else if (timeLeft <= 10) speech = "荷物おあずかりにきました〜";
    else if (timeLeft <= 20) speech = "こんにちは〜集荷で〜す！";
  }
  pickupSpeech.textContent = speech;
  pickupSpeech.classList.toggle("show", !!speech);
}
function renderExchangeButtons() {
  exchangeButtons.innerHTML = ["120", "140"].map((size) => `<button type="button" data-exchange="${size}" ${Number(size) <= Number(currentBoxSize) ? "disabled" : ""}>${size}へ交換</button>`).join("");
  exchangeButtons.querySelectorAll("[data-exchange]").forEach((button) => button.addEventListener("click", () => exchangeBox(button.dataset.exchange)));
}
function renderBoard() {
  const box = boxConfigs[currentBoxSize];
  boxBoard.style.setProperty("--cols", box.cols);
  boxBoard.style.setProperty("--rows", box.rows);
  boxBoard.innerHTML = "";
  pieces.filter((piece) => piece.placed).forEach((piece) => {
    const size = getPieceSize(piece);
    const node = document.createElement("div");
    node.className = "piece placed-piece";
    node.dataset.pieceId = piece.id;
    node.style.setProperty("--x", piece.x);
    node.style.setProperty("--y", piece.y);
    node.style.setProperty("--w", size.w);
    node.style.setProperty("--h", size.h);
    node.innerHTML = renderBookFace(piece);
    node.addEventListener("pointerdown", startDrag);
    boxBoard.appendChild(node);
  });
}
function renderTray() {
  pieceTray.innerHTML = "";
  remainingPieces().forEach((piece) => {
    const size = getPieceSize(piece);
    const node = document.createElement("div");
    node.className = `piece tray-piece ${selectedPieceId === piece.id ? "selected" : ""}`;
    node.dataset.pieceId = piece.id;
    node.innerHTML = `<span class="mini-shape">${renderBookFace(piece)}</span><span><span class="piece-name">${escapeHtml(piece.name)}</span><span class="piece-size">${size.w} x ${size.h} / ${escapeHtml(piece.title)}</span></span>`;
    node.addEventListener("click", () => selectPiece(piece.id));
    node.addEventListener("pointerdown", startDrag);
    pieceTray.appendChild(node);
  });
}

function renderGame() {
  renderBoard();
  renderTray();
  renderExchangeButtons();
  updateHud();
  checkLastBookMoment();
  updateRotationControls();
}
function selectPiece(pieceId) {
  selectedPieceId = pieceId;
  renderTray();
  updateRotationControls();
}
function rotatePiece(piece, direction) {
  piece.rotation = ((piece.rotation || 0) + direction + 4) % 4;
}
function rotateSelectedPiece() {
  if (!selectedPieceId || gameEnded) return;
  const piece = getPiece(selectedPieceId);
  if (!piece || piece.placed) return;
  rotatePiece(piece, 1);
  stageMessage.textContent = `${piece.name}を右回転`;
  soundSnap();
  renderTray();
  requestAnimationFrame(updateRotationControls);
}
function getBoardMetrics() {
  const rect = boxBoard.getBoundingClientRect();
  const box = boxConfigs[currentBoxSize];
  const left = rect.left + boxBoard.clientLeft;
  const top = rect.top + boxBoard.clientTop;
  return { left, top, right: left + boxBoard.clientWidth, bottom: top + boxBoard.clientHeight, cellW: boxBoard.clientWidth / box.cols, cellH: boxBoard.clientHeight / box.rows };
}
function getGridFromPointer(event, piece) {
  const metrics = getBoardMetrics();
  const size = getPieceSize(piece);
  return { x: Math.round((event.clientX - metrics.left) / metrics.cellW - size.w / 2), y: Math.round((event.clientY - metrics.top) / metrics.cellH - size.h / 2) };
}
function isPointerInsideBoard(event) {
  const metrics = getBoardMetrics();
  return event.clientX >= metrics.left && event.clientX <= metrics.right && event.clientY >= metrics.top && event.clientY <= metrics.bottom;
}
function canPlace(piece, x, y) {
  const box = boxConfigs[currentBoxSize];
  const cells = getPieceCells(piece);
  const size = getCellBounds(cells);
  if (x < 0 || y < 0 || x + size.w > box.cols || y + size.h > box.rows) return false;
  const occupied = new Set();
  pieces.forEach((other) => {
    if (!other.placed || other.id === piece.id) return;
    getPieceCells(other).forEach((cell) => occupied.add(`${other.x + cell.x}:${other.y + cell.y}`));
  });
  return cells.every((cell) => !occupied.has(`${x + cell.x}:${y + cell.y}`));
}
function findNearestPlacement(piece, x, y) {
  if (canPlace(piece, x, y)) return { x, y };
  const candidates = [];
  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) candidates.push({ x: x + dx, y: y + dy, distance: Math.abs(dx) + Math.abs(dy) });
  }
  candidates.sort((a, b) => a.distance - b.distance || a.y - b.y || a.x - b.x);
  for (const candidate of candidates) if (canPlace(piece, candidate.x, candidate.y)) return { x: candidate.x, y: candidate.y };
  return null;
}
function clampGridPosition(piece, x, y) {
  const box = boxConfigs[currentBoxSize];
  const size = getPieceSize(piece);
  return { x: Math.min(Math.max(x, 0), box.cols - size.w), y: Math.min(Math.max(y, 0), box.rows - size.h) };
}
function syncDragGhostSize(piece) {
  const metrics = getBoardMetrics();
  const size = getPieceSize(piece);
  dragGhost.style.width = `${size.w * metrics.cellW}px`;
  dragGhost.style.height = `${size.h * metrics.cellH}px`;
}
function hideRotationControls() {
  rotationControls.classList.remove("show");
  rotationControls.setAttribute("aria-hidden", "true");
}
function clearRotationWait() {
  if (!rotationWaitTimer) return;
  clearTimeout(rotationWaitTimer);
  rotationWaitTimer = null;
}
function returnPieceToDesk(piece, message = "机へ戻した") {
  piece.placed = false;
  piece.x = null;
  piece.y = null;
  selectedPieceId = piece.id;
  stageMessage.textContent = message;
  renderGame();
}
function returnActiveDragOutsideBox() {
  if (!dragState) return;
  const { piece } = dragState;
  window.removeEventListener("pointermove", moveDragGhost);
  dragGhost.className = "drag-ghost";
  dragState = null;
  lastDragEvent = null;
  clearRotationWait();
  hideRotationControls();
  returnPieceToDesk(piece, "はみ出した本を机へ戻した");
}
function startRotationWaitIfInvalid(placement) {
  if (!dragState || !dragState.waitingForRotationFit) return;
  if (placement) {
    dragState.waitingForRotationFit = false;
    clearRotationWait();
    return;
  }
  if (rotationWaitTimer) return;
  stageMessage.textContent = "少しはみ出している…";
  rotationWaitTimer = setTimeout(() => {
    rotationWaitTimer = null;
    if (!dragState || dragState.currentPlacement) return;
    returnActiveDragOutsideBox();
  }, 2000);
}
function updateRotationControls() {
  if (gameEnded) return hideRotationControls();
  const activePiece = dragState?.piece || getPiece(selectedPieceId);
  if (!activePiece) return hideRotationControls();
  let rect = null;
  if (dragState && dragGhost.classList.contains("show")) rect = dragGhost.getBoundingClientRect();
  else if (activePiece.placed) rect = boxBoard.querySelector(`[data-piece-id="${activePiece.id}"]`)?.getBoundingClientRect();
  else rect = pieceTray.querySelector(`[data-piece-id="${activePiece.id}"]`)?.getBoundingClientRect();
  if (!rect || rect.width <= 0 || rect.height <= 0) return hideRotationControls();
  const buttonSize = 48;
  const edgeGap = 6;
  const leftX = Math.max(edgeGap, Math.min(rect.left - buttonSize - 10, window.innerWidth - buttonSize - edgeGap));
  const rightX = Math.max(edgeGap, Math.min(rect.right + 10, window.innerWidth - buttonSize - edgeGap));
  const buttonY = Math.max(edgeGap, Math.min(rect.top + rect.height / 2 - buttonSize / 2, window.innerHeight - buttonSize - edgeGap));
  rotationControls.style.setProperty("--left-button-x", `${leftX}px`);
  rotationControls.style.setProperty("--right-button-x", `${rightX}px`);
  rotationControls.style.setProperty("--button-y", `${buttonY}px`);
  rotationControls.classList.add("show");
  rotationControls.setAttribute("aria-hidden", "false");
}
function rotateActivePiece(direction) {
  if (gameEnded) return;
  const piece = dragState?.piece || getPiece(selectedPieceId);
  if (!piece) return;
  if (!piece.placed && !dragState) {
    rotatePiece(piece, direction);
    stageMessage.textContent = direction > 0 ? `${piece.name}を右回転` : `${piece.name}を左回転`;
    soundSnap();
    renderTray();
    requestAnimationFrame(updateRotationControls);
    return;
  }
  const beforeRotation = piece.rotation || 0;
  const beforeX = piece.x;
  const beforeY = piece.y;
  rotatePiece(piece, direction);
  if (dragState) {
    dragState.waitingForRotationFit = true;
    const size = getPieceSize(piece);
    dragGhost.style.setProperty("--w", size.w);
    dragGhost.style.setProperty("--h", size.h);
    dragGhost.innerHTML = renderBookFace(piece);
    syncDragGhostSize(piece);
    if (lastDragEvent) moveDragGhost(lastDragEvent);
    if (dragState.currentPlacement) stageMessage.textContent = direction > 0 ? "右回転！" : "左回転！";
    soundSnap();
    updateRotationControls();
    return;
  }
  const clamped = clampGridPosition(piece, piece.x, piece.y);
  const placement = findNearestPlacement(piece, clamped.x, clamped.y);
  if (placement) {
    piece.x = placement.x;
    piece.y = placement.y;
    stageMessage.textContent = direction > 0 ? "右回転！" : "左回転！";
    soundSnap();
    renderGame();
    return;
  }
  piece.rotation = beforeRotation;
  piece.x = beforeX;
  piece.y = beforeY;
  stageMessage.textContent = "ここでは回せない！";
  playTone(150, 0.12, "sawtooth", 0, 0.04);
  renderGame();
}
function placePiece(piece, x, y) {
  if (!canPlace(piece, x, y)) {
    stageMessage.textContent = "そこには入らない！";
    playTone(150, 0.12, "sawtooth", 0, 0.04);
    renderGame();
    return;
  }
  clearRotationWait();
  piece.placed = true;
  piece.x = x;
  piece.y = y;
  selectedPieceId = piece.id;
  stageMessage.textContent = "コトッ、カチッ！";
  soundDrop();
  soundSnap();
  renderGame();
  if (remainingPieces().length === 0) triggerCinderellaFit();
}
function startDrag(event) {
  if (gameEnded) return;
  const piece = getPiece(event.currentTarget.dataset.pieceId);
  if (!piece) return;
  event.preventDefault();
  clearRotationWait();
  selectPiece(piece.id);
  dragState = { piece, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false, currentPlacement: null, waitingForRotationFit: false };
  lastDragEvent = event;
  const size = getPieceSize(piece);
  dragGhost.className = "drag-ghost show";
  dragGhost.style.setProperty("--w", size.w);
  dragGhost.style.setProperty("--h", size.h);
  syncDragGhostSize(piece);
  dragGhost.innerHTML = renderBookFace(piece);
  moveDragGhost(event);
  window.addEventListener("pointermove", moveDragGhost);
  window.addEventListener("pointerup", finishDrag, { once: true });
  window.addEventListener("pointercancel", cancelDrag, { once: true });
}
function moveDragGhost(event) {
  if (!dragState) return;
  lastDragEvent = event;
  const { piece } = dragState;
  if (Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY) > 6) dragState.moved = true;
  if (isPointerInsideBoard(event)) {
    const metrics = getBoardMetrics();
    const grid = getGridFromPointer(event, piece);
    const clampedGrid = clampGridPosition(piece, grid.x, grid.y);
    const placement = findNearestPlacement(piece, clampedGrid.x, clampedGrid.y);
    dragState.currentPlacement = placement;
    const preview = placement || clampedGrid;
    dragGhost.className = `drag-ghost show snapped ${placement ? "" : "invalid"}`;
    syncDragGhostSize(piece);
    dragGhost.style.left = `${metrics.left + preview.x * metrics.cellW}px`;
    dragGhost.style.top = `${metrics.top + preview.y * metrics.cellH}px`;
    startRotationWaitIfInvalid(placement);
    updateRotationControls();
    return;
  }
  dragState.currentPlacement = null;
  dragGhost.className = "drag-ghost show";
  syncDragGhostSize(piece);
  dragGhost.style.left = `${event.clientX}px`;
  dragGhost.style.top = `${event.clientY}px`;
  startRotationWaitIfInvalid(null);
  updateRotationControls();
}
function finishDrag(event) {
  window.removeEventListener("pointermove", moveDragGhost);
  dragGhost.className = "drag-ghost";
  if (!dragState) return;
  const { piece } = dragState;
  if (piece.placed && !dragState.moved) {
    clearRotationWait();
    selectedPieceId = piece.id;
    dragState = null;
    lastDragEvent = null;
    renderGame();
    return;
  }
  if (isPointerInsideBoard(event)) {
    const grid = getGridFromPointer(event, piece);
    const clampedGrid = clampGridPosition(piece, grid.x, grid.y);
    const placement = findNearestPlacement(piece, clampedGrid.x, clampedGrid.y);
    if (placement) placePiece(piece, placement.x, placement.y);
    else if (piece.placed) returnPieceToDesk(piece, "はみ出した本を机へ戻した");
    else {
      stageMessage.textContent = "そこには入らない！";
      playTone(150, 0.12, "sawtooth", 0, 0.04);
      renderGame();
    }
  } else if (piece.placed) {
    returnPieceToDesk(piece, "はみ出した本を机へ戻した");
  }
  dragState = null;
  lastDragEvent = null;
  clearRotationWait();
  updateRotationControls();
}
function placeSelectedOnBoard(event) {
  if (gameEnded || dragState || event.target.closest(".placed-piece") || !selectedPieceId) return;
  const piece = getPiece(selectedPieceId);
  if (!piece || piece.placed) return;
  const grid = getGridFromPointer(event, piece);
  const clampedGrid = clampGridPosition(piece, grid.x, grid.y);
  const placement = findNearestPlacement(piece, clampedGrid.x, clampedGrid.y);
  if (placement) placePiece(piece, placement.x, placement.y);
  else {
    stageMessage.textContent = "そこには入らない！";
    playTone(150, 0.12, "sawtooth", 0, 0.04);
  }
}
function cancelDrag() {
  window.removeEventListener("pointermove", moveDragGhost);
  dragGhost.className = "drag-ghost";
  dragState = null;
  lastDragEvent = null;
  clearRotationWait();
  updateRotationControls();
}

function exchangeBox(nextSize) {
  if (gameEnded || Number(nextSize) <= Number(currentBoxSize)) return;
  currentBoxSize = nextSize;
  clearRotationWait();
  hideRotationControls();
  boxBoard.classList.remove("exchanging");
  void boxBoard.offsetWidth;
  boxBoard.classList.add("exchanging");
  pieces.forEach((piece) => {
    piece.placed = false;
    piece.x = null;
    piece.y = null;
  });
  selectedPieceId = null;
  stageMessage.textContent = `${boxConfigs[nextSize].label}へ箱交換！商品は机へ戻った`;
  renderGame();
  setTimeout(() => boxBoard.classList.remove("exchanging"), 450);
}
function checkLastBookMoment() {
  const rest = remainingPieces().length;
  if (rest === 1 && !hasShownLastBook && !gameEnded) {
    hasShownLastBook = true;
    stageMessage.textContent = "LAST BOOK";
    playTone(420, 0.2, "triangle", 0, 0.04);
  }
}
function burstConfetti() {
  confettiLayer.innerHTML = "";
  const colors = ["#ffd84f", "#e64b3c", "#2877c9", "#30a66a", "#fffaf0"];
  for (let index = 0; index < 58; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = colors[index % colors.length];
    confetti.style.animationDelay = `${Math.random() * 0.18}s`;
    confettiLayer.appendChild(confetti);
  }
}
function showSuccessDeliveryPrep() {
  deliveryScene.innerHTML = `
    <div>
      <div class="ship-box">
        <div class="tape-strip"></div>
        <div class="shipping-label"></div>
      </div>
      <div class="sparkle"></div><div class="sparkle"></div><div class="sparkle"></div>
      <p class="delivery-title">納品準備完了！</p>
    </div>`;
  showScreen("deliveryScreen");
  playTone(520, 0.13, "triangle", 0.1, 0.045);
  playTone(760, 0.13, "triangle", 1.1, 0.045);
  playTone(980, 0.18, "triangle", 1.75, 0.055);
  setTimeout(burstConfetti, 1750);
  setTimeout(showSuccessTruckDeparture, 3000);
}
function showSuccessTruckDeparture() {
  deliveryScene.innerHTML = `
    <div class="truck-road success-road">
      <div class="courier-truck">
        <div class="courier-bubble">またお願いしま〜す！</div>
        <div class="truck-cargo"></div>
        <div class="truck-cab">
          <div class="courier-face">
            <span class="courier-cap"></span>
            <span class="courier-smile"></span>
          </div>
          <div class="courier-arm"></div>
        </div>
        <div class="truck-wheel wheel-left"></div>
        <div class="truck-wheel wheel-right"></div>
        <div class="speed-lines"></div>
      </div>
    </div>`;
  showScreen("deliveryScreen");
  playTone(620, 0.1, "triangle", 0, 0.04);
  setTimeout(() => finishGame(true), 2300);
}
function showFailureDeparture() {
  deliveryScene.innerHTML = `
    <div class="truck-road failure-road">
      <div class="failure-center-message">集荷が行ってしまった…</div>
      <div class="depart-truck">🚚💨</div>
    </div>`;
  showScreen("deliveryScreen");
  playTone(180, 0.22, "sawtooth", 0, 0.035);
  setTimeout(() => finishGame(false), 2300);
}
function triggerCinderellaFit() {
  gameEnded = true;
  hideRotationControls();
  clearInterval(timerId);
  stageMessage.textContent = "スッ… カチッ！";
  document.body.classList.add("screen-shake");
  burstConfetti();
  [523, 659, 784, 1046, 1318].forEach((tone, index) => playTone(tone, 0.13, "triangle", index * 0.09, 0.065));
  setTimeout(() => {
    document.body.classList.remove("screen-shake");
    document.getElementById("bigMessage").textContent = "✨✨✨\n入った〜！！\n✨✨✨";
    showScreen("messageScreen");
  }, 380);
  setTimeout(showSuccessDeliveryPrep, 1700);
}
function createGameResultData(success) {
  const shippingCost = boxConfigs[currentBoxSize].shippingCost;
  const savedShipping = boxConfigs["140"].shippingCost - shippingCost;
  const score = success ? 5000 + timeLeft * 100 + savedShipping * 5 : Math.max(0, pieces.filter((piece) => piece.placed).length * 180);
  return { gameId: gameConfig.gameId, success, boxSize: currentBoxSize, shippingCost, savedShipping, remainingTime: Math.max(0, timeLeft), score };
}
function saveGameResultData(success) {
  latestGameResult = createGameResultData(success);
  window.fbaPackingPuzzleResult = latestGameResult;
  window.dispatchEvent(new CustomEvent("fba-packing-puzzle:finished", { detail: latestGameResult }));
  if (window.parent && window.parent !== window) window.parent.postMessage({ type: "fba-packing-puzzle:finished", payload: latestGameResult }, "*");
}
function finishGame(success) {
  saveGameResultData(success);
  showResult(success);
}
function showResult(success) {
  const result = latestGameResult;
  document.getElementById("resultTitle").textContent = success ? "発送完了！" : "次は決めるぞ！";
  document.getElementById("resultStory").textContent = success
    ? "納品準備完了！ またお願いしま〜す！"
    : "集荷が行ってしまった……次は100サイズで決めるぞ！";
  document.getElementById("resultBox").textContent = boxConfigs[result.boxSize].label;
  document.getElementById("resultCost").textContent = yen(result.shippingCost);
  document.getElementById("resultSaved").textContent = yen(result.savedShipping);
  document.getElementById("resultTime").textContent = `${result.remainingTime}秒`;
  document.getElementById("resultScore").textContent = result.score.toLocaleString("ja-JP");
  showScreen("resultScreen");
}
function shareOnX() {
  const result = latestGameResult;
  if (!result) return;
  const status = result.success ? "入った〜！！納品準備完了！" : "集荷が行ってしまった…次は決めるぞ！";
  const text = [
    `FBA納品パズル：${status}`,
    `箱サイズ：${boxConfigs[result.boxSize].label}`,
    `残り時間：${result.remainingTime}秒`,
    `スコア：${result.score.toLocaleString("ja-JP")}`,
    "#FBA納品パズル"
  ].join("\n");
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(shareUrl, "_blank", "noopener,noreferrer");
}
function clearIntroTimers() {
  introTimers.forEach((timer) => {
    clearTimeout(timer);
    clearInterval(timer);
  });
  introTimers = [];
}
function resetRound() {
  clearInterval(timerId);
  clearIntroTimers();
  choosePuzzle();
  selectedPieceId = null;
  currentBoxSize = "100";
  timeLeft = gameConfig.timeLimit;
  gameEnded = false;
  dragState = null;
  lastDragEvent = null;
  clearRotationWait();
  lastTickSecond = null;
  hasShownLastBook = false;
  stageMessage.textContent = "";
  confettiLayer.innerHTML = "";
  deliveryScene.innerHTML = "";
  if (pickupSpeech) {
    pickupSpeech.textContent = "";
    pickupSpeech.classList.remove("show");
  }
  hideRotationControls();
  document.getElementById("gameScreen").classList.remove("last-book");
}
function flashIntroText(node, text) {
  node.textContent = text;
  node.classList.remove("intro-line", "intro-countdown");
  void node.offsetWidth;
  node.classList.add(node === introCountdown ? "intro-countdown" : "intro-line");
}
function startIntroFlow() {
  resetRound();
  introLine.textContent = "今日はFBA納品をするぞ！";
  introCountdown.textContent = "";
  showScreen("introScreen");
  ensureAudioContext();
  playTone(520, 0.1, "triangle", 0, 0.035);
  introTimers.push(setTimeout(() => {
    flashIntroText(introLine, "集荷が来る前に、ダンボールを完成させなきゃ！");
    playTone(620, 0.1, "triangle", 0, 0.035);
  }, 1500));
  introTimers.push(setTimeout(() => {
    renderGoodsPreview();
    showScreen("goodsScreen");
    soundDrop();
  }, 3200));
}
function startCountdown(boxSize) {
  currentBoxSize = boxSize || currentBoxSize;
  timeLeft = gameConfig.timeLimit;
  gameEnded = false;
  hasShownLastBook = false;
  showScreen("countdownScreen");
  const sequence = ["3", "2", "1", "START！！"];
  let index = 0;
  const countdownNumber = document.getElementById("countdownNumber");
  countdownNumber.textContent = sequence[index];
  ensureAudioContext();
  playTone(520, 0.08, "sine", 0, 0.035);
  const countdownId = setInterval(() => {
    index += 1;
    countdownNumber.textContent = sequence[index];
    countdownNumber.classList.remove("countdown-number");
    void countdownNumber.offsetWidth;
    countdownNumber.classList.add("countdown-number");
    playTone(index === 3 ? 880 : 520 + index * 120, 0.08, "sine", 0, 0.035);
    if (index === sequence.length - 1) {
      clearInterval(countdownId);
      setTimeout(startGame, 850);
    }
  }, 900);
}
function startGame() {
  showScreen("gameScreen");
  renderGame();
  timerId = setInterval(() => {
    if (gameEnded) return;
    timeLeft -= 1;
    if (timeLeft === 20) {
      stageMessage.textContent = "ヤマトさんが近づいてきた！";
      playTone(620, 0.08, "triangle", 0, 0.035);
    } else if (timeLeft === 10) {
      stageMessage.textContent = "荷物おあずかりにきました〜";
      playTone(740, 0.08, "triangle", 0, 0.04);
    } else if (timeLeft === 3) {
      stageMessage.textContent = "ピンポーン♪";
      playTone(880, 0.09, "sine", 0, 0.045);
      playTone(1180, 0.11, "sine", 0.09, 0.045);
    } else if (timeLeft <= 10 && timeLeft > 0 && lastTickSecond !== timeLeft) {
      lastTickSecond = timeLeft;
      playTone(880, 0.045, "square", 0, 0.025);
    }
    updateHud();
    if (timeLeft <= 0) {
      gameEnded = true;
      hideRotationControls();
      clearInterval(timerId);
      showFailureDeparture();
    }
  }, 1000);
}
function startGoodsFlow() {
  resetRound();
  renderGoodsPreview();
  showScreen("goodsScreen");
  soundDrop();
}
function bindEvents() {
  document.getElementById("startButton").addEventListener("click", startIntroFlow);
  document.getElementById("tutorialButton").addEventListener("click", () => showScreen("tutorialScreen"));
  document.getElementById("tutorialStartButton").addEventListener("click", startIntroFlow);
  document.getElementById("tutorialBackButton").addEventListener("click", () => showScreen("titleScreen"));
  document.getElementById("toBoxButton").addEventListener("click", () => {
    renderBoxOptions();
    showScreen("boxScreen");
  });
  document.getElementById("rotateButton").addEventListener("click", rotateSelectedPiece);
  rotationControls.querySelectorAll("[data-rotate-dir]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      rotateActivePiece(Number(button.dataset.rotateDir));
    });
  });
  boxBoard.addEventListener("click", placeSelectedOnBoard);
  document.getElementById("retryButton").addEventListener("click", startGoodsFlow);
  document.getElementById("shareXButton").addEventListener("click", shareOnX);
  window.addEventListener("resize", () => {
    updateRotationControls();
    updatePickupMeter();
  });
  window.addEventListener("scroll", updateRotationControls, true);
}

choosePuzzle();
renderBoxOptions();
bindEvents();

window.FbaPackingPuzzle = {
  getLatestResult() {
    return latestGameResult;
  }
};
