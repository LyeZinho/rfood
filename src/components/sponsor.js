//Next / React
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import React, { useState } from 'react';

//Styles
import styles from '../styles/Home.module.css'

//Chakra UI
import { Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'





export default function SponsorModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    
    const [isLoaded, setIsLoaded] = useState(false)
    return (
      <>
        <Button 
        onClick={onOpen}
        w="150px" 
        h="40px"
        shadow={'dark-lg'}
        >❤ Sponsor</Button>
        <Modal 
        closeOnOverlayClick={false} 
        isOpen={isOpen} 
        onClose={onClose}
        size='sm'
        >
        <ModalOverlay />
          <ModalContent>
            <ModalHeader>Support me 😀</ModalHeader>
            <ModalCloseButton />
              <ModalBody 
                padding={0}
                borderColor={colorMode}
              >
                <Skeleton
                  isLoaded={isLoaded}
                  fadeDuration={4}
                >
                  <iframe 
                    id='kofiframe' 
                    src='https://ko-fi.com/lyepedro/?hidefeed=true&widget=true&embed=true&preview=true' 
                    className={styles.sponsorIframe} 
                    title='lyepedro'
                    onLoad={() => setIsLoaded(true)}
                  />
                </Skeleton>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }