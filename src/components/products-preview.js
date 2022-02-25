
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
            <div className={styles.productContainer}>
                <ul className={styles.productUl}>
                    {products.map((product) => (
                        <li key={product.shopifyId}>
                            <h3>
                                <Link to={`/shop/${product.handle}`}>
                                    <div className={styles.productImg}>
                                        <img src={product.images[0].originalSrc} />
                                    </div>
                                    {product.title}
                                    <p>{product.description}</p>
                                </Link>
                            </h3>
                            <span>${product.priceRangeV2.maxVariantPrice.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}
export default ProductsPreview