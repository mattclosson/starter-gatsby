import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import { StoreContext } from '../context/store-context'
import Container from '../components/container'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './cart.module.css'

export default function Cart() {
    const {
        removeLineItem,
        checkout,
        updateLineItem,
        loading,
    } = React.useContext(StoreContext)
    const emptyCart = checkout.lineItems.length === 0

    const handleCheckout = () => {
        window.open(checkout.webUrl)
    }
    console.log(checkout)

    return (
        <Layout>
            <Container>
                <div>
                    {emptyCart ? (
                        <div>
                            <h1>Your cart is empty</h1>
                        </div>
                    ) : (
                        <div className={styles.cart}>
                            <h1>Your cart</h1>
                            {checkout.lineItems.map((item) => (
                                <div className={styles.lineitems}>
                                    <img src={item.variant.image.src} />
                                    <div className={styles.right}>
                                        <h1>{item.title}</h1>
                                        <p>${item.variant.priceV2.amount}</p>
                                        <button
                                            onClick={() => removeLineItem(checkout.id, item.id)}
                                            className={styles.removeButton}
                                        >Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.total}>Total: <strong>{checkout.totalPriceV2.amount}</strong></div>
                            <button
                                onClick={handleCheckout}
                                disabled={loading}
                                className={styles.checkoutButton}
                            >
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </Layout>
    )
}