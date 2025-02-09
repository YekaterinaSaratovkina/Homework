import React, { useEffect, useState } from 'react'
import AlbomsItemList from '../../components/AlbomsItemList/AlbomsItemList'
import styles from './Albums.module.css'
const Albums = () => {


    const [albumsData, setAlbomsData] = useState([]);

    useEffect(() => {
        const getAlbomsData = async () => {
            const res = await fetch(`http://jsonplaceholder.typicode.com/albums`);
            const data = await res.json();
            setAlbomsData(data);
        }
        getAlbomsData();
    }, [])

    return (
        <div className={styles.wrapper}>
            {albumsData.map((item) => (
                <AlbomsItemList
                    id={item.id}
                    title={item.title}
                />
            ))}
        </div>
    )
}

export default Albums