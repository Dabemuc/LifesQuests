import React from "react"

interface Props {
    user: any, 
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleSignOut: Function
}

export default function loginWrapper(props: Props) {
    return (
        <div className='loginWrapper'>
            <div id="googleSignIn" hidden={props.user? true: false}></div>
            { props.user &&
                <div>
                    <img src={props.user.picture} className="dropdown-toggle profile-pic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                    <div className="dropdown-menu sign-out-btn" aria-labelledby="profile dropdown">
                        <button className="dropdown-item" onClick={() => props.handleSignOut()}>Sign out</button>
                    </div>
                </div>
            }
        </div>
    )
}