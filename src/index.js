import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import {App} from './components'



// const App = () =>{
//     return(
//         <h1>Hello, World!</h1>
//     )
// }




const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <Router>
        <App/>
    </Router>
    
)