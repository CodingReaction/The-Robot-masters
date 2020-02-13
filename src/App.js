import React from 'react';
import './App.css';
import Home from "./Components/Home";
import willyLogo from "./img/willy-logo.png";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div id="header-content">
                    <div>
                        <h1>The Robot masters</h1>
                        <div className="header-triangle"></div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Try</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
