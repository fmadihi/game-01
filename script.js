        const coinArray = ["Heads", "Tails"];
        const score = [0, 0];
        const message = document.querySelector(".message");
        const buttons = document.querySelectorAll("button");
        console.log(buttons);
        for (let i = 0; i < buttons.length; i++) {
            console.log(buttons[i]);
            buttons[i].addEventListener("click", tossCoin);
        }
        function tossCoin(e) {
            let playerGuess = e.target.innerText;
            let computerToss = Math.floor(Math.random() * 2);
            let computerGuess = coinArray[computerToss];

            message.innerHTML = "computer selected: " + computerGuess;
            let output;
            if (playerGuess === computerGuess) {
                output = " player win.";
                score[0]++;
            }
            else {
                output = " computer win.";
                score[1]++;
            }
            message.innerHTML += output + "<br/> player : " + score[0] + " computer : " + score[1];
        }
