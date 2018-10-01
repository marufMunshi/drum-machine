import React from 'react';
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import boom from '../sounds/boom.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tom from '../sounds/tom.wav';
import tink from '../sounds/tink.wav';

class DrumKit extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.removeTransition = this.removeTransition.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        const keys = Array.prototype.slice.call(document.querySelectorAll('.drum-pad'));
        keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
    }

    removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }

    handleKeyDown(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;
    
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play(); 
    }

    handleClick(e) {
        const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
        const key = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
        if (!audio) return;
    
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play(); 
    }

    render() {

        return (
            <div id="drum-machine" >
                <div id="display" >
                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="81"
                    >
                        <kbd>Q</kbd>
                        <audio data-key="81" className="clip" id="Q" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="87"
                    >
                        <kbd>W</kbd>
                        <audio data-key="87" className="clip" id="W" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' ></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="69"
                    >
                        <kbd>E</kbd>
                        <audio data-key="69" className="clip" id="E" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="65"
                    >
                        <kbd>A</kbd>
                        <audio data-key="65" className="clip" id="A" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="83"
                    >
                        <kbd>S</kbd>
                        <audio data-key="83" className="clip" id="S" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="68"
                    >
                        <kbd>D</kbd>
                        <audio data-key="68" className="clip" id="D" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="90"
                    >
                        <kbd>Z</kbd>
                        <audio data-key="90" className="clip" id="Z" src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="88"
                    >
                        <kbd>X</kbd>
                        <audio data-key="88" className="clip" id="X" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
                    </div>

                    <div 
                        className="drum-pad" 
                        onClick={this.handleClick} 
                        data-key="67"
                    >
                        <kbd>C</kbd>
                        <audio data-key="67" className="clip" id="C" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
                    </div>
                </div>
            </div>
        );
    }

}

export default DrumKit;