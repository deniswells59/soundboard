import React, { Component } from 'react';
import SoundByte from '../SoundByte';
import sounds from '../../sounds';

class SoundBoard extends Component {

   play(file) {
    this.player.pause();
    this.player.src = `/sounds/${file}`;
    this.player.play();
  }

  render() {
    return (
      <div>
        <audio ref={(node => this.player = node)}></audio>
        {sounds.map((sound, key) => (
          <SoundByte key={key} play={this.play.bind(this)} {...sound} />)
        )}
      </div>
    );
  }
}

export default SoundBoard;
