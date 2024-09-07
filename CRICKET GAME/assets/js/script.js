                        // THIS IS CODE OF BAT...START......

let bat = document.getElementById('bat')
bat.addEventListener('click' , function(){
    let randomNumber = Math.random() * 3;
    let computerchoice;
    if (randomNumber > 0 && randomNumber <= 1) {
         computerchoice = 'Bat';

    } else if(randomNumber > 1 && randomNumber <= 2) {
         computerchoice = 'Ball';

    }else {
         computerchoice = 'Stump'
    }
    let resultMsg;
    if (computerchoice === 'Ball') {
        resultMsg =('User Won..🏆🥇')
    }else if (computerchoice === 'Bat'){
        resultMsg = (`It's a Tie❌`)
    }else if(computerchoice === 'Stump'){
        resultMsg = ('Computer Has Won..👎')
    }
    Swal.fire(`You Have Chosen Bat..  Computer Chosen is ${computerchoice}..  ${resultMsg}`);
})
                              // END....

        //   THIS IS CODE OF BALL..... START.....
 
let ball = document.getElementById('ball')
ball.addEventListener('click' , function(){
    let randomNumber = Math.random() * 3;
    let computerchoice;
    if (randomNumber > 0 && randomNumber <= 1) {
         computerchoice = 'Bat';

    } else if(randomNumber > 1 && randomNumber <= 2) {
         computerchoice = 'Ball';

    }else {
         computerchoice = 'Stump'
    }
    let resultMsg;
    if (computerchoice === 'Ball') {
        resultMsg =(`It's a Tie❌`)
    }else if (computerchoice === 'Bat'){
        resultMsg = (`Computer Has Won..👎`)
    }else if(computerchoice === 'Stump'){
        resultMsg = ('User Has Won..🏆🥇')
    }
    Swal.fire(`You Have Chosen Ball..🏀  Computer Chosen is ${computerchoice}..  ${resultMsg}`);
    
})
                                          // END...... 
        //  THIS IS CODE OF STUMP......START......

let stamp = document.getElementById('stamp')
stamp.addEventListener('click' , function(){
    let randomNumber = Math.random() * 3;
    let computerchoice;
    if (randomNumber > 0 && randomNumber <= 1) {
         computerchoice = 'Bat';
    console.log("Computer Choice is Bat🏏");

    } else if(randomNumber > 1 && randomNumber <= 2) {
         computerchoice = 'Ball';

    }else {
         computerchoice = 'Stump'
    }
    let resultMsg;
    if (computerchoice === 'Ball') {
        resultMsg =(`Computer Has Won👎..`)
    }else if (computerchoice === 'Bat'){
        resultMsg = (`User Has Won...🥇🏆..`)
    }else if(computerchoice === 'Stump'){
        resultMsg = (`It's a Tie..❌`)
    }
    Swal.fire(`You Have Chosen Stump    ..|||  Computer Chosen is ${computerchoice}..  ${resultMsg}`);
    
})
                            // END.......
// THE CODE OF SCORE......

let score = {
    Win: 0 ,
    Lost: 0 ,
    Tie: 0,

}
