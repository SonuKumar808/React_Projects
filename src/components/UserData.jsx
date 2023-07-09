import React from "react";

const UserData = ({ users }) => {
    return (
        <>
            {
                users.map((currUser) => {
                    const { id, name, email, address } = currUser;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}


export default UserData;