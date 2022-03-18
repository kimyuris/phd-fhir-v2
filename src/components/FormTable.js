import React, { useContext } from 'react';
import {Table} from 'react-bootstrap';
import { PatientContext } from '../context/PatientContext';
import './FormTable.css';
import history from './history';

const FormTable = () => {
  const {Patient} = useContext(PatientContext);

  console.log({Patient})
  
  return (
    <div>
  <Table responsive="sm" className='frm'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Birth Date</th>
        <th>Detail</th>
      </tr>
  
      
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Brekke496</td>
        <td>M</td>
        <td>1945-12-10</td>
        <td><button className="btn btn-outline-secondary" onClick={goBlood}>Click</button></td>
      </tr>
      <tr>
        <td>876</td>
        <td>Kuvalis369</td>
        <td>W</td>
        <td>2002-10-24</td>
        <td><button className="btn btn-outline-secondary" onClick={goBlood}>Click</button></td>
      </tr>
      <tr>
      <td>3746</td>
        <td>Ahmad985</td>
        <td>M</td>
        <td>1991-04-21</td>
        <td><button className="btn btn-outline-secondary" onClick={goBlood}>Click</button></td>
      </tr>
    </tbody>
  </Table>

  
</div>
  )
}

function goBlood() {
  history.push(`/ShotTerm`);
  window.location.reload();
}

export default FormTable;

