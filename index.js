const questions = document.querySelector('.question--div');
const playMode = document.querySelectorAll('.play-mode');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const modal = document.querySelector('.modal');
const answerModal = document.querySelectorAll ('.answer-div1');
const answerNo = document.querySelector('.final--no');
const answerYes = document.querySelector('.final--yes')
const allGameMode = document.querySelector('.entire--body')
const nextButton = document.querySelector('.next');

// const questionsToDisplay = [['1', ['a','b','c','d'], 'a'], ['2', ['e','f','g','h'],'g'],['3', ['i','j','k','l'],'l'],['4', ['m','n','o','p'], 'n']]



    const questionsToDisplay =  [ 
            {
                    question:'12',
                    answers :[
                                // {text:'aaa', correct:false},
                                // {text:'bbb', correct:false},
                                // {text:'ccc', correct:false},
                                // {text:'ddd', correct:true}

                                'a', 'b', 'c', 'd', 'a'
                            ],

            },
            
            {
                question:'34',
                answers :[
                            // {text:'eee', correct:false},
                            // {text:'fff', correct:true},
                            // {text:'ggg', correct:false},
                            // {text:'hhh', correct:false}
                            'e', 'f', 'g', 'h', 'f'
                        ],

            },
            {
                question:'56',
                answers :[
                            // {text:'iii', correct:true},
                            // {text:'jjj', correct:false},
                            // {text:'kkk', correct:false},
                            // {text:'lll', correct:false}
                            'i', 'j', 'k', 'l', 'k'
                        ],

            },
            {
                question:'78',
                answers :[
                            // {text:'mmm', correct:false},
                            // {text:'nnn', correct:true},
                            // {text:'ooo', correct:false},
                            // {text:'ppp', correct:false}
                            'm', 'n', 'o', 'p', 'p'
                        ],

            },
            {
                question:'90',
                answers :[
                            // {text:'qqq', correct:false},
                            // {text:'rrr', correct:false},
                            // {text:'sss', correct:false},
                            // {text:'ttt', correct:true}
                            'q', 'r', 's', 't', 'q'
                        ],

            }
            ];

let shuffledQuestions, randomSelectedIndex;

/*STARTING THE GAME BY PRESSING PLAY */
const playButton = document.querySelector('.play');
const showModal = function () {
    modal.classList.remove ('hidden')
    // overlay.classList.remove ('hidden')
}
const closeModal = function () {
    modal.classList.add('hidden')
    // overlay.classList.add ('hidden')
}
for (let i=0; i <answerModal.length; i ++) {
    answerModal[i].addEventListener('click', showModal);
}

const reset= function () {
    nextButton.classList.remove('hidden');
    for (let i= 0; i<answerModal.length; i++) {
        answerModal[i].innerText ='';
    }

}
const showQuestion = function (question){
       questions.innerText = question.question;
        option1.innerText= question.answers[0];
        option2.innerText= question.answers[1];
        option3.innerText= question.answers[2];
        option4.innerText= question.answers[3];
        answerNo.addEventListener('click', closeModal); 
        answerYes.addEventListener('click', function() {
            for (let i= 0; i<answerModal.length; i++) {
                if (answerModal[i].innerText==question.answers[4]) {
                closeModal();
                answerModal[i].style.backgroundColor='green';
                } else {
                answerModal[i].style.backgroundColor='red';
            } 
            
        } 


    })

}

const setNextQuestions = function(){
    reset();
    showQuestion(shuffledQuestions[randomSelectedIndex]);
}

