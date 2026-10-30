export type Mark = 'loud' | 'stretch' | 'soft' | 'plain'

export type Segment = {
  text: string
  mark?: Mark
  /** مکث بعد از این قطعه */
  pause?: 'short' | 'long'
  note?: string
  phon?: string
}

export type Block = {
  id: string
  title: string
  pageHint: string
  mood: string
  tip: string
  segments: Segment[]
}

export type SongLine = {
  text: string
  mark?: Mark
  stretchWords?: string[]
  note?: string
  phon?: string
}
