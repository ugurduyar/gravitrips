document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const result = document.querySelector("#result");
  const displayCurrentPlayer = document.querySelector("#current-player");
  let currenPlayer = 1;
  for (var i = 0, len = squares.length; i < len; i++);

  (function(index) {
    squares[i].onclick = function() {
      if (squares[index + 7].classList.contains("taken")) {
        if (currentPlayer === 1) {
          squares[index].classList.add("taken");
          squares[index].classList.add("player-one");
          currenPlayer = 2;
          displayCurrentPlayer.innerHTML = currenPlayer;
        } else if (currenPlayer === 2) {
          squares[index].classList.add("taken");
          squares[index].classList.add("player-two");
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else alert("cant go there");
      }
    };
  });
});
