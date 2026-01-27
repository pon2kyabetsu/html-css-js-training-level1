//要素取得
const toggleThemeBtn = document.getElementById("toggleTheme");
const toggleIntroBtn = document.getElementById("toggleIntro");
const showDateBtn = document.getElementById("showDate");

const intro = document.getElementById("intro");
const dateArea = document.getElementById("dateArea");

//ダークモード切替
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//自己紹介文　表示/非表示
toggleIntroBtn.addEventListener("click", () => {
    intro.classList.toggle("hidden");
});

//今日の日付を表示
showDateBtn.addEventListener("click", () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");

    dateArea.textContent = `今日の日付：${y}/${m}/${d}`;
});