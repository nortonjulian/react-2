### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router lets us handle client and server-side routing in React applications.

- What is a single page application?
  A single page applcation is: a site that exclusively use client-side routing.

- What are some differences between client side and server side routing?
  Client-side Routing:            Server-side Routing:
  Potentially improved UI/UX      Page reload with every URL change
  More modern architecture        More traditional architecture
  Potentially worse SEO           Potentially better SEO

- What are two ways of handling redirects with React Router? When would you use each?
  Two ways of handling redirects with React Router: Using the <Redirect> component and Calling .push method on the history object.
  Redirects can be used: after certain user actions (e.g. submitting a form) and in lieu of having a catch-all 404 component.

- What are two different ways to handle page-not-found user experiences using React Router?
  A client-side redirect to the home page or creating a 404 page.

- How do you grab URL parameters from within a component using React Router?
  URL parameters are retrieved from within a component using the useParams hook.

- What is context in React? When would you use it?
  Context is: Universal data across your application. Data accessible across all components
  It is used when: Prop drilling / tunneling. Less repetition. Useful for global themes, shared data

- Describe some differences between class-based components and function
  components in React.
  In contrast to function components, class-based components every component extends React.component and must have a render method.
  Class-based components don't use hooks. Instead state is initialized in the constructor.

- What are some of the problems that hooks were designed to solve?
  Hooks can be used in any component!
  Eliminates the need of render props or HOCs and no wrapper hell!
  Less lines of code
