import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PhotoAlbom from '../../components/PhotoAlbom/PhotoAlbom';
import styles from './SelectingAnAlbumWithPhotos.module.css'

const SelectingAnAlbumWithPhotos = () => {
    const { albumId } = useParams();
    console.log(albumId);

    const [albumData, setAlbomData] = useState([]);

    useEffect(() => {
        const getAlbomData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            const data = await res.json();
            setAlbomData(data)
            console.log(data);

        }
        getAlbomData();

    }, [albumId]);

    return (
        <div className={styles.wrapper}>

            {albumData.map((item) => (
                <PhotoAlbom
                    {...item}
                // id={item.id}
                // albumId={item.albumId}
                // title={item.title}
                // url={item.url}
                />
            ))}


        </div>
    )
}



export default SelectingAnAlbumWithPhotos