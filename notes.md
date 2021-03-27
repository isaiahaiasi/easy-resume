# React composition issue...

Say I have children of a component, & I want them to take props from both a generic component & a specialized version of that component: eg, I have an Input, a Form, and a JobForm. What's the best way to pass information from both Form & JobForm to the Input?

Is a render prop the best solution?:

```js
// Form contains generic logic for creating "controlled inputs"
Form({inputs}) {
  function handleInput() {}
  return <form>{inputs(handleInput)}</form>
}

// Specialized form that knows what Inputs to render & has its own logic to pass to the Inputs
JobForm({a}) {
  function formInputs(b) => <Input x={a} y={b}/>
  return <Form renderInputs={formInputs}/>
}

```

The problem here is, JobForm still kinda needs to know what Form is doing to Input, even if it doesn't need to know the specific implementation. What I really want is something like:

```js
function formInputs({y=b}) => <Input x={a} {y=b}/>
```

Does that make sense? Specifically with forms, it seems natural to have a component that handles the really boilerplate stuff, like hooking up the handleChange props on each input, and then have specialized forms that might have specialized logic.

https://frontarm.com/james-k-nelson/passing-data-props-children/

https://learn.co/lessons/react-this-props-children

## Okay, I think THIS is actually the answer:

```js
const Form = ({children}) => {
  function boilerPlate(e) {...}

  const childrenWithExtraProp = React.Children.map(children, child =>
    React.cloneElement(child, {onChange: boilerPlate}));

  return <form>{childrenWithExtraProp}</form>
}
```

incidentally, I _think_ I could have also done:

```
  <child {...child.props} newProp={etc}/>
```

(but this doesn't preserve refs)
