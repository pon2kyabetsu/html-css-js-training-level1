//要素取得
const nameInput = document.getElementById("nameInput");
const showBtn = document.getElementById("showBtn");
const result = document.getElementById("result");

showBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        result.textContent = "名前を入力してね！";
        return;
    }


    result.textContent = `こんにちは、${name}さん！`;
});