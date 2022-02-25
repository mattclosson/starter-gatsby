import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'

import * as styles from './About.module.css'

const About = ({ mixes }) => {

    return (
        <Container>
            <div className={styles.aboutContainer}>
                <p>Avanti is a multidisciplinary record label, management and creative studio founded in Stockholm in 2015.<br />
                Our vision is to act as an independent incubator active in the landscape of music, culture, fashion and technology.<br />
                We believe in using transparency and co-creation to achieve a more sustainable landscape for our artists and creators.</p>
                <p><a href="https://www.getrevue.co/profile/avanti/issues/001-786636?via=twitter-profile&client=DesktopWeb&element=read-sample-issue" target="_blank">Read the Newsletter</a></p>
            </div>
        </Container>
    )
}

export default About
