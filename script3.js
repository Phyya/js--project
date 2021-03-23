'use strict';
let clapper= new Audio("clap.wav");


// QUESTION DATA STRUCTURE
const questionsToDisplay = [{
    question: 'What is the largest country in the world?',
    answers: ['A. Russia', 'B. Canada', 'C. China', 'D. United States', 'A. Russia'],
    spliced: ['A. Russia', 'B. Canada', '', ''],
},

{
    question: "The world's fastest animal is the what?",
    answers: ['A. Lion', 'B. Cheetah', 'C. Antelope', 'D. Gazelle', 'B. Cheetah'],
    spliced: ['', 'B. Cheetah', 'C. Antelope', ''],
},

{
    question: 'Which of these fruits is NOT a berry?',
    answers: ['A. Blueberry', 'B. Banana', 'C. Concord Grape', 'D. Strawberry', 'C. Concord Grape'],
    spliced: ['', 'B. Banana', 'C. Concord Grape', ''],
},

{
    question: "What is a rabbit's abode called?",
    answers: ['A. Dray', 'B. Den', 'C. Nest', 'D. Burrow', 'D. Burrow',],
    spliced: ['A. Dray', '', '', 'D. Burrow'],
},

{
    question: 'What is the capital of Indonesia?',
    answers: ['A. Jakarta', 'B. Bandung', 'C. Nepal', 'D. Palembang', 'A. Jakarta'],
    spliced: ['A. Jakarta', '', '', 'D. Palemburg'],
},

{
    question: 'Who wrote Harry Potter?',
    answers: ['A. J.R.R Tolkien', 'B. Terry Pratchett', 'C. J.K.Rowling', 'D. Daniel Radcliffe', 'C. J.K.Rowling'],
    spliced: ['A. J.R.R Tolkien', '', 'C. J.K.Rowling', ''],
},

{
    question: 'Rolex is a company that specializes in what?',
    answers: ['A. Sport Equipments', 'B. Cars', 'C. Computers', 'D. Watches', 'D. Watches'],
    spliced: ['A. Sport Equipments', '', '', 'D. Watches',],

},
{
    question: 'What is the name given to indian food cooked over charcoal in a clay oven?',
    answers: ['A. Biryani', 'B. Tandoori', 'C. Pani Puri', 'D. Tiki Masala', 'B. Tandoori'],
    spliced: ['A. Biryani', 'B. Tandoori', '', '',],
},

{
    question: 'Who starred in the film 1973 movie "Enter The Dragon" ?',
    answers: ['A. Jackie Chan', 'B. Jet Li', 'C. Yun-Fat Chow', 'D. Bruce Lee', 'D. Bruce Lee',],
    spliced: ['', 'B. Jet Li', '', 'D. Bruce Lee',],
},
{
    question: 'What genetic disease is caused by having an extra Y chromosome (XYY)?',
    answers: ["A. Jacob's Syndrome", "B. Klinefelter's Syndrome", "C. Turner's Syndrome", "D. Down's Syndrome", "A. Jacob's Syndrome"],
    spliced: ["A. Jacob's Syndrome", '', '', "D. Down's Syndrome",],

},
];
// DECLARING VARIABLES BY DOCUMENT SELECTORS
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const fiftyFifty = document.querySelector('.half-option');
const askAudience = document.querySelector('.audience--any');
const questions = document.querySelector('.question--div');
let answerModal = document.querySelectorAll('.answer-div1');
let answerModalArray = Array.prototype.slice.call(answerModal);         //converts this Nodelist to an array
const allGameMode = document.querySelector('.entire--body');
const playButton = document.querySelector('.play');
const nextButton = document.querySelector('.next');
const againButton = document.querySelector('.again');
const help1 = document.querySelector('#help1');
const help2 = document.querySelector('#help2');
const modal = document.querySelector('.modal');
const gameOver = document.querySelector('.endgame');
const correct = document.querySelector('.nextgame');
const overlay = document.querySelector('.overlay');
const leave= document.querySelector('.leave');
const congrats = document.querySelector('.congrats');
const container = document.querySelector('.container');
const moneyHover = document.querySelectorAll('.win');
const audiencePopUp = document.querySelector('.audience--pic');
const phoneFriend = document.querySelector('.phone--friend');
const phoneBtn = document.querySelector('.phone--button')
const answerNo = document.querySelector('.final--no');
const answerYes = document.querySelector('.final--yes');
let currentQuestion = 0;
let score = 0;

let audio = new Audio('Opening.mp3');        //Adds background music
audio.loop = true;
audio.play();


// SOME FUNCTIONS DEFINITION 
function hide(any) {                         //function to hide an element
    any.classList.add('hidden')
}
function show(any) {                         //function to show an element
    any.classList.remove('hidden')
}

const playerWins = function () {               //When player wins, this pops up
    show(correct);
    show(overlay);
}

