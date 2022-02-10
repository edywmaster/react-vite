import { Box, Section, Container, Text, Grid, Image } from '../components'
import { Header } from '../custom/Header'
import { TopBG } from '../custom/BackGround'
import { Helmet } from 'react-helmet-async'
import { Hero } from '../custom/Hero'


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
      <Hero />
    </Box>
  )
}
