import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./components/hoc/mainLayout";
import Loader from "./components/utils/loader";
import AuthGuard from "./components/hoc/authGuard";
import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "./store/actions/user.actions";
import { allticket } from "store/actions/ticket.actions";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Home from "./components/home";
import RegisterLogin from "./components/auth";

import Dashboard from "./components/dashboard";
import UserInfo from "./components/dashboard/user/info";
import UserCart from "./components/dashboard/user/cart"

const AppRoutes = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(userSignOut());
  };

  useEffect(() => {
    dispatch(userIsAuth());
  }, [dispatch]);


  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader full={true} />
      ) : (
        <>
          <Header users={users} signOutUser={signOutUser} />
          <MainLayout>
            <Switch>
              {/* <Route
                path="/dashboard/user/user_info"
                component={AuthGuard(UserInfo)}
              /> */}
              <Route path="/dashboard/user/user_cart" component={AuthGuard(UserCart)} />
              <Route path="/dashboard" component={AuthGuard(Dashboard)} />
              <Route path="/sign_in" component={RegisterLogin} />
              <Route path="/" component={Home} />
            </Switch>
          </MainLayout>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
