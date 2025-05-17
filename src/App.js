import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Userdata from './Userdata';
import Navbar from './Navbar';
import Editemp from './Editemp';


const App = () => {
  return (
    <>




      {/* CRUD Operation

👉Router- npm i react-router-dom

👉App.js - Routing

/ -form
/userdata- display
Bootstrap- npm i bootstrap


👉JSON server Setup
npm i -g json-server@0
npx json-server --watch db.json;


*/}


      <Router>

        <Navbar/>

        <Routes>

          {/* defined muliple route */}

          <Route path='/' element={<Home/>} />
          <Route path='/userdata' element={<Userdata />} />

          {/*  */}
          <Route path='/edit/:id' element={<Editemp/>} />



          {/* fallback routing */}
          <Route path='*' element={<Home />} />


        </Routes>



      </Router>


    </>
  )
}

export default App
