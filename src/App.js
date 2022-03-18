/* eslint-disable */
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import FormTable from './components/FormTable';
import history from './components/history';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import {PatientContext} from './context/PatientContext';
import ShotTerm from './components/ShotTerm';
import longTerm from './components/LongTerm';
import tableView from './components/TableView';


function App() {
  const [Patient, setPatient] = useState('');
  const [Data, setData] = useState(null);


  
  return (
    <BrowserRouter >
    <div>
      <PatientContext.Provider value={{Patient}} >
      <Router history={history}>
      <Header />
      <Route exact path="/">
      <div className='main'>
        <br/>
        <div><h3>Patient List</h3></div>
        <br/><br/>
       
      <FormTable />
      </div>
      </Route>
      <Route exact path="/ShotTerm" component={ShotTerm} /> 
      <Route exact path="/LongTerm" component={longTerm} /> 
      <Route exact path="/TableView" component={tableView} /> 
      <Footer />
      </Router>
      </PatientContext.Provider>
    </div>
    </BrowserRouter>
  );
}




export default App;
