var React = require('react');
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

const Child = ({match})=> {
    return (
        <h1>ID: {match.params.id}</h1>
    )
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li><Link to="/netflix">Netflix</Link></li>
                        <li><Link to="/youtube">Youtube</Link></li>
                        <li><Link to="/facebook">Facebook</Link></li>
                        <li><Link to="/twitter">Twitter</Link></li>
                    </ul>
                    <Route path='/:id' component={Child} />
                </div>
            </Router>
        )
    }
}

module.exports = App;