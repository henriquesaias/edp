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
import { BsInstagram, BsFacebook, BsTelegram, BsLink, BsWhatsapp } from 'react-icons/bs';
import { SiLinktree } from "react-icons/si";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LangSwitcher } from './LangSwitcher';
import { Logo } from './Logo';

function App() {
  const [lang, setLang] = React.useState(true)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
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

      <Heading as="h2" textAlign="center" mb={12}>
        {lang ? 'Encontros de Norte a Sul' : 'Gatherings from North to South'}
      </Heading>

      <MyComponent lang={lang} />

    </ChakraProvider>
  );
}

function MyComponent(lang) {
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
    }
    else {
      return <BsLink />
    }
  }

  const ecstaticProjects = [
    {
      name: 'Ecstatic Dance Ericeira',
      image: 'https://ecstaticdanceericeira.pt/logo.webp',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'telegram', url: 'https://t.me/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Lisboa',
      image: 'https://ecstaticdance.org/wp-content/uploads/2023/01/ED-Lisboa-avatar.jpg',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Sintra',
      image: 'https://ugc.production.linktr.ee/EWd353BRQZmW67Wfw36c_VngUxzmy770mj80T?io=true&size=avatar-v3_0',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'linktree', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Porto',
      image: 'https://ecstaticdance.org/wp-content/uploads/2023/09/3928C739-F042-4EFC-BD9A-C2EDD37B83B9.jpeg',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'linktree', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Coração de Cacau',
      image: 'https://ugc.production.linktr.ee/A5IWFP6SI6vCJ64R5J1K_YWw46D4KSs6cQA7U?io=true&size=avatar-v3_0',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'linktree', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Ericeira',
      image: 'https://ecstaticdanceericeira.pt/logo.webp',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'telegram', url: 'https://t.me/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Lisboa',
      image: 'https://ecstaticdance.org/wp-content/uploads/2023/01/ED-Lisboa-avatar.jpg',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Sintra',
      image: 'https://ugc.production.linktr.ee/EWd353BRQZmW67Wfw36c_VngUxzmy770mj80T?io=true&size=avatar-v3_0',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'linktree', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Ecstatic Dance Porto',
      image: 'https://ecstaticdance.org/wp-content/uploads/2023/09/3928C739-F042-4EFC-BD9A-C2EDD37B83B9.jpeg',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'linktree', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    },
    {
      name: 'Coração de Cacau',
      image: 'https://ugc.production.linktr.ee/A5IWFP6SI6vCJ64R5J1K_YWw46D4KSs6cQA7U?io=true&size=avatar-v3_0',
      links: [
        { name: 'site', url: 'https://ecstaticdanceericeira.pt' },
        { name: 'instagram', url: 'https://instagram.com/ecstaticdanceericeira' },
        { name: 'linktree', url: 'https://instagram.com/ecstaticdanceericeira' }
      ]
    }
  ]

  return (
    <Box bgGradient={
      colorMode === "light"
        ? "linear(to-b, white, gray.300)"
        : "linear(to-b, gray.800, gray.600)"
    }>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{lang ? 'Norte' : 'North'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjects.map(project => {
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
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{lang ? 'Centro' : 'Center'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjects.map(project => {
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
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{lang ? 'Área da Grande Lisboa' : 'Lisbon area'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjects.map(project => {
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
                <Heading as="h3" fontSize="xl" textAlign="center" mb={12}>{lang ? 'Sul' : 'South'}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexWrap="wrap" p={2} gap={8} pb='5em'>
              {ecstaticProjects.map(project => {
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
