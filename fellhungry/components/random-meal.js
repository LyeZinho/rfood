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
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'


//Chakra UI Typography components
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

//React / Next
import React, { useState, useEffect } from 'react';

//Utils
import ProcessResponseData from '../utils/processData';


function CreateIngredientsList(meal) {
    let ingredients = [];
    let measure = [];
    let ingredientList = [];
    /*
    Values in the meal data for the ingredients isn´t an array
    but last char is a nuber in 1 to 20 
    read all the ingredients and create an array of ingredients
    ignore the values with a empty string or string written as "null"

    after that do the same for the measures

    join the ingredients and measures "ingredient - measure" 
    then return the array
    */

    for (let i = 1; i < 21; i++) {
        if (meal.hasOwnProperty(`strIngredient${i}`)) {
            if (meal[`strIngredient${i}`] !== "") {
                if (meal[`strIngredient${i}`] !== "null") {
                    ingredients.push(meal[`strIngredient${i}`]);
                }
            }
        }
    }


    for (let i = 1; i < 21; i++) {
        if (meal.hasOwnProperty(`strMeasure${i}`)) {
            if (meal[`strMeasure${i}`] !== "") {
                if (meal[`strMeasure${i}`] !== "null") {
                    measure.push(meal[`strMeasure${i}`]);
                }
            }
        }
    }

    for (let i = 0; i < ingredients.length; i++) {
        ingredientList.push(`${ingredients[i]} - ${measure[i]}`);
    }

    return ingredientList;
}


export default function RandomMeal(){
    //Api
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    //Meal data object
    const [meal, setMeal] = useState({});

    //Ingredients data list
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setMeal(response.data.meals[0]);
            let ingredientList = CreateIngredientsList(response.data.meals[0]);
            // Insert each ingredient in the ingredients list
            setIngredients(ingredientList);
        })
        .catch(error => {
            console.log(error);
        }
        );
    }, [url]);


    // Text modal
    const [TextShow, seTextShow] = React.useState(false)
    const handleToggle = () => seTextShow(!TextShow)

    // Ingredients modal
    const [IngredientsShow, setIngredientsShow] = React.useState(false)
    const handleToggleIngredients = () => setIngredientsShow(!IngredientsShow)
    	
    return (
        <Box maxW={500}>
            <Stack direction='column' spacing={4} alignItems='center'>
            {/* Heading */}
                <Box>
                    <Heading align="left">
                        {meal.strMeal}
                    </Heading>
                </Box>
            {/* Badges */}
                <Stack direction='row'>
                    <Box>
                        <Badge color={'black'} variant={'subtle'} bgColor={'yellow'}>
                            {meal.strCategory}
                        </Badge>
                    </Box>
                    <Box>
                        <Badge color={'black'} variant={'subtle'} bgColor={'cyan'}>
                            {meal.strArea}
                        </Badge >
                    </Box> 
                </Stack>
            <Divider />
            {/* Image */}
                <Box>
                    <Image width="400px" height="400px" src={meal.strMealThumb} alt={meal.strMeal} />
                </Box>
            <Divider />
            {/* Ingredients */}
                <Box justifySelf={'start'}>
                <Heading>
                        Ingredients
                    </Heading>
                    <Collapse startingHeight={20} in={IngredientsShow}>
                        <UnorderedList alignItems={'start'}>
                            {ingredients.map((ingredient, index) => (
                                <ListItem key={index}>
                                    {ingredient}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Collapse>
                    <Button size='sm' onClick={handleToggleIngredients} mt='1rem'>
                        Show {IngredientsShow ? 'Less' : 'More'}
                    </Button>
                </Box>

            {/* Instructions */}
                <Box>
                    <Heading>
                        Instructions
                    </Heading>
                    <Collapse startingHeight={20} in={TextShow}>
                        <Text fontStyle={'italic'} fontWeight={'light'}>
                            {meal.strInstructions}
                        </Text>
                    </Collapse>
                    <Button size='sm' onClick={handleToggle} mt='1rem'>
                        Show {TextShow ? 'Less' : 'More'}
                    </Button>
                </Box>


            {/* Youtube */}
            </Stack>
            <Box paddingTop={10}>
                    <AspectRatio maxW='560px' maxH={500} ratio={1} paddingTop={5}>
                    <iframe
                        title='naruto'
                        src={meal.strYoutube}
                        allowFullScreen = {true}
                    />
                    </AspectRatio>
                </Box>
        </Box>
    )
}