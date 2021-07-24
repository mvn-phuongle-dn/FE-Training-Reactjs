import Header from './components/Header';
import Footer from './components/Footer';
import Features from './pages/Features';
import Auth from './pages/Auth';
import Account from './pages/Account';
import PrivateRoute from './core/guards/PrivateRoute';
import { Switch, Route, useRouteMatch } from "react-router-dom";

function App() {
  const match = useRouteMatch('/products')
  return (
    <>
      <Header />
      <main className="page-main">
        <Switch>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
