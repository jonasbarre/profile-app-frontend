import React from 'react'

export default function Profile(props) {
    return (
        <div>
            <h1>Welcome, {props.user.username}</h1>

        </div>
    )
}
