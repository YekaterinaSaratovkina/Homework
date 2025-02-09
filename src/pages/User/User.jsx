import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UsersListItem from '../../components/UsersListItem/UsersListItem';

const User = () => {
    const { id } = useParams();
    console.log(id);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            setUserData(data);
        }
        getUserData();
    }, [id])



    return (
        <div>
            <UsersListItem
                id={userData.id}
                name={userData.name}
                website={userData.website}
                phone={userData.phone}
            />
        </div>
    )
}

export default User