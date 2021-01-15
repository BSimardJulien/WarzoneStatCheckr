import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'

export default function BattleNetUsername() {

    const router = useRouter()

    const [username, setUsername] = useState('')
    const [battleTag, setBattleTag] = useState('')

    const handleChangeUsername = (event) => {
        setUsername(event.currentTarget.value)
    }

    const handleChangeBattleTag = (event) => {
        setBattleTag(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        router.push(`/${username}/${battleTag}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="userNameInput">UserName</label>
                <input type="text" className="form-control" id="userNameInput" placeholder="UserName" value={username} onChange={handleChangeUsername} />
                <label for="battleTagInput">BattleTag</label>
                <input type="text" className="form-control" id="battleTagInput" placeholder="battleTag" value={battleTag} onChange={handleChangeBattleTag} />
                <input type="submit" className="btn btn-primary mt-2" value="Submit" />
            </form>
        </div>
    )
}
