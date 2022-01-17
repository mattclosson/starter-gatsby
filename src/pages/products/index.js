import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import ProductsPreview from '../../components/products-preview'

class ProductsIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allShopifyProduct.nodes')
    console.log(products)

    return (
      <Layout>
        <Seo title="Products" />
        <ProductsPreview products={products} />
      </Layout>
    )
  }
}

export default ProductsIndex

export const pageQuery = graphql`
  query ProductsIndexQuery {
    allShopifyProduct(sort: {fields: title}) {
      nodes {
        title
        shopifyId
        handle
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
