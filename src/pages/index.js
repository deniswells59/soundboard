import React, { Component } from 'react'

import Header from '../components/Header';
import SoundBoard from '../components/SoundBoard';
import Loader from '../components/Loader';

import loadEverything from '../utils/loadEverything';

class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    loadEverything();
  }

  renderPage = () => (
    <div>
      <Header />
      <SoundBoard />
    </div>
  )

  render() {
    return (
      <div>
        {
          this.state.loading ?
            <Loader /> :
            this.renderPage()
        }
      </div>
    );
  }
}

export default IndexPage
