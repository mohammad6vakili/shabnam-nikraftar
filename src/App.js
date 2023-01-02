import React, { useEffect } from "react";
import "./App.css";
import "./custome_components.css";
import loginLogo from "./assets/images/loginLogo.svg";
import Login from "./pages/auth/login";
import { useHistory, Switch, Route } from "react-router-dom";
import Home from "./pages/panel/home";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  }, []);

  return (
    <div className="App">
      {/* desktop view */}
      <div className="desktop-view">
        <img src={loginLogo} alt="enter with your mobile" />
        <span>برای ورود به اپلیکیشن با موبایل وارد شوید!</span>
      </div>
      {/* mobile view */}
      <div className="mobile-view">
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Home} path="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
