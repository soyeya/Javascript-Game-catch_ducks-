let letter = document.querySelector(".title");
const move_ducks = document.querySelectorAll(".duck");
const gameBtn = document.querySelector(".gameBtn");
const duckBack = document.querySelector(".duckGrop");

//header 

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




let preNum;
let duckNum = move_ducks.length;

function startGame(){
    

    preNum = Math.floor(Math.random() * 10);
    console.log(move_ducks[preNum]);
    
}

startGame();




//CatchDucks

function catchDucks(){

    move_ducks[0].addEventListener("click" , () => {
    
    
        move_ducks[0].classList.add("click");
    
        setTimeout( () => {
            
         move_ducks[0].classList.remove("click");
    
        },800)
    
    })
};



gameBtn.addEventListener("click" , () => {

    catchDucks();
    gameBtn.classList.add("start");
    duckBack.classList.add("start");
    
    setTimeout(() => {

        duckBack.classList.remove("start");

    },500);

})
