import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
    return (
        <Router>
            <div className="container">
                <HeaderComponents />
                <Switch>
                    <Route exact path="/" component={ListEmployeeComponents} />
                    <Route path="/employees" component={ListEmployeeComponents} />
                    <Route path="/add-employees/:id" component={CreateEmployeeComponent} />
                    {/*<Route path="/update-employee/:id" component={UpdateEmployeeComponent} />*/}
                </Switch>
                <FooterComponents />
            </div>
        </Router>
    );
}

export default App;
