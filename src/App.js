import './App.css';
import data from './data.json';
import {useState,Fragment} from "react";
import NavBar from './components/NavBar.js';
import {nanoid} from 'nanoid';
import ReadTable from './components/ReadTable.js';
import EditableForm from './components/EditableForm.js';
import UserForm from './components/UserForm.js';
import MultiSelect from './components/MultiSelect.js';
import RenderForm from './components/RenderForm.js';
import {

  BrowserRouter,

  Routes,

  Route,

} from "react-router-dom";




const App=()=> {

  



  return (
    
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<RenderForm/>}/>
    <Route path="/api" element={<MultiSelect/>}/>
    
    </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;
