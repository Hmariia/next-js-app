import { users } from '../../../data.json'

export default async function handler (req, res) {
    const {id} = req.query
    
    if (req.method === 'GET'){
        const filtered = users.filter(user => user.id === id)
        if (filtered.length > 0) {
            res.status(200).json(filtered[0])
        } else {
            res.status(404)
            .json({ message: `Article with the id of ${id} is not found` })
        }
    } else if (req.method === 'DELETE') {
        users.splice(id-1, 1)

        res.status(200).json(users)
    }
    else {
        res.status(404)
            .json({ message: `Error` })
    }
    
}