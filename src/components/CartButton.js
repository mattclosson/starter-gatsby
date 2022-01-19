import * as React from "react"
import { Link } from "gatsby"

import * as styles from './navigation.module.css'

export function CartButton({ quantity }) {
    return (
        <Link
            aria-label={`Shopping Cart with ${quantity} items`}
            to="/cart"
        >
            Cart {quantity > 0 && <div className={styles.quantity}>{quantity}</div>}
        </Link>
    )
}