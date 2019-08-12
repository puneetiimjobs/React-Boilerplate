import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return(
        <div>
            <h1>Calculus-React Index Page</h1>
            <label htmlFor="name">Enter Name:</label>
            <input id="name" type="text"></input>
        </div>
    )
}
ReactDOM.render(<App /> , document.querySelector("#root"));