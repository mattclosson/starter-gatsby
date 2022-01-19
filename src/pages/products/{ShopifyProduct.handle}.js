import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Tags from '../../components/tags'
import * as styles from './product.module.css'
import Container from '../../components/container'
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import AddToCart from "../../components/AddToCart"
import { StoreContext } from '../../context/store-context'

export default function Product({ data: { product } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  console.log(product)
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )


  return (
    <Layout>
      <Container>
        <Seo
          title={product.title}
        />
        <Container>
          <div class={styles.productContainer}>
            <div><GatsbyImage image={product.images[0].gatsbyImageData} /></div>
            <div>
              <h1>{product.title}</h1>
              <p>${product.priceRangeV2.maxVariantPrice.amount}</p>
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </div>
          </div>
        </Container>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query($handle: String!) {
    product: shopifyProduct(handle: { eq: $handle }) {
        title
        description
        productType
        tags
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        storefrontId
        images {
          # altText
          id
          gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
        }
        variants {
          availableForSale
          storefrontId
          title
          price
          selectedOptions {
            name
            value
          }
        }
        options {
          name
          values
          id
        }
      }
  }
`
