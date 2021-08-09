import React from 'react';
import { Switch, Route } from "react-router-dom";
const Login = React.lazy(()=>import('./Login'));

const Auth = () => {
  return(
    <React.Suspense fallback={<span>Loading...</span>}>
      <div className="section-login">
        <Switch>
          <Route path="/auth/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </React.Suspense>
  );
}
export default Auth;
