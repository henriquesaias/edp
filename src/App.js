import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Text,
  Link,
  VStack,
  Stack,
  Grid,
  Flex,
  Card,
  Image,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Heading,
  CardFooter,
  extendTheme
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { BsInstagram, BsFacebook, BsTelegram, BsLink, BsWhatsapp, BsMailbox } from 'react-icons/bs';
import { SiLinktree } from "react-icons/si";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LangSwitcher } from './LangSwitcher';
import { Logo } from './Logo';

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        bg: mode('#FEFEFE', '#231F20')(props)
      },
      ".chakra-card": {
        "--card-bg": mode('#FEFEFE !important', 'rgba(42,38,39) !important')(props)
      }
    })
  },
  config: {
    initialColorMode: "dark",
  }
})

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') === "true")

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100svh" p={3}>
          <Stack justifySelf="flex-end" direction='row'>
            <LangSwitcher lang={lang} setLang={setLang} />
            <ColorModeSwitcher />
          </Stack>

          <VStack spacing={8}>
            <Logo h="180px" pointerEvents="none" borderRadius='2px' />

            <VStack spacing={2}>
              <Text maxW="calc(100vw - 2em)">
                {lang ? 'Todos os encontros de ecstatic em Portugal' : 'All ecstatic dance gatherings in Portugal'}
              </Text>
            </VStack>

            <VStack spacing={4}>
              <Link
                href="https://www.instagram.com/ecstaticdanceportugaloficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size='lg' w={600} maxW='90vw' leftIcon={<BsInstagram />} colorScheme='gray' variant='solid'>
                  Instagram
                </Button>
              </Link>

              <Link
                href="http://www.facebook.com/groups/ecstaticdanceportugal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size='lg' w={600} maxW='90vw' leftIcon={<BsFacebook />} variant='solid'>
                  {lang ? 'Grupo de Facebook' : 'Facebook group'}
                </Button>
              </Link>

              <Link
                href="https://t.me/ecstaticdanceportugal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size='lg' w={600} maxW='90vw' leftIcon={<BsTelegram />} variant='solid'>
                  Telegram
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Grid>
      </Box>

      <Text fontSize="xl" textAlign="center" mb={8}>
        {lang ? 'Encontros de Norte a Sul' : 'Gatherings from North to South'}
      </Text>

      <RegionsAccordion language={lang} />

    </ChakraProvider>
  );
}

