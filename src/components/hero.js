import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content, author, rawDate, publishDate, timeToRead }) => (
  <div className={styles.hero}>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <span className={styles.author}>
      {author} &middot;{' '}
      <time dateTime={rawDate}>{publishDate}</time> –{' '}
      {timeToRead} minute read
    </span>
  </div>
)

export default Hero
