# React Introduction

**ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.**

- It is developed and maintained by Facebook.
- The latest version of React is React 19.
- Uses a virtual DOM for faster updates.
- Supports a declarative approach to designing UI components.
- Ensures better application control with one-way data binding.

```js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
```
In this example:

- import React from 'react': Imports React to create components and use JSX.
- function App() { ... }: Defines a functional component called App.
- return ( ... ): Returns JSX that represents the UI (a div with an h1 tag - displaying "Hello, World!").
- export default App: Exports the App component so it can be used elsewhere.

## How does React work?

**React operates by creating an in-memory virtual DOM rather than directly manipulating the browser’s DOM. It performs necessary manipulations within this virtual representation before applying changes to the actual browser DOM.**

![React Virtual Dom](./assets/React1.png)

**Here’s how the process works:**

**1. Actual DOM and Virtual DOM**
Initially, there is an Actual DOM(Real DOM) containing a div with two child elements: h1 and h2.
React maintains a previous Virtual DOM to track the UI state before any updates.

**2. Detecting Changes**

When a change occurs (e.g., adding a new h3 element), React generates a New Virtual DOM.
React compares the previous Virtual DOM with the New Virtual DOM using a process called reconciliation.

**3. Efficient DOM Update**

React identifies the differences (in this case, the new h3 element).
Instead of updating the entire DOM, React updates only the changed part in the New Actual DOM, making the update process more efficient.

**Key Features of React**

React is one of the most demanding JavaScript libraries because it is equipped with a ton of features which makes it faster and production-ready. Below are the few features of React.

**1. Virtual DOM**

React uses a Virtual DOM to optimize UI rendering. Instead of updating the entire real DOM directly, React:

- Creates a lightweight copy of the DOM (Virtual DOM).
- Compares it with the previous version to detect changes (diffing).
- Updates only the changed parts in the actual DOM (reconciliation), improving performance.

**2. Component-Based Architecture**- 

React follows a component-based approach, where the UI is broken down into reusable components. These components:

- Can be functional or class-based.
- It allows code reusability, maintainability, and scalability.

**3. JSX (JavaScript XML)**
 
React usesJSX, a syntax extension that allows developers to write HTML inside JavaScript. JSX makes the code:

- More readable and expressive.
- Easier to understand and debug.

**4. One-Way Data Binding**

React uses one-way data binding, meaning data flows in a single direction from parent components to child components via props. This provides better control over data and helps maintain predictable behavior.

**5. State Management**

React manages component state efficiently using the useState hook (for functional components) or this.state (for class components). State allows dynamic updates without reloading the page.

**6. React Hooks**

Hooks allow functional components to use state and lifecycle features without needing class components. Common hooks include:

- useState: for managing local state.
- useEffect: for handling side effects like API calls.
- useContext: for global state management.

**7. React Router**

React provides React Router for managing navigation in single-page applications (SPAs). It enables dynamic routing without requiring full-page reloads.

**ReactJS Lifecycle**

Every React Component has a lifecycle of its own, the lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. React automatically calls these methods at different points in a component’s life cycle. Understanding these phases helps manage the state, perform side effects, and optimize components effectively.

**1. Initialization**

This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

**2. Mounting Phase**- 

- **Constructor:**-  The constructor method initializes the component. It’s where you set up the initial state and bind event handlers.

- **render():**-  This method returns the JSX representation of the component. It’s called during initial rendering and subsequent updates.

- **componentDidMount():**-  After the component is inserted into the DOM, this method is invoked. Use it for side effects like data fetching or setting timers.

**3. Updating Phase**

- **componentDidUpdate(prevProps, prevState):** Called after the component updates due to new props or state changes. Handle side effects here.

- **shouldComponentUpdate(nextProps, nextState):** Determines if the component should re-render. Optimize performance by customizing this method.

- **render():** Again, the render() method reflects changes in state or props during updates.**

**4. Unmounting Phase**

componentWillUnmount(): Invoked just before the component is removed from the DOM. Clean up resources (e.g., event listeners, timers).

**Applications of React**

- **Web Development:** React is used to build dynamic and responsive web applications, including social media platforms, e-commerce sites, and blogs.

- **Mobile Apps:** React Native allows developers to build mobile apps for iOS and Android using the same codebase.

- **Enterprise Applications:** React is used in building large-scale enterprise applications that require a highly interactive UI.

- **Dashboards and Data Visualizations** React is great for building real-time dashboards and data visualization tools due to its high performance.

**Limitations of React**

**SEO Challenges:** Since React is a client-side library, SEO optimization can be difficult for pages with heavy dynamic content. However, tools like Next.js can be used to render React applications server-side for better SEO.

**Steep Learning Curve:** React’s ecosystem is vast, and learning how to work with tools like Redux and React Router and understanding component lifecycle methods can be challenging for beginners.

**Boilerplate Code:** Setting up and maintaining state management libraries like Redux or Context API can involve writing boilerplate code, especially for large applications.

**React: Enhancements and New Features**

New Features Added in React 19:

- Server-Side Rendering Improvements
- React Suspense Advancements
- Concurrent Mode
- Automatic Batching Enhancements
- New Hooks API

Features Removed in React 19:

- Legacy Context API 
- Deprecated Lifecycle Methods
- React.createClass
- ReactDOM Removed 
