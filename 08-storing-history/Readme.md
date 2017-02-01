##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Storing history

Let's say you were playing a friend and they beat you.

HOW DID THEY DO THAT?

If only you had a history of moves to see how they schooled you at tic tac toe.
Let's add that functionality.  Currently our state is stored in the squares array.
We will want to store a list of the state as it changes.  We initalize the state
of squares on the Board component, however the board component should be the state
of the board at that particular time.  The Game component should maintain the history.
This sounds like we need to lift our state up again.  We'll initalize the state
of the game on the Game component.

#Game.js
```
class Game extends Component {
  constructor(){
    super()
    this.state={
      history: [{
        squares:Array(9).fill(null)
      }],
      xIsNext: true,
    }
  }
  ...
```

We can now remove the constructor from the Board component. Our squares array is
now a prop passed into the Board component so the value we pass to the Square
component also need to be updated.

#Board.js
```
renderSquare(i) {
  return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
}
```


Since we need to update the history whenever a new move (click action) takes
place, the Game component will now house our `handleClick` function.  We will need
to pass this function into the Board component and then onto the Square component.

The Game component is now responsible for looking at the most recent history and
caculating the state of the game.

#Game.js
```
render(){
  const history = this.state.history
  const current = history[history.length-1]
  const winner = this.calculateWinner(current.squares)

  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
```

Our current state of history is the last entry of the history array.  The winner
constant remains the same as well as our status.  We moved these up from the Board
component.  We can remove them from the Board component as well.  In the return
function we update the `<Board />` section to pass the current squares and the click
function.  Speaking of the click function we need to move that out of Board as well.
Our new Game handleClick function will look like this:

#Game.js
```
handleClick(i) {
  const history = this.state.history
  const current = history[history.length - 1]
  const squares = current.squares.slice();
  if (this.calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = this.state.xIsNext ? 'X' : 'O'
  this.setState({
    history: history.concat([{
      squares: squares
    }]),
    xIsNext: !this.state.xIsNext,
  })
}
```

Instead of directly updating the squares state, we add the new squares state to
the history.  Now we need to show the moves.  In our Game's render function lets
add a move constant.

#Game.js render function
```
...
const moves = history.map((step, move) => {
  const desc = move ?
    'Move #' + move :
    'Game start'
  return (
    <li key={move}>
      <a href="#">{desc}</a>
    </li>
  );``
});

return (
  <div className="game">
    <div className="game-board">
      <Board
        squares={current.squares}
        onClick={(i) => this.handleClick(i)}/>
    </div>
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
  </div>
)
```
For every history entry we will make a list item of the description.  We'll return
the generated list items into the return function as `moves`.  Notice that the li
tag must have a key.  Read why this is needed [here](https://facebook.github.io/react/tutorial/tutorial.html#keys)

Now when we click on a square a new item will appear in our history list.  For our
last trick lets implement time travel.  For every history item we will be able to
click on the description and see the board's state at that time.  We first update
our history list item to handle a click funciton


```
const moves = history.map((step, move) => {
  const desc = move ?
    'Move #' + move :
    'Game start'
  return (
    <li key={move}>
      <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
    </li>
  );``
});
```

The onClick action calls a jumpTo function.  Let's define that function.

```
jumpTo(step) {
  this.setState({
    stepNumber: step,
    xIsNext: (step % 2) ? false : true,
  })
}
```

Here we set a new state property `stepNumber` to the current move.  We also need
to update the xIsNext state so that the status updates correctly.  We'll check to
see if the step is dividable by two as there are two distinct states X and O.
Lastly we need to add the initial state of the `stepNumber`

```
constructor(){
  super()
  this.state={
    history: [{
      squares:Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0
  }
}
```


Instead of calculating the last item in the history `history[history.length - 1]`
we can use the stepNumber state. `history[this.state.stepNumber]`.  You can now
click through the history and get to any particular state.  Currently when navigating
to a previous state and clicking it continues to add to the end of the history.
You might want to update the handleClick function to notice the stepNumber.
