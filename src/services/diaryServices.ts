import { DiaryEntry, NonSentiveInfoDiaryEntry, Visibility, Weather } from '../types'
import diaryData from './diaries.json'
import { v4 as uuidv4 } from 'uuid' // Importa la función uuid

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSentiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id, date, weather, visibility
    }
  })
}

export const addEntry = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  const newDiaryEntry = {
    id: uuidv4(),
    date,
    weather,
    visibility,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
