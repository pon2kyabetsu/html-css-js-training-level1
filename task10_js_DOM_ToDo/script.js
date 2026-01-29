const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const statusText = document.getElementById("status");

//TODoは「文字列」ではなくオブジェクトで管理する
//例：{ text: "牛乳を買う", done: true}
const todos = [];

function render() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

    //完了チェック
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", () => {
        todo.done = checkbox.checked; //状態を更新
        render(); //見た目に反映
    });

    //テキスト
    const span = document.createElement("span");
    span.textContent = todo.text
    span.classList.add("todo-text");
    if (todo.done) {
        span.classList.add("done");
    }

    //削除ボタン
    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.classList.add("deleteBtn");

    delBtn.addEventListener("click", () => {
        todos.splice(index,1);
        render();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
});

    const doneCount = todos.filter(t => t.done).length;
    statusText.textContent = `合計：${todos.length} / 完了：${doneCount}`
}

addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();

    if (text === "") {
        statusText.textContent = "ToDoを入力してね！";
        return;
    }

    todos.push({ text, done: false});
    todoInput.value = "";
    todoInput.focus();
    render();
});

clearBtn.addEventListener("click", () => {
    todos.length = 0;
    render();
});

render();