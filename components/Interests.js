import dataStyles from '../styles/Userdata.module.css'

const Interests = ({ user }) => {
  return (
    <form className={dataStyles.form}>
        <textarea id={dataStyles.name} type="name" value={user.interests} disabled/>
    </form>
  )
}

export default Interests