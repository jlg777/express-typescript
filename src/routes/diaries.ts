import Express from 'express'
import { findById, getEntriesWithoutSensitiveInfo } from '../services/diaryServices'

const router = Express.Router()

router.get('/', (req, res) => {
  res.send(getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = findById(Number(req.params.id))
  res.send(diary)
})

router.post('/', (req, res) => {
  res.send('Saving diaries')
})

export default router
