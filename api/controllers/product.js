import { db } from '../db.js'

export const getProducts = (req, res) => {
  const q = 'SELECT * FROM produtos'

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}
