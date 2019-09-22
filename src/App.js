import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = ['hello','world'];
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