import React from 'react';
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
  theme,
  useColorMode
} from '@chakra-ui/react';
import { BsInstagram, BsFacebook, BsTelegram, BsLink, BsWhatsapp, BsMailbox } from 'react-icons/bs';
import { SiLinktree } from "react-icons/si";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LangSwitcher } from './LangSwitcher';
import { Logo } from './Logo';

function App() {
  const [lang, setLang] = React.useState(true)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100svh" p={3}>
          <Stack justifySelf="flex-end" direction='row'>
            <LangSwitcher lang={lang} setLang={setLang} />
            <ColorModeSwitcher />
          </Stack>

          <VStack spacing={8}>
            <Logo h="96px" pointerEvents="none" borderRadius='full' />

            <VStack spacing={2}>
              <Text fontWeight='bold'>
                @ecstaticdanceportugal
              </Text>

              <Text>
                {lang ? 'Todos os Encontros de Ecstatic em Portugal' : 'All Ecstatic Dance Gatherings in Portugal'}
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

      <Heading as="h2" textAlign="center" mb={16}>
        {lang ? 'Encontros de Norte a Sul' : 'Gatherings from North to South'}
      </Heading>

      <MyComponent language={lang} />

    </ChakraProvider>
  );
}

function MyComponent(language) {
  const { colorMode } = useColorMode();

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
      image: 'https://i.postimg.cc/Zqf5hGvy/porto.jpg',
      links: [
        { name: 'email', url: 'ecstaticdanceporto@gmail.com' },
        { name: 'telegram', url: 'https://t.me/ecstaticdanceporto' },
        { name: 'whatsapp', url: 'https://chat.whatsapp.com/FHSe1sVhcn33Cuj4eyoS4X' }
      ]
    },
    {
      name: 'Ecstatic Dance Gaya',
      image: 'https://i.postimg.cc/DZHfS1gv/gaya.png',
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
      image: 'https://i.postimg.cc/SKsjf5H1/ED-Coimbra-Logo.png',
      links: [
        { name: 'instagram', url: 'https://instagram.com/ecstaticdancecoimbra' },
        { name: 'facebook', url: 'https://facebook.com/ecstaticdancecoimbra' },
      ]
    }
  ]

  const ecstaticProjectsLisbon = [
    {
      name: 'Ecstatic Dance Ericeira',
      image: 'https://i.postimg.cc/cL4PLzdY/1.png',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'telegram', url: 'https://t.me/ecstaticdanceericeira' },
      ]
    },
    {
      name: 'Ecstatic Dance and Voice',
      image: 'https://i.postimg.cc/MZVCPRsc/LOGO-EDV.jpg',
      links: [
        { name: 'linktree', url: 'https://linktr.ee/ecstaticdanceandvoiceportugal' }
      ]
    },
    {
      name: 'Ecstatic Dance Sintra',
      image: 'https://i.postimg.cc/sX6HP0hM/sintra.jpg',
      links: [
        { name: 'instagram', url: 'http://www.instagram.com/ecstaticdancesintra' },
        { name: 'facebook', url: 'http://www.facebook.com/ecstaticdancesintra' }
      ]
    },
    
  ]

  const ecstaticProjectsSouth = [
    {
      name: 'Ecstatic Dance Algarve',
      image: 'https://i.postimg.cc/L6FdtcWf/algarve.jpg',
      links: [
        { name: 'site', url: 'http://www.ecstaticsoulgathering.com/' },
        { name: 'instagram', url: 'https://www.instagram.com/ecstaticdancealgarve' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticsoulgathering' },
      ]
    }
  ]

  return (
    <Box bgGradient={
      colorMode === "light"
        ? "linear(to-b, white, gray.300)"
        : "linear(to-b, gray.800, gray.700)"
    }>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{language.language ? 'Norte' : 'North'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjectsNorth.map(project => {
                return (<Card maxW='xs' margin="auto">
                  <Image
                    src={project.image}
                    borderRadius="8px 8px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
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


        {ecstaticProjectsCenter.length
          ? <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{language.language ? 'Centro' : 'Center'}</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
                {ecstaticProjectsCenter.map(project => {
                  return (<Card maxW='xs' margin="auto">
                    <Image
                      src={project.image}
                      borderRadius="8px 8px 0 0"
                    />
                    <CardFooter justifyContent='space-around' px={1}>
                      {
                        project.links.map(link => {
                          return (<Button leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
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
          : ''}


        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{language.language ? 'Área da Grande Lisboa' : 'Lisbon area'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjectsLisbon.map(project => {
                return (<Card maxW='xs' margin="auto">
                  <Image
                    src={project.image}
                    borderRadius="8px 8px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
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
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{language.language ? 'Sul' : 'South'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjectsSouth.map(project => {
                return (<Card maxW='xs' margin="auto">
                  <Image
                    src={project.image}
                    borderRadius="8px 8px 0 0"
                  />
                  <CardFooter justifyContent='space-around' px={1}>
                    {
                      project.links.map(link => {
                        return (<Button leftIcon={renderIcon(link)} colorScheme='gray' variant='ghost' onClick={() => { window.open(link.url, "_blank") }}>
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
