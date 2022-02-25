import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Playlists from '../components/Playlists'

class PlaylistsIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Newsletter" />
        <Playlists />
      </Layout>
    )
  }
}

export default PlaylistsIndex