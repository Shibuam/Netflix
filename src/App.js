
import './App.css';
import Axios from 'axios'
import React from 'react';
import NavBar from './components/navBar/NavBar';
import Banner  from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,Horror} from './urls'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={Horror} title='HorrorMovies' isSmall/>
    </div>
  );
}

export default App;
