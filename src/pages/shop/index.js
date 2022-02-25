import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import ProductsPreview from '../../components/products-preview'

class ShopIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allShopifyProduct.nodes')
    console.log(products)

    return (
      <Layout>
        <Seo title="Shop" />
        <ProductsPreview products={products} />
      </Layout>
    )
  }
}

export default ShopIndex

export const pageQuery = graphql`
  query ShopIndexQuery {
    allShopifyProduct(sort: {fields: title}) {
      nodes {
        title
        shopifyId
        handle
        description
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        images {
          originalSrc
        }
      }
    }
  }
`
