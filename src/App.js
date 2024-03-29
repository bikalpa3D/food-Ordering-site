import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";

//react Element
// const jsxHeading = <h1 className="heading">Hello World! Using jsx</h1>;
// const photo = (
//   <img
//     className="photo"
//     src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   ></img>
// );
//React Component
// const HeadingComponent1 = () => {
//   return (
//     <div className="container">
//       {jsxHeading}
//       {photo}
//       {HeadComponent()}
//       <HeadComponent></HeadComponent>
//       <HeadComponent />
//       <h1 className="h1">
//         Hello it is react component from Heading component1
//       </h1>
//     </div>
//   );
// };
// const HeadComponent = () => <h1>Hi from react component from HeadComponent</h1>;





const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(photo);
root.render(<AppLayout />);
