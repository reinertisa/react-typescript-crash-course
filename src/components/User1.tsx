import {useState} from 'react';

type AuthUser = {
    name: string
    email: string
}

export default function User1() {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => setUser({
        name: 'isa',
        email: 'test@gmail.com'
    })

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}