import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Banner from './components/Banner/Banner';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrder from './components/MyOrder/MyOrder';
import OurStories from './components/OurStories/OurStories';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
      <>
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Banner></Banner>
                <Services></Services>
                <OurStories></OurStories>
                <Reviews></Reviews>
              </Route>
              <Route path="/home">
                <Banner></Banner>
                <Services></Services>
                <OurStories></OurStories>
                <Reviews></Reviews>
              </Route>
              <PrivateRoute path="/addService">
                <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute path="/service/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <Route path="/signIn">
                <SignIn></SignIn>
              </Route>
              <PrivateRoute path="/myorder">
                <MyOrder></MyOrder>
              </PrivateRoute>
              <PrivateRoute path="/manageBookings">
                <ManageOrders></ManageOrders>
              </PrivateRoute>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </>
  );
}

export default App;
