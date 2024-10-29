import Express from 'express'
import { addEntry, findById, getEntriesWithoutSensitiveInfo } from '../services/diaryServices'

const router = Express.Router()

router.get('/', (req, res) => {
  try {
    res.send(getEntriesWithoutSensitiveInfo())
  } catch (error) {
    res.send(getEntriesWithoutSensitiveInfo())
  }
})

router.get('/:id', (req, res) => {
  try {
    const diary = findById(Number(req.params.id))
    res.send(diary)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la entrada del diario.' })
  }
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = addEntry(date, weather, visibility, comment)
  res.json(newDiaryEntry)
})

export default router
