// app/javascript/components/Posts.js

import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
  state = {
    posts: ""
  };

  componentDidMount() {
    axios
      .get('/api/asistencias')
      .then(response => {
        this.setState({ posts: response.data.posts });
      })
  }

  renderAllPosts = () => {
    return(
      <ul>
        {this.state.posts}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderAllPosts()}
      </div>
    )
  }
}

export default Posts
