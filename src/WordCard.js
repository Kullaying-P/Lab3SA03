import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { pkcs12 } from 'node-forge';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
      word,
      chars,
      attempt: 1,
      guess: [],
      completed: false
    }
}
export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    } 
    activationHandler = c => { 
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
    }
    render() {
        return ( 
            <div className='App'>
                <h2>Find The Word</h2>
                <p>Attemption : {this.state.attempt}/5</p>
                 {
                this.state.chars.map((c, i) => <CharacterCard value = {c} key = {i} attempt = {this.state.attempt} activationHandler={this.activationHandler}/>) 
                }  
                <h1> {this.state.completed? 'YOU WON!!!': ''}</h1>
                <h3> {this.state.completed? 'Execellent!!': ''}</h3>
                <h1> {this.state.attempt == 5? 'YOU LOSE!!!': ''} </h1>
                <h3> {this.state.attempt == 5? 'Pls try again': ''} </h3>
            </div >
        );
    }
}