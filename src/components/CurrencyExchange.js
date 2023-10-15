// src/components/CurrencyExchange.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyTable from './CurrencyTable';

function CurrencyExchange() {
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const apiKey = '8aa29020d24d404ba2f9ca5a48b719e2'; // Gantilah YOUR_API_KEY dengan API Key Anda.
    const apiUrl = `https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`;

    axios.get(apiUrl)
      .then((response) => {
        setExchangeRates(response.data.rates);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <CurrencyTable exchangeRates={exchangeRates} />
    </div>
  );
}

export default CurrencyExchange;
