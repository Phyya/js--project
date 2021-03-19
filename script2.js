'use strict'
/* Declaring the variables to be used*/
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const fiftyFifty = document.querySelector('.half-option');
const askAudience = document.querySelector('.audience--any');
const questions = document.querySelector('.question--div');
let answerModal = document.querySelectorAll ('.answer-div1');
const answerNo = document.querySelector('.final--no');
const answerYes = document.querySelector('.final--yes');
const allGameMode = document.querySelector('.entire--body');
const playButton = document.querySelector('.play');
const nextButton = document.querySelector('.next');
const modal = document.querySelector('.modal');
const gameOver = document.querySelector('.endgame');
const correct = document.querySelector('.nextgame');
const overlay = document.querySelector('.overlay');
const scoreBoard = document.querySelector('.score-board');
const moneyHover = document.querySelectorAll('.win');
const audiencePopUp = document.querySelector('.audience--pic');
const phoneFriend = document.querySelector('.walk-away');
const phoneFriendDiv = document.querySelector('.phone--friend');
const randomStoredArray = [];
let score = 0;
// let audio = new Audio('Opeoning.mp3');
//         audio.loop= true;
//         audio.play()



// Modal functions
const playerWins = function () {
    correct.classList.remove ('hidden')
    overlay.classList.remove('hidden')
    
}

const playerFails = function () {
    gameOver.classList.remove('hidden')
    overlay.classList.remove('hidden')
}



// QUESTION DATA STRUCTURE
const questionsToDisplay =  [{question:'What is the largest country in the world?',
                                answers :['Russia', 'Canada', 'China', 'United States', 'Russia'],
                                spliced:['Russia', 'Canada', '',''],
                                
                             },

                             {question:"The world's fastest animal is the what?",
                              answers :['Lion', 'Cheetah', 'Antelope', 'Gazelle', 'Cheetah'],
                              spliced:['', 'Cheetah','Antelope', ''],
                             },

                             {question:'Which of these fruits is NOT a berry?',
                              answers :['Blueberry', 'Banana', 'Concord Grape', 'Strawberry', 'Concord Grape'],
                              spliced:['', 'Banana', 'Concord Grape',''],
                             },

                             {question:"What is a rabbit's abode called?",
                              answers :['Dray', 'Den', 'Nest', 'Burrow', 'Burrow',],
                              spliced:['Dray','', '','Burrow'],
                             },

                             {question:'What is the capital of Indonesia?',
                              answers :['Jakarta', 'Bandung', 'Nepal', 'Palembang', 'Jakarta'],
                              spliced:['Jakarta', '', '', 'Palemburg'],
                             },

                             {question:'Who wrote Harry Potter?',
                                answers :['J.R.R Tolkien', 'Terry Pratchett', 'J.K.Rowling', 'Daniel Radcliffe', 'J.K.Rowling'],
                                spliced:['J.R.R Tolkien', '', 'J.K.Rowling',''],
                             },

                             {question:'Rolex is a company that specializes in what?',
                              answers :[ 'Sport Equipments','Cars', 'Computers', 'Watches', 'Watches'],
                              spliced:['Sport Equipments','', '','Watches',],
                            
                             },
                             {question:'What is the name given to indian food cooked over charcoal in a clay oven?',
                              answers :['Biryani', 'Tandoori', 'Pani Puri', 'Tiki Masala', 'Tandoori'],
                              spliced:['Biryani','Tandoori', '', '',],
                             },

                             {question:'Who starred in the film 1973 movie "Enter The Dragon" ?',
                              answers :['Jackie Chan', 'Jet Li', 'Yun-Fat Chow', 'Bruce Lee', 'Bruce Lee',],
                              spliced:['','Jet Li','', 'Bruce Lee',],
                             },
                             {question:'What genetic disease is caused by having an extra Y chromosome (XYY)?',
                              answers :["Jacob's Syndrome", "Klinefelter's Syndrome", "Turner's Syndrome", "Down's Syndrome", "Jacob's Syndrome"],
                              spliced:["Jacob's Syndrome", '',  '', "Down's Syndrome",],
                            
                             }
                            ];
 
