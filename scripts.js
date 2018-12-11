
//we made this after creating the event listner for the 'click'
// init(initialize the game)
let whosTurn = 1;
// Make an array for both players and push each new square onto the appropirate array.
let player1Squares=[];
let player2Squares=[];
const rand = Math.floor(Math.random()* 16)
console.log(rand);

// CREATE AN ARRAY THAT LIST ALL THE WINNING COMBOS
const winningCombos = [
    ['A1','B1','C1','D1'], //row 1
    ['A2','B2','C2','D2'], //row 2
    ['A3','B3','C3','D3'], //row 3
    ['A4','B4','C4','D4'], //ro4
    ['A1','A2','A3','A4'], //Col 1
    ['B1','B2','B3','B4'], //Col 2
    ['C1','C2','C3','C4'], //Col 3
    ['D1','D2','D3','D4'], //Col 4
    ['A1','B2','C3','D4'], //Diag 1
    ['A4','B3','C2','D1'], //Diag 2
]
//when you start the game and assigning event listener to each box , run if statement

// 1. User should be able to click on a button
//     - When the click happens, the square should have that player's mark (X or O)
// 2. If it's X;s turn put an X in, otherwise put amn O in
// 3. In order accomplish 3, we need to keep track of who's turn it is...
// After 'X' goes and it becomes O's turn and vice-versa
// 4. keep other's player position to prevent other player from taking a square
// 5. check to see if someone WaveShaperNode, if so, congraualate them
// 6. Stop the game IF someone won , otherwise let the game continue playing.

                // 1. set up board -- CHECK
                // 2. User should be able to click on a button -- CHECK
                // When the click happens, the square should have that players mark
                // 3. if its X’s turn, put an X in, otherwise put an O in --CHECK
                // 4. In order to accomplish 3, we ned to know who’s turn it is -- CHECK
                // After x goes, it becomes O’s turn, and vice versa
                // 5. Keep other player from taking a square -- CHECK
                // 6. See if someone won, if so congratulate them
                // 7. Stop the game if someone won, otherwise keep going

// squares in an array with 9 objects in in interface. each element is html buttom element
const squares=document.getElementsByClassName('square');
// const squares = document.getElementsByTagName('button'); ANOTHER OPTION
console.log(squares)

for(let i=0; i < squares.length; i++){
    console.log(squares[i]);  //now we can select each additional button so now, we need to add event listner
    //now we add an event listener so we know when somethihng happens
    // to add eventlistener: takes two arguements
    // 1. what to listen to
    // 2. add the method (addEventListener)
    // 3. first arg: what event to listen for
    // 4. second arg: function to run if that even happens
    
    squares[i].addEventListener('click',function(event){ //eventListener: wait to listen and once you hear whatever, do that...    
        //the function that runs is what goes in the function
                            //for the above, every js element will give you the event object
        // console.log(event); //this event WON'T RUN until it's actually clicked
        console.log(this); //equilivent to the thing that was 'click'ed on in our function.
        // this.innerHTML='X'; //add to the square an x by going to the innerHTML property and changing from 
        // a ' - ' to this 'click' and give it an 'X'.
        //CHECK TO MAKE SURE THE SQUARE ISN"T TAKEN.
        if(gameOn = true){
            if(this.innerHTML === '-'){
                if(whosTurn===1){ /*it's player 1, kput an X, and give control to O*/

                
                    this.innerHTML='X';
                    whosTurn = 2;
                    document.getElementById('message').innerHTML = "it's O's turn"
                    player1Squares.push(this.id);//after this, we need to see if the player wins or loses
                    checkWin(player1Squares, 1);
                }else{
                    this.innerHTML='O';
                    whosTurn=1;
                    document.getElementById('message').innerHTML = "it's X's turn"
                    player2Squares.push(this.id);
                    checkWin(player2Squares, 2);
            }
            }else{
                document.getElementById('message').innerHTML = "Sorry, that square is taken"
            }
            console.log(player1Squares)
            console.log(player2Squares)
        }

    })
}
squares[rand].addEventListener('click',function(event){
    gameOn = false;
    document.getElementById('message').innerHTML = "Game Over"
    squares[rand].innerHTML = "<img src='https://amp.businessinsider.com/images/55f2c2929dd7cc21008b99e0-750-499.jpg' />"
})

function checkWin(playerSquares, whoMarkedWhat){
    console.log('Checking to see who won...');
    // console.log(playerSquares); this was just for us to visualize
    // console.log(whoMarkedWhat);

    //we know who jiust went(whoMarkedWhat)
    //and we know what squares tey have (playerSquares)
    for(let i = 0; i < winningCombos.length; i++){
        //Keep track of how many squares in this combo:
        let squareCount=0;
        //Inner Loop-Check each square inside of THIS winning combo
        //winningCombos[i] = the winningCombo we are on (3 squares)
        for(let j=0; j < winningCombos[i].length; j++){
            //winningCombos[i][j]
            const winningSquare= winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                //player has this square!!!
                squareCount++;
            }
        }
        if(squareCount === 3){
            // console.log('Player won');
            // console.log(winningCombos[i]);
            endGame(winningCombos[i], whoMarkedWhat);
        }
    }
}
function endGame(winningCombo, whoWon){
    gameOn = false;
    // if we get to endGame, we need to say winner winner and end the game. HOW?
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}`
                                            // similare to congrats to player' + 'whoWon'. TEMPLETE LITERAL
    for(let i = 0; i < winningCombo.length; i++){
        let winningSquare = winningCombo[i];
        let squareElem = document.getElementById(winningSquare);
        console.log(squareElem)
        squareElem.className += ' winningSquare'
    }
}