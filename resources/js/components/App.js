import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import characterSheet from "./pages/pathfinder/Sheet.js"
import { Provider } from 'react-redux'
import store from '../store/CreateStore'

/**
 * subscribe to redux store updates
 */
store.subscribe(() => {})


/**
 * init our react app
 *
 * @return  {Router}  react router render
 */
function App() {
    return (
        <Provider store={store}>
            <Router>
            <>
                <Switch>
                    <Route path="/character/sheet" component={characterSheet} />
                </Switch>
            </>
            </Router>
        </Provider>
    );
}

export default App

//render the app into the root div
if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
