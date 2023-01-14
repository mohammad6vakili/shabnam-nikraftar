import React, { useEffect } from "react";
import "./App.css";
import "./custome_components.css";
import loginLogo from "./assets/images/loginLogo.svg";
import Login from "./pages/auth/login";
import { useHistory, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Queue from "./pages/queue/queue";
import Shop from "./pages/shop/shop";
import ViewProduct from "./pages/shop/view-product";
import Search from "./pages/search/search";
import Profile from "./pages/profile/profile";
import profileQueue from "./pages/profile/profile_queue";
import Saved from "./pages/profile/saved";
import Wallet from "./pages/profile/wallet";
import Addresses from "./pages/profile/addresses";

function App() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    } else {
      history.push("/");
    }
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
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/queue" component={Queue} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/view" component={ViewProduct} />
          <Route path="/search" component={Search} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/queue" component={profileQueue} />
          <Route path="/profile/saved" component={Saved} />
          <Route path="/profile/wallet" component={Wallet} />
          <Route path="/profile/addresses" component={Addresses} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
