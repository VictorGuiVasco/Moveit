import styles from '../styles/components/Profile.module.css'

function Profile() {
  return(
    <div className={styles.profileContainer} >
      <img src="https://github.com/VictorGuiVasco.png" alt="Avatar"/>
      <div>
        <strong>Victor Guilherme</strong>
        <p>
          <img src='icons/level.svg' alt='level' />
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile