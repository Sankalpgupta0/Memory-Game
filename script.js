
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const RandNum = Array.from({ length: 16 }, (_, index) => index + 1);
shuffleArray(RandNum);



var s, e;
function swap() {
  for (var i = 0; i < 16; i++) {
    s = "box" + (i + 1);
    e = "box" + RandNum[i];
    if (s == e) {
      continue;
    } else {
      const box = document.querySelector(`.${s}`);
      box.classList.add(`${e}`);
      box.classList.remove(`${s}`);
    }
  }
}
swap();



const game = document.querySelector(".game");

let select1;
let select2;
let count = 0;
let box1;
const mySet = new Set();
let imageCount = 0; 

const win = document.querySelector(".win");
game.addEventListener("click", function (event) {
    
    const clickedBox = event.target;
  if (clickedBox.classList.contains("container") == true) {
      const classes = clickedBox.className.split(" ");
      for (const className of classes) {


        if (className.startsWith("box")) {
          mySet.add(className);
          

        if(clickedBox.classList.contains("coke") == true){
            clickedBox.classList.remove("coke");
            imageCount++;
            if(mySet.size == 16 && imageCount == 16){
                win.style.opacity = 1;
                win.style.zIndex = 1;
                setInterval(() => {
                    location.reload();
                }, 2000);
            }
        }
        

        let boxNumber = className.replace("box", "");
        let actual;
        if(boxNumber > 8){
            actual = boxNumber;
            boxNumber -= 8;
        } else{
            actual = boxNumber;
        }

        if(count == 0) {
            select1 = boxNumber;
            box1 = clickedBox;
        }
        else if(count == 1) {
            select2 = boxNumber
            count = -1;
           
            setTimeout(() => {
                if(select1 != select2){
                    clickedBox.classList.add("coke");
                    box1.classList.add("coke");
                    imageCount -=2;
                }
            }, 200);
        }
        count++;
      }
    }
  }
});

