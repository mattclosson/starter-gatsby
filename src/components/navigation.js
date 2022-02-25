import React from 'react'
import { Link } from 'gatsby'
import { CartButton } from './CartButton'
import { StoreContext } from '../context/store-context'

import * as styles from './navigation.module.css'

function Navigation() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo} />
        {/* <span className={styles.navigationItem}>Avanti</span> */}
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/playlist/" activeClassName="active">
            Playlist
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/shop/" activeClassName="active">
            Shop
          </Link>
        </li>
        <li>
          <CartButton quantity={quantity} />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
