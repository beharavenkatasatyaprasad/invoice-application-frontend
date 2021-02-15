import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Invoices from "./components/invoices/invoices";
import Customers from "./components/customers/customers";
import Preferences from "./components/preferences/preferences";
// import Login from "./components/login/login";
// import Register from "./components/register/register";
// import Forgotpassword from "./components/forgotpassword/forgotpassword";
import Sidenav from "./components/sidenav/sidenav";
// import useToken from "./components/token/useToken";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return (
  //     <>
  //       <BrowserRouter>
  //         <ToastContainer position="bottom-center" autoClose={5000} />
  //         <Switch>
  //           <Route exact path="/">
  //             <Login setToken={setToken} />
  //           </Route>
  //           <Route path="/register">
  //             <Register />
  //           </Route>
  //           <Route path="/forgotpassword">
  //             <Forgotpassword />
  //           </Route>
  //         </Switch>
  //       </BrowserRouter>
  //     </>
  //   );
  // }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/invoices">
            <Sidenav />
            <Invoices />
          </Route>
          <Route path="/customers">
            <Sidenav />
            <Customers />
          </Route>
          <Route path="/preferences">
            <Sidenav />
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
