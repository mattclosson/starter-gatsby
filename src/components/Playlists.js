import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './playlists.module.css'

const Playlists = ({ mixes }) => {
    return (
        <Container>
            <div className={styles.playlistsContainer}>
                <iframe src="https://open.spotify.com/embed/playlist/5sMipkcj9LjYmKmFIfE4Ht" width="400" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </Container>
    )
}

export default Playlists
