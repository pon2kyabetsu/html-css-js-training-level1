//要素取得
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const statusText = document.getElementById("status");

const names = []; //これに名前をためる

function render() {
    //いったんリストを空にして、配列の中身で作りなおす
    list.innerHTML = "";

    for (const name of names) {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    }

    statusText.textContent = `現在の人数：${names.length}`;
}

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        statusText.textContent = "名前を入力してね！";
        return;
    }

    names.push(name);
    nameInput.value = "" //入力欄を空にする
    nameInput.focus(); //入力欄にカーソルを戻す
    render();
});

clearBtn.addEventListener("click", () => {
    names.length = 0; //配列を空にする
    render();
});

//初期表示
render();