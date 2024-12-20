export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number | string
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSentiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
