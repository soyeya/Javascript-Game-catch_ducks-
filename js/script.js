let letter = document.querySelector(".title");
const move_ducks = document.querySelectorAll(".duck");
const gameBtn = document.querySelector(".gameBtn");
const duckBack = document.querySelector(".duckGrop");

//title

function letterBlings(){

    setInterval ( () => {

        letter.classList.remove("active"); 
        letter.classList.remove("color"); 

        setTimeout(() => {

            letter.classList.add("active"); 
            letter.classList.remove("color"); 

        },1000);

        setTimeout(() => {

            letter.classList.add("color"); 
            letter.classList.remove("active"); 
  
  
          },2000);


    },3000)
       

   
 }


letterBlings();



let randomNum;
let preNum;
var duckNum;


// 랜덤 숫자 형성 -> 겹치는 순서 없도록 구성

function randomHole(){
    

    randomNum = Math.floor(Math.random() * 10);

    if(preNum !== randomNum && randomNum > 0){

        preNum = randomNum;
        console.log(preNum);

        return randomNum

    } return randomHole();

    
}

// 게임 시작

gameBtn.addEventListener("click" , startDuck);

function startDuck(){

    gameBtn.removeEventListener("click" , startDuck);
    gameBtn.classList.add("start");
    getPoint = 0;
    turn = 0;
    setTimeout(showDuck , 1000);
    winImg.classList.remove("win");
}


// 오리 이미지 Opacity 
function duckShow(num) {

    num.classList.add("active");
    num.classList.remove("click");
    console.log(num);


}

function duckHide(num){

   num.classList.remove("active");
   num.classList.remove("click");

}


// 오리 나타내기

let duckCatch = 0;
let turn = 0;
let getPoint = 0;

function showDuck(){

    if(turn < 10){

        duckNum = document.getElementById(`${randomHole()}`);
        console.log(duckNum);
        duckShow(duckNum);
        duckNum.addEventListener("click" , catchDuck);
        duckCatch = setTimeout(seeDuck , 3000);
        turn++;
        gameBtn.textContent = 'Playing';
        gameBtn.classList.add("start");
        gameBtn.classList.remove("restart");

    }

    else{

        modalEvent();
        gameBtn.addEventListener("click" , startDuck);
        gameBtn.textContent = 'Restart';
        gameBtn.classList.add("restart");
        gameBtn.classList.remove("start");

    };

}

// 오리 이미지 나타낸 뒤 

function seeDuck(){

    duckNum.removeEventListener("click" , catchDuck);
    console.log(duckNum);
    
    duckHide(duckNum);
    console.log(duckNum);

    clearTimeout(duckCatch);
    setTimeout(showDuck , 1000);
};


// 오리를 잡았을 때

let contBox = document.getElementById("countDuck");

function catchDuck(){

    seeDuck();
    clearTimeout(duckCatch);
    duckNum.classList.add("click");
    getPoint++;
    contBox.innerHTML = getPoint;

}


// 오리를 잡은 횟수에 따른 이벤트 modal 

let endingBtn = document.getElementById("endingWrap");
let endingBox = document.querySelector(".endingBox");
let winImg = document.querySelector(".winImg");

endingBtn.addEventListener("click" , hideModal);

function modalEvent(){

    let point = (getPoint / 10) * 100;
    endingBtn.classList.add("active");

    if(point < 7){

        endingBox.innerHTML = "GAME OVER Your Score Is  " + point;

    }else{

        endingBox.innerHTML = "YOU WIN ! Your Score Is  " + point;
        winImg.classList.add("win");

    }



}

function hideModal(){

    endingBtn.classList.remove("active");

}