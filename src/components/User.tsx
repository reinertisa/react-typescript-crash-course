import {useState} from 'react';
type AuthUser = {
    name: string
    email: string
}

export default function User() {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => setUser({
        name: 'isa',
        email: 'isa@gmail.com'
    });

    const handleLogout = () => setUser(null);

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {user && <div>User name is {user.name}</div>}
            {user && <div>User email is {user.email}</div>}
        </div>
    )
}