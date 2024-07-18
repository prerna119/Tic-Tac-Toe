
let btnRef = document.querySelectorAll(".btn-move");
let restartbtn = document.querySelector("#btn-restart");
let popupRef = document.querySelector(".popup");
let msgRef = document.querySelector("#message");
let NewGamebtn = document.querySelector("#btn-new-game"); 
let turnX = document.querySelector("#x-turn");
let turnO = document.querySelector("#o-turn");

turnX.classList.add("glow");
let winningPattern = [[0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8],
                      [0, 3, 6],
                      [1, 4, 7],
                      [2, 5, 8],
                      [0, 4, 8],
                      [2, 4, 6]];

let xturn = true;
let count = 0;

const winFunction = (character) => {
    setTimeout(() => {
        disableButtons();
        if (character === "X") {
            msgRef.innerHTML = "&#x1F38A; <br> Congratulations <br>'X' wins";
        }
        else {
            msgRef.innerHTML = "&#x1F38A; <br>Congratulations <br>  'O' wins";

        }
    }, 300);

};

const wincheaker = () => {
    for (let arr of winningPattern) {
        let ele1 = btnRef[arr[0]].innerText;
        let ele2 = btnRef[arr[1]].innerText;
        let ele3 = btnRef[arr[2]].innerText;

        if (ele1 != "" && ele2 != "" && ele3 != "") {
            if (ele1 === ele2 && ele2 === ele3) {
                console.log("winner",ele1);
                winFunction(ele1);
                break;
            }
        }
    }
};

const disableButtons = () => {
    btnRef.forEach((btn) => {
        btn.disabled = true;
    });
    popupRef.classList.remove("hide");
};

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xturn === true) {
            element.innerText = "X";
            xturn = false;
            turnO.classList.add("glow");
            turnX.classList.remove("glow");
        }
        else {
            element.innerText = "O";
            xturn = true;
            turnX.classList.add("glow");
            turnO.classList.remove("glow");
        }
        element.disabled = true;
        count++;
        if (count === 9) {
            drawFunction();
            return;
        }
        wincheaker();

    });
});

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F38A; <br>  it's a Draw";
}

NewGamebtn.addEventListener("click", () => {
    count = 0;
    xturn = true;
    turnX.classList.add("glow");
    turnO.classList.remove("glow");
    enableButtons();
});

const enableButtons = () => {
    btnRef.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
    popupRef.classList.add("hide");
};

restartbtn.addEventListener("click", () => {
    count = 0;
    xturn = true;
    turnX.classList.add("glow");
    turnO.classList.remove("glow");
    enableButtons();
});
