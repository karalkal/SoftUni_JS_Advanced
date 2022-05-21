function playTTT(moves) {
    let board = [[false, false, false], [false, false, false], [false, false, false]]
    let coordinatesAsStr
    let currentPlayer = "X"
    let x
    let y
    let winner
    let validMoves = 0

    while (validMoves < 9) {
        // get coordinates of next move
        coordinatesAsStr = moves.shift().split(' ')
        x = Number(coordinatesAsStr[0]);
        y = Number(coordinatesAsStr[1]);

        // check if place available, if not -> continue
        if (board[x][y] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        // if yes -> move
        else {
            board[x][y] = currentPlayer;
            validMoves += 1

            // check if this move wins the game
            winner = checkBoard(currentPlayer);

            if (winner) {
                break;
            }

            // if no winner (no break) -> switch players
            if (currentPlayer === "X") currentPlayer = "O"
            else if (currentPlayer === "O") currentPlayer = "X"
        }
    }

    // finally, print result
    if (!winner) console.log('The game ended! Nobody wins :(')
    else console.log(`Player ${winner} wins!`);

    printBoard();


    function printBoard() {
        for (let r of board) {
            console.log(r.join('\t'))
        }
    }

    function checkBoard(currentPlayer) {
        if (
            (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][2] === currentPlayer) ||          // horizontally
            (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][2] === currentPlayer) ||
            (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] === currentPlayer) ||

            (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] === currentPlayer) ||          // vertically
            (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] === currentPlayer) ||
            (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] === currentPlayer) ||

            (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === currentPlayer) ||          // diagonally
            (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === currentPlayer)) {
            return currentPlayer
        }
    }
}

playTTT(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])
playTTT(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])
playTTT(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"])
