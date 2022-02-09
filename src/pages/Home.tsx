import { Box, Container, Text } from '../components'
import { Header } from '../custom/Header'
import { TopBG } from '../custom/BackGround'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <Box>
      <Helmet>
        <title>EWM</title>
        <meta
          name="description"
          content="EWM Application Development"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <TopBG />
      <Header />
      <Container size="3" css={{
        px: '$2',
        '@bp2': {
          px: '$7'
        }
      }}>
      </Container>
    </Box>
  )
}
