import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import timzones from './timezones';
import Header from './Components/Global/header';
import Footer from './Components/Global/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    {
      Object.keys(timzones).map(function (i){
        return <App key={i} title={i +' => '+timzones[i]} zone={i} />
      })
    }
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
