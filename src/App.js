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
  theme,
} from '@chakra-ui/react';
import { BsInstagram, BsFacebook, BsTelegram } from 'react-icons/bs';
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
    </ChakraProvider>
  );
}

export default App;
