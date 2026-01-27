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

//やりたいことリストのjavascript
//要素取得

const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

//yやりたいことリストの処理
//文字入力受付
addTodoBtn.addEventListener("click", () => {
    const text = todoInput.value;

    if(text === "") {
        return;
    }

//li作成
const li = document.createElement("li");
li.textContent = text;

//削除ボタン作成
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "削除";
deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click", () => {
    li.remove();
});

li.appendChild(deleteBtn);
todoList.appendChild(li);

todoInput.value = "";

});