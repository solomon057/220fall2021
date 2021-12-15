var N_SIZE = 3,
		EMPTY = "&nbsp;",
		boxes = [],
		turn = "X",
		score,
		moves;

	/*
	 * Initializes the Tic Tac Toe board and starts the game.
	 */
	function init() {
		var board = document.createElement('table');
    board.setAttribute("border", 1);
    board.setAttribute("cellspacing", 0);
    
		var identifier = 1;
		for (var i = 0; i < N_SIZE; i++) {
			var row = document.createElement('tr');
			board.appendChild(row);
			for (var s = 0; s < N_SIZE; s++) {
        var cell = document.createElement('td');
        cell.setAttribute('height', 70);
        cell.setAttribute('width', 70);
        cell.setAttribute('align', 'center');
				cell.classList.add('col' + s,'row' + i);
				if (i == s) {
					cell.classList.add('diagonal0');
				}
				if (s == N_SIZE - i - 1) {
					cell.classList.add('diagonal1');
				}
				cell.identifier = identifier;
				cell.addEventListener("click", set);
				row.appendChild(cell);
				boxes.push(cell);
				identifier += identifier;
			}
		}

		document.getElementById("TheGame").appendChild(board);
		startNewGame();
	}

	/*
	 * New game
	 */
	function startNewGame() {
		score = {
			"X": 20,
			"O": 0
		};
		moves = 0;
		turn = "X";
		boxes.forEach(function (square) {
			square.innerHTML = EMPTY;
		});
	}

	/*
	 * Check if a win or not
	 */
	function win(clicked) {
		// Get all cell classes
		var memberOf = clicked.className.split(/\s+/);
		for (var i = 0; i < memberOf.length; i++) {
			var testClass = '.' + memberOf[i];
      var items = contains('#TheGame ' + testClass, turn);
			// winning condition: turn == N_SIZE
			if (items.length == N_SIZE) {
				return true;
			}
		}
		return false;
	}

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

	/*
	 * Sets clicked square and also updates the turn.
	 */
	function set() {
		if (this.innerHTML !== EMPTY) {
			return;
		}
		this.innerHTML = turn;
		moves += 1;
		score[turn] += this.identifier;
		if (win(this)) {
			alert('Game Over The Winner is: Player ' + turn);
			startNewGame();
		} else if (moves === N_SIZE * N_SIZE) {
			alert("Draw");
			startNewGame();
		} else {
			turn = turn === "X" ? "O" : "X";
			document.getElementById('turn').textContent = 'Player ' + turn;
		}
	}

	init();