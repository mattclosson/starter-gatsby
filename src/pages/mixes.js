import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import MixesPreview from '../components/mixes-preview'

class MixesIndex extends React.Component {
    render() {
        const mixes = get(this.props, 'data.allContentfulMixes.nodes')
        console.log(mixes)

        return (
            <Layout location={this.props.location}>
                <MixesPreview mixes={mixes} />
            </Layout>
        )
    }
}

export default MixesIndex


export const pageQuery = graphql`
  query MixesIndexQuery {
    allContentfulMixes {
      nodes {
        title
        slug
      }
    }
  }
`