const play = function () {
    playButton.classList.add ('hidden');
    allGameMode.classList.remove('hidden');
    shuffledQuestions = questionsToDisplay.sort (() =>Math.random()-0.5);
    randomSelectedIndex =0;
    setNextQuestions();
}
playButton.addEventListener ('click', play);
nextButton.addEventListener('click', play)
    // setNextQuestion();





    // const randomQuestion = Math.trunc (Math.random() * 4) ;
    // randomStoredArray.push (randomQuestion);
    //         if (randomStoredArray.includes(randomQuestion)) {
                
    //             questions.textContent = questionsToDisplay[randomQuestion][0];
    //             option1.textContent= questionsToDisplay[randomQuestion][1][0];
    //             option2.textContent= questionsToDisplay[randomQuestion][1][1];
    //             option3.textContent= questionsToDisplay[randomQuestion][1][2];
    //             option4.textContent= questionsToDisplay[randomQuestion][1][3];
    //         }
    //         console.log(randomQuestion, randomStoredArray)
        
        
        
    // const nextQuestion = function (){
         
    // play();

/* SETTING NEST QUESTIONS BY PRESSING NEXT*/
const setNextQuestion = function () {

}










// const showing = document.getElementById('showing')
    // {
    //     question : 'blahblahblah'
    //     options :[A.jhgdkjhkjhd, B.hdjgjdsd, C.jgkjgdkjg]
    //     correctAnswer : 'c'
    // }
    // {
    //     question : 'blahblahblah2'
    //     options :['A.jhgdkjhkjhd2', 'B.hdjgjdsd2', 'C.jgkjgdkjg2']
    //     correctAnswer : 'c'
    // }
    // {
    //     question : 'blahblahblah3'
    //     options :['A.jhgdkjhkjhd3', 'B.hdjgjdsd3', 'C.jgkjgdkjg3']
    //     correctAnswer : 'c'
    // }

    
    let randomStoredArray =[];



    // for (i = 0; i<questionsToDisplay.length; i++) {
    //     questions.textContent = questionsToDisplay[i][0];
    //     option1.textContent= questionsToDisplay[i][1][0];
    //     option2.textContent= questionsToDisplay[i][1][1];
    //     option3.textContent= questionsToDisplay[i][1][2];
    //     option4.textContent= questionsToDisplay[i][1][3];
    //     console.log(questionsToDisplay[i])
    // }



    // const play = function () {
    // const randomQuestion = Math.trunc (Math.random() * 4) ;
    // randomStoredArray.push (randomQuestion);
    //         if (randomStoredArray.includes(randomQuestion)) {
                
    //             questions.textContent = questionsToDisplay[randomQuestion][0];
    //             option1.textContent= questionsToDisplay[randomQuestion][1][0];
    //             option2.textContent= questionsToDisplay[randomQuestion][1][1];
    //             option3.textContent= questionsToDisplay[randomQuestion][1][2];
    //             option4.textContent= questionsToDisplay[randomQuestion][1][3];
    //         }
    //         console.log(randomQuestion, randomStoredArray)
        
    
    // play();


    // for (let i=0; i< optionsAll.length; i++) {
        // optionsAll.textContent = questionsToDisplay[randomQuestion][1][i];
        //  console.log(optionsAll.textContent)
  
  
    //     for (let i=0; i<questionsToDisplay.length; i++) {
    //     questions.textContent = questionsToDisplay[i][0];
    //     i++;
    // }
   

playButton.addEventListener('click',play);

    // const showModal = function () {
    //     modal.classList.remove ('hidden')
    //     // overlay.classList.remove ('hidden')
    // }
    // const closeModal = function () {
    //     modal.classList.add('hidden')
    //     // overlay.classList.add ('hidden')
    // }
    // for (let i=0; i <answerModal.length; i ++) {
    //     answerModal[i].addEventListener('click', showModal);
    // }
    
    // answerNo.addEventListener('click', closeModal); 
    // answerYes.addEventListener('click', function()
    //     for (let i=0; i <answerModal.length; i ++) {
    //         if (answerModal[i].textContent==questionsToDisplay[randomQuestion][2]) {
    //             closeModal();
    //             answerModal[i].style.backgroundColor='green';
                
    //         } else {
    //             answerModal[i].style.backgroundColor='red';
    //         } questions.textContent = "You Failed";
    //           play();
    //     }


    // });
    

