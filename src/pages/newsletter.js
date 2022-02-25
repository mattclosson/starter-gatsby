import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class NewsletterIndex extends React.Component {
  render() {
    

    return (
      <Layout location={this.props.location}>
        <Seo title="Newsletter" />
        <div>Something</div>
      </Layout>
    )
  }
}

export default NewsletterIndex