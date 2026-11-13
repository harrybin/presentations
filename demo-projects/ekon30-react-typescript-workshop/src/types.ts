export interface Session {
  id: string
  title: string
  speaker: string
  track: string
  startsAt: string
}

export type ApiResult<T> = {
  data: T
  receivedAt: Date
}
