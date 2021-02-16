module.exports = {
  constructor: `**Constructor - React Documentation**

  If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  
  The constructor for a React component is called before it is mounted. When implementing the constructor for a \`React.Component\` subclass, you should call \`super(props)\` before any other statement. Otherwise, \`this.props\` will be \`undefined\` in the \`constructor\`, which can lead to bugs.
  
  [Read More](https://reactjs.org/docs/react-component.html#constructor)`,

  render: `**render - React Documentation**
  
  The \`render()\` method is the only required method in a class component.

  When called, it should examine this.props and this.state and return one of the following types:
  
  * React elements. Typically created via JSX.
  * Arrays and fragments.
  * Portals. Let you render children into a different DOM subtree.
  * String and numbers. These are rendered as text nodes in the DOM.
  * Booleans or null. Render nothing.
  
The \`render()\` function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
  
  [Read More](https://reactjs.org/docs/react-component.html#render)`,

  defaultProps: `**defaultProps - React Documentation**
  
  \`defaultProps\` can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for \`null\` props.
  
  [Read More](https://reactjs.org/docs/react-component.html#defaultprops)`,

  componentDidMount: `**componentDidMount - React Documentation** 
  
  \`componentDidMount()\` is invoked immediately after a component is mounted (inserted into the tree). 
  
  Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in \`componentWillUnmount()\`. 
  
  [Read More](https://reactjs.org/docs/react-component.html#componentdidmount)`,

  componentDidUpdate: `**componentDidUpdate - React Documentation**
  
  \`componentDidUpdate()\` is invoked immediately after updating occurs. This method is not called for the initial render.

  Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

  [Read More](https://reactjs.org/docs/react-component.html#componentdidupdate)`,

  componentWillUnmount: `**componentWillUnmount - React Documentation**
  
  \`componentWillUnmount()\` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in \`componentDidMount()\`.

  [Read More](https://reactjs.org/docs/react-component.html#componentwillunmount)`,

  shouldComponentUpdate: `**shouldComponentUpdate - React Documentation**

  Use \`shouldComponentUpdate()\` to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

  [Read More](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
  `,

  getDerivedStateFromProps: `**getDerivedStateFromProps - React Documentation**

  \`getDerivedStateFromProps\` is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

  [Read More](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  `,

  getSnapshotBeforeUpdate: `**getSnapshotBeforeUpdate - React Documentation**

  \`getSnapshotBeforeUpdate()\` is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to \`componentDidUpdate()\`.

  [Read More](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  `,

  componentDidCatch: `**componentDidCatch - React Documentation**
  
  Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

  [Read More](https://reactjs.org/docs/react-component.html#componentdidcatch)
  `,

  componentWillMount: `**componentWillMount - React Documentation**
  
  The method is deprecated. It will continue to work until React 17.

  [Read More](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)
  `,

  UNSAFE_componentWillMount: `**UNSAFE_componentWillMount - React Documentation**
  
  \`UNSAFE_componentWillMount()\` is invoked just before mounting occurs. It is called before \`render()\`, therefore calling \`setState()\` synchronously in this method will not trigger an extra rendering. Generally, we recommend using the \`constructor()\` instead for initializing state.

  [Read More](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)
  `,

  componentWillReceiveProps: `**componentWillReceiveProps - React Documentation**
  
  The method is deprecated. It will continue to work until React 17.

  [Read More](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
  `,

  UNSAFE_componentWillReceiveProps: `**UNSAFE_componentWillReceiveProps - React Documentation**
  
  \`UNSAFE_componentWillReceiveProps()\` is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using \`this.setState()\` in this method.

  [Read More](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
  `,

  componentWillUpdate: `**componentWillUpdate - React Documentation**
  
  The method is deprecated. It will continue to work until React 17.

  [Read More](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
  `,

  UNSAFE_componentWillUpdate: `**UNSAFE_componentWillUpdate - React Documentation**
  
  \`UNSAFE_componentWillUpdate()\` is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.

  [Read More](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
  `,

  setState: `**setState - React Documentation**
  
  \`setState()\` enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses. 
  
  Think of \`setState()\` as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

  [Read More](https://reactjs.org/docs/react-component.html#setstate)
  `,

  createContext: `**createContext - React Documentation**

  Creates a \`{ Provider, Consumer }\` pair. When React renders a context \`Consumer\`, it will read the current context value from the closest matching Provider above it in the tree.

  The \`defaultValue\` argument is only used by a \`Consumer\` when it does not have a matching \`Provider\` above it in the tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a \`Provider\` value does not cause \`Consumers\` to use \`defaultValue\`.
  `
};
