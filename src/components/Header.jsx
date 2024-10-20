import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProviers'

function Header() {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign Out')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <nav>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">daisyUI</button>
                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>

                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button className="btn btn-xs ml-3" onClick={handleLogOut}>Sign Out</button>

                        </>
                        :
                        <>
                            <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                            <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
                        </>
                }
            </div>
        </nav>
    )
}

export default Header
