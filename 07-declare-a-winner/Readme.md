##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Taking turns and declaring a winner

Currently our tic tac toe game only places an X into squares.  We need to switch
between X and O.  First lets set up our initial state in our Board component.

#Board.js

```
class Board extends Component {
  constructor() {
   super()
   this.state = {
     squares: Array(9).fill(null),
     xIsNext: true,
   }
 }
 ```

We initialize the component with a state property of xIdNext and set it true.  The
game starts with X selecting a square first.  After selection we want to switch
to O.  We'll update the `handleClick` function.

#Board.js
```
handleClick(i){
 const squares = this.state.squares.slice()
 squares[i]= this.state.xIsNext ? 'X' : 'O'
 this.setState({
   squares:squares,
   xIsNext: !this.state.xIsNext
 })
}
```
Instead of just having `square[i]` be X we check the state of `xIsNext`.  If true
then make it an X else make it an O.  We update our squares state as well as the
state of `xIsNext`.  We make it the opposite of the original value.  Now our clicks
alternate between X and O.  Let's finish of the basic tic tac toe game by declaring
a winner.

We'll need a function to handle the check of three in a row.

#Board.js
```
calculateWinner(squares) {
 const lines = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
 ]
 for (let i = 0; i < lines.length; i++) {
   const [a, b, c] = lines[i]
   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
     return squares[a]
   }
 }
 return null
}
```

Here we define an array of arrays which hold every tic tac toe winner scenario.
We run through a for loop to check if any combination of three is a match.  If
we have a match we return the winner, either 'X' or 'O'.  We should check the
winning conditions every time a square is clicked, so lets add a few more lines
to our `handleClick` function.

#Board.js
```
handleClick(i){
  const squares = this.state.squares.slice()
  if (this.calculateWinner(squares) || squares[i]) {
      return
    }
  squares[i] = this.state.xIsNext ? 'X' : 'O'
  this.setState({
    squares: squares,
    xIsNext: !this.state.xIsNext
  })
}
```

Now if we detect a winner or click the same square we'll immediately return out
of the click handler and nothing will happen.  Otherwise we'll continue on.  Let's
finish the game by declaring the winner on the page.

#Board.js
```
render() {
  const winner = this.calculateWinner(this.state.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  }
  return(
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  )
}
```

Here we populate the status with either the person who goes next, or the winner.
Your tic tac toe game is complete!  As with any project, we can make it better.
