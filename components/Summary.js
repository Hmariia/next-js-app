import dataStyles from '../styles/Userdata.module.css'

const Summary = ({ user }) => {
  return (
    <form className={dataStyles.form}>
        <textarea type="name" value={user.summary} disabled/>
    </form>
  )
}

export default Summary