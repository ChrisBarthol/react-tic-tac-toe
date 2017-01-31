##This is a continuation of the react-tic-tac-toe tutorial. The state of the app in this lesson is the end state of the directions in the Readme. Follow the directions in the Readme and you should arrive at the same state.


###Stateless Functional Components

Our Square component is pretty plain at this point.  It has a few props passed to
it and has only a single render function.  It currently does not depend on state.
In React 14 they introduced stateless function components.  Instead of defining
an entire Class for the square we can return a single function.

#Square.js
```
import React, { Component } from 'react'

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square
```

Notice `this` has now disappeared from our file.  We pass the props directly into
the Square function and return the button.

That's really it for this section.  But take some time to read up on these types
of components and some other React reading materials

[Different Names of Components](https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/)
[Components, Element, Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca#.eppqaykyd)
