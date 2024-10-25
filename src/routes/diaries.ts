import Express from 'express'

const router = Express.Router()

router.get('/', (req, res) => {
  res.send('fetc diaries')
})

router.post('/', (req, res) => {
  res.send('Saving diaries')
})

export default router
