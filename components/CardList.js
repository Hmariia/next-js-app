import Card from "./Card"
import cardStyles from '../styles/Card.module.css'

const CardList = ({ users, onDelete }) => {
  return (
    <div className={cardStyles.cardBox}>
      {users.map((user, index) => (
        <Card onDelete={onDelete} user={user} key={index}/>
      ))}
    </div>
  )
}

export default CardList