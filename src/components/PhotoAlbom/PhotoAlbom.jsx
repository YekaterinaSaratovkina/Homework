import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PhotoAlbom.module.css'

const PhotoAlbom = (props) => {
    console.log(props);

    return (
        <div className={styles.wrapper}>
            <Link to={`/album/${props.albumId}`}>{props.id}</Link>
            <img src={props.url} alt="#" />
            <h4>{props.title}</h4>
        </div>
    )
}

export default PhotoAlbom