const playerFails = function () {              //When player fails, this pops up
    show(gameOver);
    show(overlay)
}
function showOptions() {                       //Shows the options again after being used
    phoneBtn.style.backgroundImage="none";
    askAudience.style.backgroundImage="none";
    fiftyFifty.style.backgroundImage="none";
    fiftyFifty.textContent="50:50";
    fiftyFifty.disabled=false;
    askAudience.disabled=false;
    phoneBtn.disabled=false;
    show(help1)
    show(help2)
}
const newGame = function () {                  //Setting the interface for a new game
    hide(gameOver);
    hide(correct);
    hide(overlay);
    show(phoneBtn);
    show(askAudience);
    show(fiftyFifty);
    showOptions();
    document.querySelector(`.money--${score}`).classList.remove('money-hover');
    document.querySelector(`.money--4`).style.backgroundColor="white";
    document.querySelector(`.money--7`).style.backgroundColor="white";
    currentQuestion = 0;
    score = 0;
    loadQuestion(currentQuestion)
}
const restart = () => {                            //resetting the game after failure
    show(playButton);
    playButton.textContent = 'RESTART?';
    hide(allGameMode);
    hide(gameOver);
    hide(modal)
    show(congrats);
    show(container);
    hide(overlay);
    clapper.play();
}

//Button functionalities

playButton.addEventListener('click', function () {      //play button
    clapper.pause()                   
    hide(playButton)
    show(allGameMode);
    newGame();
    hide(container);
});
nextButton.addEventListener('click', function () {                     //next button
    document.getElementById('wintext').textContent=`Correct!! You got that right!!`;
    if (currentQuestion == 9) {
        restart()
    } else {
        hide(overlay);
        hide(correct);
        currentQuestion++
        loadQuestion(currentQuestion);
    }
});

againButton.addEventListener('click', newGame);                        //try again button

leave.addEventListener('click', function(){                            //walk away button
    show(modal);
})
answerNo.addEventListener('click', function(){                          //no button
    hide(modal)
});
answerYes.addEventListener('click', function(){                          //yes  button
    restart();
    let takeHome = document.querySelector(`.money--${currentQuestion}`).textContent;
    congrats.textContent=`YOU WALKED AWAY WITH ${takeHome}`
})
    


// GAME PLAY
function loadQuestion(questionIndex) {                          //Loads question at current index
    document.querySelector(`.money--0`).classList.remove('money-hover');
    const q = questionsToDisplay[questionIndex];
    questions.textContent = `${(questionIndex + 1)}. ${q.question}`;
    option1.innerText = q.answers[0];
    option2.innerText = q.answers[1];
    option3.innerText = q.answers[2];
    option4.innerText = q.answers[3];
    

    fiftyFifty.addEventListener('click', function () {           //fifty fifty life-line
        option1.textContent = q.spliced[0];
        option2.textContent = q.spliced[1];
        option3.textContent = q.spliced[2];
        option4.textContent = q.spliced[3];
        fiftyFifty.innerText='';
        fiftyFifty.style.backgroundImage="url('fail.png')";
        fiftyFifty.style.backgroundSize="cover";
        fiftyFifty.disabled = true;                              //disables the button after use
        
    })
    askAudience.addEventListener('click', function () {           //ask the audience life-line
        show(overlay);
        show(audiencePopUp);
        audiencePopUp.src = `audience--${currentQuestion}.png`;
        overlay.addEventListener('click', function () {
            hide(audiencePopUp);
            hide(overlay);
            askAudience.style.backgroundImage="url('fail.png')";
            askAudience.style.backgroundSize="cover";
            hide(help1);
            askAudience.disabled = true; 
            
        })
    })
    phoneBtn.addEventListener('click', function () {            //phone a friend life-line
        const randomLetters = ['A', 'B', 'C', 'D'];
        const randomLetterGenerator = Math.trunc(Math.random() * randomLetters.length);
        const randomLetterPicked = randomLetters[randomLetterGenerator];
        show(phoneFriend)
        document.getElementById('phone--friend2').textContent = randomLetterPicked;
        show(overlay)
        overlay.addEventListener('click', function () {
            hide(phoneFriend);
            hide(overlay);
            phoneBtn.style.backgroundImage="url('fail.png')";
            phoneBtn.style.backgroundSize="cover";
            hide(help2);
            phoneBtn.disabled = true; 
        })
    })

}

answerModalArray.forEach(function (val) {                      //function that checks for the correct answer
    val.addEventListener('click', function () {
        if (val.innerText === questionsToDisplay[currentQuestion].answers[4]) {
            score += 1;
            let audioCorrect = new Audio('correct.mp3');
                audioCorrect.play();
                audio.pause();
            val.style.backgroundColor = 'green';
            if(score==4 || score==7) {                            //conditions for guaranteed money
                document.querySelector(`.money--${score}`).style.backgroundColor="green";
                document.querySelector(`.money--${score-3}`).style.backgroundColor="white";
                let guarantee = document.querySelector(`.money--${score}`).innerText;
                document.getElementById('wintext').textContent=`You have ${guarantee} guaranteed`;
            }
            playerWins();
            setInterval(() => { val.style.backgroundColor = 'black' }, 1000);
            document.querySelector(`.money--${score}`).classList.add('money-hover');
            document.querySelector(`.money--${score-1}`).classList.remove('money-hover');
            
            }
            else {
            val.style.backgroundColor = 'red';
            setInterval(() => { val.style.backgroundColor = 'black' }, 1000);
            let audioWrong = new Audio('Wrong.mp3');
                audioWrong.play()
                audio.pause()
            if (score<4) {                              //conditions for guaranteed money
                document.getElementById('score-value').textContent = "N0";
            } else if (score<7){
                document.getElementById('score-value').textContent = "N20,000";
            } else if (score<10){
                document.getElementById('score-value').textContent = "N250,000";
            }else {
                document.getElementById('score-value').textContent = document.querySelector(`.money--${score}`).textContent;
            }
            playerFails()
        }
    })
 
}
)

