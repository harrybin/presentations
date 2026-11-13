export function findSessionById(sessions, id) {
  return sessions.find((session) => session.id === id) ?? null
}

export function filterSessions(sessions, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase()

  if (!normalizedQuery) {
    return sessions
  }

  return sessions.filter((session) =>
    `${session.title} ${session.speaker} ${session.track}`
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  )
}

export function toggleFavorite(favorites, sessionId) {
  return favorites.includes(sessionId)
    ? favorites.filter((id) => id !== sessionId)
    : [...favorites, sessionId]
}
