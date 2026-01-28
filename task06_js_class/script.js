//要素取得
const message = document.getElementById("message");
const toggleBtn = document.getElementById("toggleBtn");

//ボタンの表示・非表示を切り替える
toggleBtn.addEventListener("click", () => {
    message.classList.toggle("hidden");
});