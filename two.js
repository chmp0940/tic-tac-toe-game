let boxes = document.querySelectorAll(".box");
let reserBtn = document.querySelector("#reset");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector("#msg");
let Container = document.querySelector(".wincontainer");
let turnO = true;//assuming that O turns is first 
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            // box.classList.add("forO");
            
        }
        else {
            box.innerText = "X";
            turnO = true;
            // box.classList.add("forX");

        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
          
            gameDraw();
        }
    });
});
const resetGame = () => {
    turnO = true;
    enableBoxes();
    Container.classList.add("hide");
    count=0;
    // boxes.classList.remove("forO");
    // boxes.classList.remove("forX");
};

const gameDraw = () => {
    msg.innerText = `Game is drawn`;
    Container.classList.remove("hide");
    // boxes.classList.remove("forO");
    // boxes.classList.remove("forX");
    disableBoxes();
};


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    Container.classList.remove("hide");
    // boxes.classList.remove("forO");
    // boxes.classList.remove("forX");
    //    console.log(winner)
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        //for simplicity to understand this do comment of and check it 
        //   console.log(pattern[0],pattern[1],pattern[2]);
        //   console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        // us box ke andar jaana he and uska inner text nikal na he and check karna he use 

        if (pos1 != "" && pos2 != "" && pos3 != "")  // koi bhi elment usme se khlai nahi rahe isliye ye check karna chaiye

        {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is ", pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
reserBtn.addEventListener("click", resetGame);