// PLAY FUNCTION

    const play = function () {
        let gamePlaying = true;
        const randomQuestion = Math.trunc(Math.random()* 10)
            for (let i=0; i<questionsToDisplay.length; i++) {
                let randomQuestion = Math.trunc(Math.random() * 10) ;
                if (!randomStoredArray.includes(randomQuestion)) {
               
                    randomStoredArray.push(randomQuestion);
                    randomStoredArray[i] = randomQuestion;
                    
                    // randomStoredArray.push(randomQuestion);
                    questions.textContent = questionsToDisplay[randomQuestion].question;
                    option1.textContent= questionsToDisplay[randomQuestion].answers[0];
                    option2.textContent= questionsToDisplay[randomQuestion].answers[1];
                    option3.textContent= questionsToDisplay[randomQuestion].answers[2];
                    option4.textContent= questionsToDisplay[randomQuestion].answers[3];
            

                    // answer
                    for (let i=0; i <answerModal.length;) {
                        answerModal[i].addEventListener('click', function(){
                            if (answerModal[i].textContent===questionsToDisplay[randomQuestion].answers[4]) { 
                                score += 1;
                                let audioCorrect = new Audio('correct.mp3');
                                    audioCorrect.play()
                                    audio.pause()
                            //     scoreBoard.textContent=score;
                                answerModal[i].style.backgroundColor='green';
                                setInterval(() => {
                                    answerModal[i].style.backgroundColor='black'
                                }, 1000);
                                playerWins()
                            document
                            .querySelector(`.money--${score}`)
                            .classList.add('money-hover');
                            
                            } else {
                                // playerFails();
                                answerModal[i].style.backgroundColor='red';
                                document.getElementById('score-value').textContent = document.querySelector(`.money--${score}`).textContent;
                                let audioWrong = new Audio('correct.mp3');
                                audioWrong.play()
                                audio.pause()
                            }
                        })
                        
                    }
                
                }
                fiftyFifty.addEventListener('click', function(){
                    option1.textContent= questionsToDisplay[randomQuestion].spliced[0];
                    option2.textContent= questionsToDisplay[randomQuestion].spliced[1];
                    option3.textContent= questionsToDisplay[randomQuestion].spliced[2];
                    option4.textContent= questionsToDisplay[randomQuestion].spliced[3];
                    fiftyFifty.classList.add('hidden');
            })
                askAudience.addEventListener('click', function(){
                    overlay.classList.remove('hidden')
                    audiencePopUp.classList.remove('hidden');
                    audiencePopUp.src = `audience--${randomQuestion}.png`;
                    overlay.addEventListener('click', function(){
                        audiencePopUp.classList.add('hidden');
                        overlay.classList.add('hidden');
                        askAudience.classList.add('hidden')
                    })
                })
                phoneFriend.addEventListener('click', function(){
                    const randomLetters =['A','B','C','D'];
                    const randomLetterGenerator =Math.trunc(Math.random() *randomLetters.length) ;
                    const randomLetterPicked=randomLetters[randomLetterGenerator];
                    phoneFriendDiv.classList.remove('hidden')
                    document.getElementById('phone--friend2').textContent=randomLetterPicked;
                    overlay.classList.remove('hidden')
                    overlay.addEventListener('click', function(){
                        phoneFriendDiv.classList.add('hidden');
                        overlay.classList.add('hidden');
                        phoneFriend.classList.add('hidden')
                    })
                })
            } 

            audio.play()
           
    }           
playButton.addEventListener('click', function() {
        playButton.classList.add('hidden');
        allGameMode.classList.remove('hidden');
        gameOver.classList.add('hidden')
        
        play();
        
    }); 

// nextButton.addEventListener ('click', function(){
//     overlay.classList.add('hidden')
//     correct.classList.add('hidden')
//     play();

// })