function RegionsAccordion(language) {
  // const { colorMode } = useColorMode();

  const renderIcon = (link) => {
    if (link.name === 'instagram') {
      return <BsInstagram />
    } else if (link.name === 'telegram') {
      return <BsTelegram />
    } else if (link.name === 'whatsapp') {
      return <BsWhatsapp />
    } else if (link.name === 'facebook') {
      return <BsFacebook />
    } else if (link.name === 'linktree') {
      return <SiLinktree />
    } else if (link.name === 'email') {
      return <BsMailbox />
    }
    else {
      return <BsLink />
    }
  }

  const ecstaticProjectsNorth = [
    {
      name: 'Ecstatic Dance Porto',
      image: 'https://i.postimg.cc/7hTVLDMM/porto.webp',
      links: [
        { name: 'email', url: 'ecstaticdanceporto@gmail.com' },
        { name: 'telegram', url: 'https://t.me/ecstaticdanceporto' },
        { name: 'whatsapp', url: 'https://chat.whatsapp.com/FHSe1sVhcn33Cuj4eyoS4X' }
      ]
    },
    {
      name: 'Ecstatic Dance Gaya',
      image: 'https://i.postimg.cc/D0WCb1FG/gaya.webp',
      links: [
        { name: 'site', url: 'https://ecstaticdancegaya.pt/' },
        { name: 'instagram', url: 'https://www.instagram.com/ecstaticdancegaya/' },
        { name: 'linktree', url: 'http://linktr.ee/ecstaticdancegaya' }
      ]
    }
  ]

  const ecstaticProjectsCenter = [
    {
      name: 'Ecstatic Dance Coimbra',
      image: 'https://i.postimg.cc/nLH0Gypp/coimbra.webp',
      links: [
        { name: 'instagram', url: 'https://instagram.com/ecstaticdancecoimbra' },
        { name: 'facebook', url: 'https://facebook.com/ecstaticdancecoimbra' },
      ]
    }
  ]

  const ecstaticProjectsLisbon = [
    {
      name: 'Ecstatic Dance Ericeira',
      image: 'https://i.postimg.cc/1XLv045j/ericeira.webp',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'telegram', url: 'https://t.me/ecstaticdanceericeira' },
      ]
    },
    {
      name: 'Ecstatic Dance and Voice',
      image: 'https://i.postimg.cc/KYJQq08L/danceandvoice.webp',
      links: [
        { name: 'linktree', url: 'https://linktr.ee/ecstaticdanceandvoiceportugal' }
      ]
    },
    {
      name: 'Ecstatic Dance Sintra',
      image: 'https://i.postimg.cc/9M0bvyDk/sintra.webp',
      links: [
        { name: 'instagram', url: 'http://www.instagram.com/ecstaticdancesintra' },
        { name: 'facebook', url: 'http://www.facebook.com/ecstaticdancesintra' }
      ]
    },
    {
      name: 'Ecstatic Dance Lisboa',
      image: 'https://i.postimg.cc/wxP4Y4cQ/lisboa.webp',
      links: [
        { name: 'instagram', url: 'https://www.instagram.com/ecstaticdancelisboa' },
        { name: 'facebook', url: 'https://www.facebook.com/ecstaticdancelisboa' },
        { name: 'linktree', url: 'https://linktr.ee/ecstaticdancelisboa' }
      ]
    },

  ]

  const ecstaticProjectsSouth = [
    {
      name: 'Ecstatic Dance Algarve',
      image: 'https://i.postimg.cc/DZpjZxVF/algarve.webp',
      links: [
        { name: 'site', url: 'http://www.ecstaticsoulgathering.com/' },
        { name: 'instagram', url: 'https://www.instagram.com/ecstaticdancealgarve' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticsoulgathering' },
      ]
    }
  ]

  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" my={3}>{language.language ? 'Norte' : 'North'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex overflowX="auto" scrollSnapType="x mandatory" gap={8} pb='2em' 
            sx={{
              "&::-webkit-scrollbar": {
                width: "10px",
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(0,0,0,.3)",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              }
            }}>
              {ecstaticProjectsNorth.map(project => {
                return (<Card minW='min(calc(100vw - 2em), 20rem)' maxW='20rem' margin="auto" key={project.name} scrollSnapAlign="center">
                  <Image
                    loading="lazy"
                    src={project.image}
                    borderRadius="4px 4px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button key={link.url} leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
                          <small>{link.name}</small>
                        </Button>)
                      })
                    }
                  </CardFooter>
                </Card>)
              }).sort(() => .5 - Math.random())}
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" my={3}>{language.language ? 'Centro' : 'Center'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex overflowX="auto" scrollSnapType="x mandatory" gap={8} pb='2em' 
            sx={{
              "&::-webkit-scrollbar": {
                width: "10px",
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(0,0,0,.3)",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              }
            }}>
              {ecstaticProjectsCenter.map(project => {
                return (<Card minW='min(calc(100vw - 2em), 20rem)' maxW='20rem' margin="auto" key={project.name} scrollSnapAlign="center">
                  <Image
                    loading="lazy"
                    src={project.image}
                    borderRadius="4px 4px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button key={link.url} leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
                          <small>{link.name}</small>
                        </Button>)
                      })
                    }
                  </CardFooter>
                </Card>)
              }).sort(() => .5 - Math.random())}
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" my={3}>{language.language ? 'Área da Grande Lisboa' : 'Lisbon area'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex overflowX="auto" scrollSnapType="x mandatory" gap={8} pb='2em' 
            sx={{
              "&::-webkit-scrollbar": {
                width: "10px",
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(0,0,0,.3)",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              }
            }}>
              {ecstaticProjectsLisbon.map(project => {
                return (<Card minW='min(calc(100vw - 2em), 20rem)' maxW='20rem' margin="auto" key={project.name} scrollSnapAlign="center">
                  <Image
                    loading="lazy"
                    src={project.image}
                    borderRadius="4px 4px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button key={link.url} leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
                          <small>{link.name}</small>
                        </Button>)
                      })
                    }
                  </CardFooter>
                </Card>)
              }).sort(() => .5 - Math.random())}
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" my={3}>{language.language ? 'Sul' : 'South'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex overflowX="auto" scrollSnapType="x mandatory" gap={8} pb='2em' 
            sx={{
              "&::-webkit-scrollbar": {
                width: "10px",
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(0,0,0,.3)",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              }
            }}>
              {ecstaticProjectsSouth.map(project => {
                return (<Card minW='min(calc(100vw - 2em), 20rem)' maxW='20rem' margin="auto" key={project.name} scrollSnapAlign="center">
                  <Image
                    loading="lazy"
                    src={project.image}
                    borderRadius="4px 4px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button key={link.url} leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
                          <small>{link.name}</small>
                        </Button>)
                      })
                    }
                  </CardFooter>
                </Card>)
              }).sort(() => .5 - Math.random())}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default App;
