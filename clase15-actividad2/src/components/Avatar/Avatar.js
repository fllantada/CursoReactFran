import styles from './Avatar.module.css'

import Button from "../Button/Button"

const Avatar = ({ user, onSignOut }) => {
    return (
        <div className={styles.avatar}>
            <img src={user.photoUrl} className={styles.userphoto} alt={user.name}/>
            <div className={styles.rightside}>
                <label className={styles.name}>{user.name}</label>
                <Button color='red' callback={onSignOut} style={{ padding: 5, marginTop: 5 }}>Logout</Button>
            </div>
        </div>
    )
}

export default Avatar