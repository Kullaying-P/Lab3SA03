import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = ['rose','lily','tulip','jasmine','orchid','daisy','lotus','peony','sunflower'];
class App extends Component {
    render() {
        return (
            <div >
                <WordCard value = {word[Math.floor(Math.random() * word.length)]} />
            </div>
        );
    }
}

export default App;