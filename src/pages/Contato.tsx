import { Helmet } from 'react-helmet-async'
import { Box, Container, Heading, Text } from '../components'
import { Header } from '../custom/Header'
import { TopBG } from '../custom/BackGround'

export function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato</title>
        <meta
          name="description"
          content="Entre em contato agora."
        />
        <link rel="canonical" href="/contato" />
      </Helmet>

      <Box>
        <TopBG />
        <Header />
        <Container size="5" css={{
          px: '$2',
          '@bp2': {
            px: '$7'
          }
        }}>
          <Heading size="3" css={{ my: '$3' }}>
            Contato
          </Heading>
          <Text>
            Ola mundo
          </Text>
        </Container>
      </Box>

    </>
  )
}
