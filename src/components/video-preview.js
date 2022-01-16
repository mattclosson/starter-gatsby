import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'
import Video from './video'

const VideoPreview = ({ videos }) => {
    const recentVideo = videos[0].video.file.url

    console.log(recentVideo)
    return (
        <Container>
            <Video videoSrcURL={recentVideo} />
        </Container>
    )
}

export default VideoPreview
