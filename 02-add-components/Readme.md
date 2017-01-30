##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Adding more components

Now that we have a working main app lets go ahead and add a few more components.
We'll break up our tic tac toe into three components.  The Game consists of a Board.
This Board has nine Squares.

#Square.js
```
import React, { Component } from 'react'

class Square extends Component {
  render(){
    return(
      <button className="square">
        {/* TODO */}
      </button>
    )
  }
}

export default Square
```

Our most basic component will be a square of the board.  Every square will be a button
which, when clicked, will populate the square with an X or an O.


#Board.js
```
import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {
  renderSquare(i) {
    return <Square />
  }

  render() {
    const status = 'Next player X'
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
}

export default Board
```

Our Board component consists of nine Square components.  There are three rows with
three Squares to each.  We call the Square component from the renderSquare function.

#Game.js
```
import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
  render(){
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game
```

Our Game component can now be updated to display the Board component.  We've added
a few other html components that we will populated later.

###Passing props

Let's allow us to see which square is which.  We currently pass the `renderSquare`
function the number of the square.  To pass this to the Square component we can update
the code:
#In Board.js
```
renderSquare(i) {
  return <Square value={i}/>
}
```

We'll pass the number to the Square component as a property named 'value'. Now we need
to update the Square component to use the passed property.  In React passed property
are found on the props object of the class.  Replace `/* TODO */` with `this.props.value`
#In Square.js
```
import React, { Component } from 'react'

class Square extends Component {
  render(){
    return(
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

export default Square
```

Navigating to page we can now see each square with its' number displayed.
