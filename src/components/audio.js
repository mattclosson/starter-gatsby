import React from "react"
import * as styles from './audio.module.css'

const Audio = ({ audioUrl, ...props }) => (
    <div className={styles.audio}>
        <audio
            autoplay
            controls
            src={audioUrl}>
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    </div>
)
export default Audio