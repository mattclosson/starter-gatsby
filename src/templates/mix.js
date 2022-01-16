import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'
import Audio from '../components/audio'
import Container from '../components/container'

class mixTemplate extends React.Component {
    render() {
        const mix = get(this.props, 'data.contentfulMixes')

        return (
            <Layout location={this.props.location}>
                <Seo
                    title={mix.title}
                />
                <Container>
                    <h1>{mix.title}</h1>
                    <Audio audioUrl={mix.audio.file.url} />
                    <div
                        className={styles.body}
                        dangerouslySetInnerHTML={{
                            __html: mix.body.childMarkdownRemark?.html,
                        }}
                    />
                </Container>
            </Layout>
        )
    }
}

export default mixTemplate

export const pageQuery = graphql`
  query MixesBySlug(
    $slug: String!
  ) {
    contentfulMixes(slug: {eq: $slug}) {
      title
      audio {
        file {
          url
        }
      }
      body { 
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
