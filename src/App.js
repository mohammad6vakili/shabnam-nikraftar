import React, { useEffect } from "react";
import "./App.css";
import "./custome_components.css";
import loginLogo from "./assets/images/loginLogo.svg";
import { setRTLTextPlugin } from "react-map-gl";
import { useHistory, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/login";
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
import ProfileMessages from "./pages/profile/messages";
import Account from "./pages/profile/account";
import ProfileScores from "./pages/profile/scores";
import ProfileCourses from "./pages/profile/courses";
import CreateQueue from "./pages/queue/create_queue";
import Payment from "./pages/payment/payment";
import Lines from "./pages/lines/lines";
import Blogs from "./pages/blog/blogs";

function App() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    } else {
      history.push("/");
    }
    setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
    );
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
          <Route path="/queue" exact component={Queue} />
          <Route path="/queue/create" component={CreateQueue} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/view" component={ViewProduct} />
          <Route path="/search" component={Search} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/queue" component={profileQueue} />
          <Route path="/profile/saved" component={Saved} />
          <Route path="/profile/wallet" component={Wallet} />
          <Route path="/profile/addresses" component={Addresses} />
          <Route path="/profile/messages" component={ProfileMessages} />
          <Route path="/profile/account" component={Account} />
          <Route path="/profile/scores" component={ProfileScores} />
          <Route path="/profile/courses" component={ProfileCourses} />
          <Route path="/queue/create" component={CreateQueue} />
          <Route path="/payment" component={Payment} />
          <Route path="/lines" component={Lines} />
          <Route path="/blog" component={Blogs} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
