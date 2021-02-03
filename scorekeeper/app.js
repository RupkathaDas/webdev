const playerone=document.querySelector('#one');
const playertwo=document.querySelector('#two');
const reset=document.querySelector('#reset');
const play=document.querySelector('#playto');


let p1score=0;
let p2score=0;
let winscore=5;
let gameover=false;
const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');


playerone.addEventListener('click', function() {
    if(!gameover) {
        p1score+=1;
        if(p1score === winscore) {
            gameover=true;
            p1.classList.add('winner');
            p2.classList.add('loser');
        
        }
        p1.textContent=p1score;
    }       

    

})

playertwo.addEventListener('click', function() {
    if(!gameover) {
        p2score+=1;
        if(p2score === winscore) {
            gameover=true;
            p2.classList.add('winner');
            p1.classList.add('loser');
            
        }
        p2.textContent=p2score;
    }       

})

play.addEventListener('change',function() {
    winscore=parseInt(this.value);
    gameover=false;
    p1score=0;
    p2score=0;
    p1.textContent=0;
    p2.textContent=0;


})

reset.addEventListener('click', function() {
    gameover=false;
    p1score=0;
    p2score=0;
    p1.textContent=0;
    p2.textContent=0;
    p1.classList.remove('winner');
    p2.classList.remove('loser');
    p2.classList.remove('winner');
    p1.classList.remove('loser');
})




