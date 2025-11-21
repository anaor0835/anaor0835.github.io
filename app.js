"use strict";

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

// Placeholder components so Routes referencing them don't break if not yet implemented
function Education() { return (<div className="placeholder">Education content coming soon</div>); }
function Projects() { return (<div className="placeholder">Projects content coming soon</div>); }

const App = () => (
    <ReactRouterDOM.HashRouter>

        <div id="titleNav">
            <div id="nav">  
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/edu">Education</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>

        <div id="content">
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/edu" component={Education} />
            <Route path="/projects" component={Projects} />
        </div>

        <div id="footer">
            made with love ; seekrett + adi
        </div>

    </ReactRouterDOM.HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
