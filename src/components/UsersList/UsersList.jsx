import React, { useEffect, useState } from 'react';
import styles from "./UsersList.module.css";
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);

                const res = await fetch("http://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            } catch {
                console.log("error");
            } finally {
                setIsLoading(false);
            }

        }
        fetchUsers();
    }, [])

    if (isLoading) {
        return (
            <div>
                Идет загрузка...
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            {users.map((item) => (
                <UsersListItem
                    // {...item} сразу весь обьект
                    id={item.id}
                    name={item.name}
                    website={item.website}
                    phone={item.phone}
                />
            ))}
        </div>
    )
}

export default UsersList