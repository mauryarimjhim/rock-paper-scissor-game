let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice =()=>{
   const options=["rock","paper","scissors"];
   const randindx=Math.floor(Math.random()*3);
   return options[randindx];
}

const draw =()=>{
    console.log("game was draw");
    msg.innerText="DRAW";
    msg.style.backgroundColor=" #081b31";
}

const showwinner=(userWin,userchoice,compchoice)=>{
    if(userWin==true){
        userscore++;
        userscorepara.innerText=userscore;
    console.log("You win");
    msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    }
else{
    compscore++;
    compscorepara.innerText=compscore;
console.log("you loose");
msg.innerText=`YOU LOST. ${compchoice} beats your ${userchoice}`;
msg.style.backgroundColor="red";
}
}

const playgame   =(userchoice)=>{
console.log("user choice=", userchoice);
const compchoice=genCompChoice();
console.log("COMP choice=", compchoice);

 if (userchoice==compchoice)
    draw();
else {
    let userWin=true;
    if(userchoice=="rock")
    {
        //comp choice=scissor ya toh paper 
       userWin= compchoice=="paper"?false:true;
    }
    else if(userchoice=="paper")
    {
        userWin=compchoice=="scissors"?false:true;
    }
    else{
        //user ka pass aab bas scissors hai 
        userWin=compchoice=="rock"?false:true;
    }
    showwinner(userWin,userchoice,compchoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playgame(userchoice);
    });
});