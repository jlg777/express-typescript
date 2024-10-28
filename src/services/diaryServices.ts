import { DiaryEntry, NonSentiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

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

export const addEntry = (): void => {}

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
