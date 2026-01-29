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

    //削除対象を特定できるようにするため、index付きで回す
    names.forEach((name, index) => {
        const li = document.createElement("li");

        //名前表示
        const span = document.createElement("span");
        span.textContent = name;

        //削除ボタン
        const delBtn = document.createElement("button");
        delBtn.textContent = "削除";
        delBtn.classList.add("deleteBtn");

        //削除ボタンをクリックするとそのindexを削除する
        delBtn.addEventListener("click", () => {
            names.splice(index, 1);
            render();
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });

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