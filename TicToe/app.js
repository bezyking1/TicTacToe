function game() {
  //Declaring the varables
  const cell = document.querySelectorAll(".grid div");
  const d1 = document.querySelector(".d1");
  const d2 = document.querySelector(".d2");
  const d3 = document.querySelector(".d3");
  const d4 = document.querySelector(".d4");
  const d5 = document.querySelector(".d5");
  const d6 = document.querySelector(".d6");
  const d7 = document.querySelector(".d7");
  const d8 = document.querySelector(".d8");
  const d9 = document.querySelector(".d9");
  const score = document.querySelector(".score");
  let pScore = 0;
  let cScore = 0;
  let pTurn = true;
  let gameend = false;
  //
  //
  //
  //
  //
  //check Click

  cell.forEach(div => {
    div.addEventListener("click", () => {
      if (div.textContent == "" && pTurn === true) {
        div.textContent = "X";
        pTurn = false;
      }
      const number = Math.floor(Math.random() * 9);
      //Check Computer
      if (cell[number].textContent === "" && pTurn === false) {
        cell[number].textContent = "O";
        pTurn = true;
      }
      cell.addEventListener("click", () => {
        if (div.textContent !== "") {
          gameend = true;
        }
      });
      checkHuman();
      checkComputer();
      endGame();
    });
  });

  //
  function updateScore() {
    score.textContent = `${pScore} to ${cScore}`;
  }
  //
  //
  //
  //
  //
  //

  const checkHuman = () => {
    //player
    if (
      d1.textContent === "X" &&
      d2.textContent === "X" &&
      d3.textContent === "X"
    ) {
      pScore++;
      updateScore();

      gameend = true;
    }
    //Check Row 2
    else if (
      d4.textContent === "X" &&
      d5.textContent === "X" &&
      d6.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    }
    //Check Row 3
    else if (
      d7.textContent === "X" &&
      d8.textContent === "X" &&
      d9.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    }
    //Check column 1
    else if (
      d1.textContent === "X" &&
      d4.textContent === "X" &&
      d7.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    }
    //Check column 2
    else if (
      d2.textContent === "X" &&
      d5.textContent === "X" &&
      d8.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    }

    //Check column 3
    else if (
      d3.textContent === "X" &&
      d6.textContent === "X" &&
      d9.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    } else if (
      d1.textContent === "X" &&
      d5.textContent === "X" &&
      d9.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    } else if (
      d3.textContent === "X" &&
      d5.textContent === "X" &&
      d7.textContent === "X"
    ) {
      pScore++;
      updateScore();
      gameend = true;
    }
  };
  const checkComputer = () => {
    //Computer
    if (
      d1.textContent === "O" &&
      d2.textContent === "O" &&
      d3.textContent === "O"
    ) {
      cScore++;
      updateScore();

      gameend = true;
    }
    //Check Row 2
    else if (
      d4.textContent === "O" &&
      d5.textContent === "O" &&
      d6.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }
    //Check Row 3
    else if (
      d7.textContent === "O" &&
      d8.textContent === "O" &&
      d9.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }
    //Check column 1
    else if (
      d1.textContent === "O" &&
      d4.textContent === "O" &&
      d7.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }
    //Check column 2
    else if (
      d2.textContent === "O" &&
      d5.textContent === "O" &&
      d8.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }

    //Check column 3
    else if (
      d3.textContent === "O" &&
      d6.textContent === "O" &&
      d9.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }
    //check water 1
    else if (
      d1.textContent === "O" &&
      d5.textContent === "O" &&
      d9.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }
    //check water 2
    else if (
      d3.textContent === "O" &&
      d5.textContent === "O" &&
      d7.textContent === "O"
    ) {
      cScore++;
      updateScore();
      gameend = true;
    }
  };

  //
  //
  //
  //END GAME
  const endGame = () => {
    if (gameend == true) {
      for (divs of cell) {
        divs.textContent = "";
        gameend = false;
        pTurn = true;
      }
    }
  };
  //
  //
  //
  //
  //
  //
  //
}

game();
