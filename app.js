class Result{
    constructor(player){
        this.player = player;
    }
    result(computer, player) {
        let result = null;
        const output = document.getElementById('idResult');
        const bgResult = document.getElementById('bgResult');

        const playerWin = 'Player 1 Win';
        const draw = 'Draw';
        const comWin = 'Com Win';

        if (computer === player) result = draw;
        else if (computer === 'scissors' && player === 'paper') result = comWin;
        else if (computer === 'scissors' && player === 'rock') result = playerWin;
        else if (computer === 'paper' && player === 'scissors') result = playerWin;
        else if (computer === 'paper' && player === 'rock') result = comWin;
        else if (computer === 'rock' && player === 'scissors') result = comWin;
        else if (computer === 'rock' && player ==='paper') result = playerWin;
        else result = 'Terjadi Kesalahan'

        output.innerHTML = result;
        output.classList.add('result-text');
        bgResult.classList.remove('versus');
        bgResult.classList.add('bg-result');
        
        if (result === 'Draw') bgResult.classList.add('draw');
        else bgResult.classList.remove('draw');

        
        
        console.log(`Result: ${result}`);
    }
};

    class PlayGame extends Result{
        constructor(player){
            super(player)
        }
        #computer = (options) =>{
            let random = Math.floor(Math.random() * options.length);
            let results = options[random];
            console.log(`Com: ${results}`);

            const rock = document.getElementById('comRock');
            const paper = document.getElementById('comPaper');
            const scissors = document.getElementById('comScissors');

            rock.classList.remove('active');
            paper.classList.remove('active');
            scissors.classList.remove('active');

            if (results === 'paper') paper.classList.add('active');
            else if (results === 'rock') rock.classList.add('active');
            else scissors.classList.add('active');

            return results;
        }  

        play() {
            let options = ['rock', 'paper' ,'scissors'];
            
            if (this.player !== null) {
                console.log(`Player: ${this.player}`);
                let player = this.player;
                let computer = this.#computer(options);
                super.result(computer, player);
            }
        }
    }

const buttons = document.querySelectorAll("button");

var refresh = true;

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let dataPlayer = this.dataset.player;
    console.log(dataPlayer);
    let playGame = new PlayGame(dataPlayer);
    
    if (refresh) {
        refresh = false;
        playGame.play();
    } else{
        console.log('Refresh Page');
        // alert(
        //     'Silakan Refresh Halaman Ini :)'
        // );
    }
  });
});

const refreshButton = document.getElementById('refreshButton')

refreshButton.addEventListener('click',function(){
    const output = document.getElementById('idResult');
    const bgResult = document.getElementById('bgResult');

    const rock = document.getElementById('comRock');
    const paper = document.getElementById('comPaper');
    const scissors = document.getElementById('comScissors');

    rock.classList.remove('active');
    paper.classList.remove('active');
    scissors.classList.remove('active');

    output.innerHTML = 'VS';
    output.classList.remove('result-text');
    bgResult.classList.add('versus');
    bgResult.classList.remove('bg-result');
    bgResult.classList.remove('draw');

    refresh = true;
}); 