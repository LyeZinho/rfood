//Axios
const axios = require('axios');

//Chakra Grid components
import { Box, Flex } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider, Divider } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

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
import { Badge } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'

//Chakra UI Typography components
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

//React / Next
import React, { useState, useEffect } from 'react';

//Utils
import ProcessResponseData from '../utils/processData';



export default function RandomMeal(){
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";


    //Make a call to the API to get a random meal
    //and set the name of the meal to the state
    const [meal, setMeal] = useState({});

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setMeal(response.data.meals[0]);
        }
        )
        .catch(error => {
            console.log(error);
        }
        );
    }, []);

    //If the meal is null, return a skeleton
    if(meal === null){
        return(
            <Box>
                <Skeleton
                    height="100px"
                    width="100px"
                    rounded="full"
                    mx="auto"
                    my="20px"
                />
            </Box>
        );
    }

    return (
        <Stack direction='column' maxW={500} spacing={5}>
            <Box>
                <Heading align="left">
                    {meal.strMeal}
                </Heading>
                <Badge variantColor="green">
                    {meal.strCategory}
                </Badge >
                <Badge variantColor="yellow">
                    {meal.strArea}
                </Badge > 
            </Box>
            <Divider />
            <Box>
                <Image width="100%" height="100%" src={meal.strMealThumb} alt={meal.strMeal} />
            </Box>
        </Stack>
    )
}