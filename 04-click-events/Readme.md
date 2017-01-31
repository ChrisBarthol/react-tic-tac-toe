##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Click Events

Currently our buttons in Square.js component don't do anything, let's fix that!

#Square.js
```
<button className="square" onClick={() => alert('click')}>
```

Now when we click a square we will get a basic javascript alert message.  The onClick
handler uses the new javascript arrow function syntax.  We could also send the
onClick handler a function.

#Square.js
```
import React, { Component } from 'react'

class Square extends Component {
  handleClick(){
    alert('click')
  }

  render(){
    return(
      <button className="square" onClick={this.handleClick}>
        {this.props.value}
      </button>
    )
  }
}

export default Square
```
Let's say we want to alert the value of the button clicked.  We might go and change
the alert to `alert(this.props.value)`.  If you make this change and open your
browsers console when you click you'll see this error:

```
Uncaught TypeError: Cannot read property 'props' of null
```

It's telling us that is has no reference of `this`.  We havent passed the correct
scope to the function.  We can fix this by updating the onClick handler

```
<button className="square" onClick={this.handleClick.bind(this)}>
```

Now when we click the handleClick function has the outer scope `this` bound to it.
Using the new javascript arrow syntac we can also write


```
<button className="square" onClick={() => alert(this.props.value)}>
```

The fat arrow binds the outer scope automatically so we can `this.props.value`
within it and have the correct value.  Let's stick with previous `this.handleClick.bind(this)`
for the time being.


We are going to want the Square to know, when clicked, if it should be marked an X or an O.
The Square component should have a state which at first is null and then when clicked
maintains the X or O value.
