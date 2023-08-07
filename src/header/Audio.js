import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class Audio extends Component {

    music = process.env.PUBLIC_URL + 'matrix-music.mp3';

    constructor (props) {
        super(props)
    
        this.state = {
          playing: true
        }

        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)
    }

    handlePlay () {
        this.setState({
          playing: true
        })
    }
    
    handlePause () {
        this.setState({
          playing: false
        })
    }

    render () {
        if (this.state.playing === true) {
            return (
                <div>
                    <ReactHowler
                        src= {this.music}
                        loop={true}
                        html5={true}
                        playing={true}
                    />
                    <div className='pauseBtn' onClick={this.handlePause}>
                        <FontAwesomeIcon icon={faPause} />
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='playBtn' onClick={this.handlePlay}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            )
        }
    }
}
export default Audio;