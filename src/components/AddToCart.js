import * as React from "react"
import { StoreContext } from "../context/store-context"

import * as styles from './AddToCart.module.css'

export default function AddToCart({ variantId, quantity, available, ...props }) {
    const { addVariantToCart, loading } = React.useContext(StoreContext)
    console.log(variantId, quantity)
    function addToCart(e) {
        e.preventDefault()
        addVariantToCart(variantId, quantity)
    }

    return (
        <button
            type="submit"
            class={styles.addBtn}
            onClick={addToCart}
            disabled={!available || loading}
            {...props}
        >
            {available ? "Add to Cart" : "Out of Stock"}
        </button>
    )
}