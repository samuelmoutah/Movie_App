import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'


class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    axios.get("https://yts-proxy.now.sh/list_movies.json")
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;
