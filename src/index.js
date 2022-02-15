import React from 'react';
import ReactDOM from 'react-dom';
 
 
const element = <div><h1 className = "hello">Hello Geek</h1>
            <h2 data-sampleAttribute="sample">Custom attribute</h2></div>;
 
ReactDOM.render(
    element,
    document.getElementById("root")
);