//Next / React 
import Head from 'next/head'
import styles from '../styles/Home.module.css'

//Chakra Grid components
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'

//Chakra UI components
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'


//Chakra UI Typography components
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

//Components
import RandomMeal from '../components/random-meal'
import SponsorModal from '../components/sponsor'

//Theme
import theme from '../components/theme'

//Color Mode
import { ColorModeScript } from '@chakra-ui/react'


function Refresh() {
  window.location.reload(false);
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>rFood</title>
        <meta name="description" content="🍔Random food recipes generator😋" />
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      {/* Theme */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Stack direction={'column'} spacing={50} p={30}>
        <Center paddingTop={50}>
            <Heading as="h1" size="2xl">
              🍔 Random Meal
              </Heading>
          </Center>
          <Center paddingTop={20}>
            <Box>
              <Box>
                <Button onClick={Refresh} shadow={'dark-lg'}>
                  😋 Get more random foods
                </Button>
              </Box>
            </Box>
          </Center>
            <Center paddingTop={1}>
              <Box>
                <SponsorModal />
              </Box>
          </Center>
          <Center>
            <Box paddingTop={90}>
              <Heading>Scrooll down</Heading>
            </Box>
        </Center>
      </Stack>
      
      <Box paddingBottom={100} paddingTop={200} p={30}>
        <Stack spacing={8} direction={'row'} >
          <Box overflowX={'-moz-initial'} >
            <RandomMeal />
          </Box>
          <Box overflowX={'-moz-initial'} >
            <RandomMeal />
          </Box>
          <Box overflowX={'-moz-initial'} >
            <RandomMeal />
          </Box>
        </Stack>
      </Box>
    </div>
  )
}
