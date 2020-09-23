import React from 'react';
import {
    Router,
    Route,
} from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact'
import History from './History'
const CustomRouter = () => (

    <Router history={History}>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/Contact/:id' component={Contact} />


        </div>



    </Router>

)

export default CustomRouter;