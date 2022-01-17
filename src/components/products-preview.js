
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Container from "../components/container"

import * as styles from './products-preview.module.css'

const ProductsPreview = ({ products }) => {
    if (!products) return null
    if (!Array.isArray(products)) return null

    return (
        <Container>
            <h1>Products</h1>
            <div className={styles.productContainer}>
                <ul className={styles.productUl}>
                    {products.map((product) => (
                        <li key={product.shopifyId}>
                            <h3>
                                <img src={product.images[0].originalSrc} />
                                <Link to={`/products/${product.handle}`}>{product.title}</Link><br />
                                ${product.priceRangeV2.maxVariantPrice.amount}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}
export default ProductsPreview