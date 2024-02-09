
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '/src/pages/Home';
import MyNavbar from '/src/components/MyNavbar';
import Preferiti from './pages/Favorites';
import Search from './components/Search';
import store from './store/store';
import Details from './pages/Details';

function App() {


  return (
    <>
    <Provider store = {store}>
     <BrowserRouter>
     <MyNavbar />
     <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/preferiti' element = {<Preferiti />} />
      <Route path = '/search' element = {<Search /> } />
      <Route path= '/details/:gameid' element=  {<Details />} />
     </Routes> 
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
