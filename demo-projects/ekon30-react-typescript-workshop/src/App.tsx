import { AppBar, Box, Card, CardContent, Chip, Container, Stack, Toolbar, Typography } from '@mui/material'
import { sessions } from './data/sessions'

export default function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            EKON 30 · Session-Katalog
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Programm entdecken
            </Typography>
            <Typography color="text.secondary">
              Ein Starterprojekt für die geführten React- und TypeScript-Übungen.
            </Typography>
          </Box>
          {sessions.map((session) => (
            <Card key={session.id} variant="outlined">
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <Chip size="small" label={session.track} color="primary" variant="outlined" />
                  <Typography variant="body2" color="text.secondary">
                    {new Intl.DateTimeFormat('de-DE', {
                      hour: '2-digit',
                      minute: '2-digit',
                    }).format(new Date(session.startsAt))}
                  </Typography>
                </Stack>
                <Typography variant="h6" component="h3">
                  {session.title}
                </Typography>
                <Typography color="text.secondary">{session.speaker}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
