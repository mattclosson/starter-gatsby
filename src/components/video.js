import React from "react"
import * as styles from './video.module.css'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className={styles.video}>
        <video controls autoPlay muted width="1044px">
            <source src={videoSrcURL} type="video/mp4" />
        </video>
    </div>
)
export default Video