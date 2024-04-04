import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const gotoHome = ()=>{
  //navigate to home 
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const tbStyling = {
    border:"2px solid black",
    borderRadius: '10px',
    margin: "auto",
    marginBottom:"20px",
    backgroundColor:"#f3e5f5"
  };
const wholeboxstyle = {
    padding:"30px",
    maring:"10px"
  };
const buttonStyle = {
    display: 'block',
    margin: '0 auto',
    marginBottom:"20px"
  };

const Guidlines = () => {
  return (
    <div>
   
      <Container style={tbStyling} maxWidth="lg" border="5px">
      Nutrient Density: Food composition refers to the distribution and proportion of nutrients present in different foods. It's essential to understand the nutrient density of various foods, as it helps in designing balanced and nutritious diets.
      Macronutrients: Macronutrients include carbohydrates, proteins, and fats, which are the primary sources of energy for the body. Understanding the composition of these macronutrients in different foods helps in planning meals that meet energy requirements and support overall health.
      Micronutrients: Micronutrients such as vitamins and minerals are essential for various physiological functions, including immune function, bone health, and metabolism. Knowing the micronutrient composition of foods helps in preventing deficiencies and promoting optimal health.
      Fiber Content: Fiber is an important component of food composition that supports digestive health, regulates blood sugar levels, and aids in weight management. Foods rich in fiber, such as fruits, vegetables, whole grains, and legumes, should be included in the diet regularly.
      Antioxidants and Phytochemicals: Many foods contain antioxidants and phytochemicals, which have protective effects against chronic diseases such as cancer, heart disease, and diabetes. Including a variety of colorful fruits, vegetables, nuts, and seeds in the diet ensures a diverse intake of these beneficial compounds.
      Hydration: Water is a crucial component of food composition, and many foods contain varying amounts of water. Consuming water-rich foods such as fruits, vegetables, soups, and broths helps in maintaining hydration levels and supporting overall health.
      Protein Quality: Different foods contain varying amounts of essential amino acids, which are the building blocks of proteins. Understanding the protein quality of foods helps in selecting sources that provide all essential amino acids, such as animal products, soy products, and quinoa.
      Glycemic Index: The glycemic index (GI) measures how quickly carbohydrates in food raise blood sugar levels. Foods with a low GI are digested and absorbed more slowly, providing sustained energy levels and better blood sugar control. Including low-GI foods such as whole grains, legumes, and non-starchy vegetables helps in managing blood sugar levels.
      Healthy Fats: Not all fats are created equal, and it's important to include sources of healthy fats in the diet, such as avocados, nuts, seeds, and fatty fish. These fats provide essential fatty acids, support brain health, and reduce the risk of heart disease when consumed in moderation.
      Balance and Variety: A key principle of food composition is to consume a balanced and varied diet that includes a wide range of nutrient-rich foods from all food groups. This ensures adequate intake of essential nutrients and promotes overall health and well-being.
      </Container>
    <div style={wholeboxstyle}>

    <Grid container spacing={4} >
        <Grid item xs={5} md={4}>
            <Item><iframe width="450" height="250" src="https://www.youtube.com/embed/Yys0Gp0cVo8?si=RXojoZVKGG2LLniM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Item>
        </Grid>
        <Grid item xs={5} md={4}>
            <Item><iframe width="450" height="250" src="https://www.youtube.com/embed/Yys0Gp0cVo8?si=RXojoZVKGG2LLniM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Item>
        </Grid>
        <Grid item xs={5} md={4}>
            <Item><iframe width="450" height="250" src="https://www.youtube.com/embed/Yys0Gp0cVo8?si=RXojoZVKGG2LLniM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Item>
        </Grid>
        <Grid item xs={5} md={4}>
            <Item><iframe width="450" height="250" src="https://www.youtube.com/embed/Yys0Gp0cVo8?si=RXojoZVKGG2LLniM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Item>
        </Grid>
        <Grid item xs={5} md={4}>
            <Item><iframe width="450" height="250" src="https://www.youtube.com/embed/Yys0Gp0cVo8?si=RXojoZVKGG2LLniM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Item>
        </Grid>
        <Grid item xs={5} md={4}>
            <Item><iframe width="450" height="250" src="https://www.youtube.com/embed/Yys0Gp0cVo8?si=RXojoZVKGG2LLniM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Item>
        </Grid>
    </Grid>
    </div>

    <Button variant="outlined"  style={buttonStyle} onClick={gotoHome}>Back</Button>
    </div>
  )
}

export default Guidlines