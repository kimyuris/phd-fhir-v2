import React, { useState, useEffect } from 'react';
import Popup from './Popup.js';
import axios from 'axios';
import history from './history';
import './BloodPressure1.css';
import {Button} from "react-bootstrap";
import { object } from 'prop-types';
import result from './Axios.js';
import Chart from '../components/chart/Chart.jsx';

const LongTerm = ({name}) => {

  
    const [buttonPopup, setButtonPopup] = useState(false);
    const [patient, setPatient] = useState([]);
  

    return (
      <div><br/>
        <div className="content-main">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-9">
                  <h1 className="m-0"> Long Term Blood Pressure</h1><br/>
                </div>
                <div className="col-sm-3">  
                  <Button class="btn btn-outline-secondary" onClick={() => setButtonPopup(true)}>FHIR resource</Button>
                </div>
              </div>
            </div>
        </div>
        <div className='buttonDiv'>
          <Button variant="outline-primary" className="buttonCss" onClick={shortTerm}>Short Term View</Button>
          <Button variant="outline-success" className="buttonCss" onClick={longTerm}>Long Term View</Button>
          <Button variant="outline-warning" className="buttonCss"  onClick={tableView}>Table View</Button>
        </div>  
        <div className="Line">
        <Chart value={name} />

        </div>
       
            {/* 하이라이트.js이렇게 써서 리소스글자에 색상 넣기 */ }
          <div>
            <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <h3>Observation resource</h3>
            <br/><br/>
            <h5>
            {patient && <textarea className='textarea' value={JSON.stringify(patient, null, 2)} readOnly={true} />}
            </h5>
            </Popup>
          </div>   
        </div>
      </div>
    )
  }
  
  function shortTerm(e) {
    window.location.href="/ShotTerm"
  }
  
  function longTerm(e) {
    window.location.href="/LongTerm"
  }   

  function tableView(e) {
    window.location.href="/TableView"
  }   
    
    
export default LongTerm;
