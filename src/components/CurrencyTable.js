// src/components/CurrencyTable.js

import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './style.css';


function CurrencyTable({ exchangeRates }) {
  return (
  <div className='table-header'>
    <Container>
      <Row>
        <h1>Nilai Tukar Mata Uang</h1>
      </Row>
      <Row>
        <Col>
        <table>
          <thead>
            <tr>
              <th> Mata Uang </th>
              <th> Nilai Tukar </th>
              <th> Sell </th>
              <th> Buy </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(exchangeRates).map((currency) => (
              <tr key={currency}>
                <td>{currency}</td>
                
                <td>{(exchangeRates[currency] * 1).toFixed(5)}</td>
                <td>{(exchangeRates[currency] * 0.95).toFixed(4)}</td> {/* Misalnya, sell adalah 5% kurang dari nilai tukar */}
                <td>{(exchangeRates[currency] * 1.05).toFixed(4)}</td> {/* Misalnya, buy adalah 5% lebih dari nilai tukar */}
              </tr>
            ))}
          </tbody>
        </table>
    </Col>
      </Row>
    </Container>
    </div>
  );
}

export default CurrencyTable;
