##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Pushing State Up

I cannot explain the reasons for lifting state up then [facebook](https://facebook.github.io/react/tutorial/tutorial.html#lifting-state-up)
does so please read that section.

As they show we cannot allow each Square component to manage it's state since we
need to know who wins and who's turn is next.  When we push the state up we need
to define the initial state.  For our tic tac toe game that means we will have
a board with nine squares that have null values.

#Board.js
```
class Board extends Component {
  constructor() {
   super()
   this.state = {
     squares: Array(9).fill(null)
   };
 }
 ....
 ```

 We now pass the state of each particular square to the square component.

 ```
 renderSquare(i) {
  return <Square value={this.state.squares[i]} />;
}
```

We now need a way for the Square to tell the Board component that the Square was
clicked.  Our currently onClick handler does not have access to the Board component.
Lets raise the onClick handler to the Board component.


#Board.js
```
import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {
  constructor() {
   super()
   this.state = {
     squares: Array(9).fill(null)
   };
 }

 handleClick(i){
   const squares = this.state.squares.slice()
   squares[i]='X'
   this.setState({squares:squares})
 }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }
```

We send the a property to the Square component called onClick which is a function
that returns the handleClick function.  In this function we first call slice on
our squares state.  This copies the squares array to a separate object so we
[maintain immutability](https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important).

We can now remove a lot of code from our square component. Also notice that we
have now switched the `this.props.value` to `this.state.value` so we now display
the X onto the board when clicked.

#Square.js
```
import React, { Component } from 'react'

class Square extends Component {

  render(){
    return(
      <button className="square" onClick={this.props.onClick}>
        {this.state.value}
      </button>
    )
  }
}

export default Square
```
