import * as React from "react"
import { Link } from "gatsby"

export function CartButton({ quantity }) {
    return (
        <Link
            aria-label={`Shopping Cart with ${quantity} items`}
            to="/cart"
        >
            Cart {quantity > 0 && <span>{quantity}</span>}
        </Link>
    )
}