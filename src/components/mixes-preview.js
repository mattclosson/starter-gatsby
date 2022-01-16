import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './mixes-preview.module.css'

const MixesPreview = ({ mixes }) => {
    if (!mixes) return null
    if (!Array.isArray(mixes)) return null

    return (
        <Container>
            <ul className={styles.mixesList}>
                {mixes.map((mix) => {
                    return (
                        <li>
                            <Link to={`/mix/${mix.slug}`}>{mix.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}

export default MixesPreview
