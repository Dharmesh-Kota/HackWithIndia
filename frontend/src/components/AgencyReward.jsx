import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "auto",
    height: "auto",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const accordionSummaryStyle = {
  maxWidth: '100%',
	background:'#DFFFFF',
  margin: "auto",
  border:"2px solid black",
  borderRadius: '10px',
};
const accordiondetailsstyles = {
    //   display: "grid",
    //   gridTemplateColumns: "repeat(3, 1fr)", // Two columns with equal width
    //   gap: "20px"
};
const handleclick =async ()=>{
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    };
    try {
        const results = await axios.post('http://localhost:8000/donor/redeem-reward' , {headers});
        //send alert that reward redeemed 
    } catch (error) {
        //send alert that reward redeemed process failed
    }
  
}

const AgencyReward = (props) => {
  let Validation = true;
  return (
    <div>
      <Accordion style={accordionSummaryStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"

        >
        <div style={{fontFamily: 'Arial, sans-serif',  fontWeight: 'bold',fontSize: '20px'}}>{props.rewards.name}</div>
        </AccordionSummary>
        <AccordionDetails style={accordiondetailsstyles}>
                {props.rewards.rewards.map((group, index) => (
                    <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '10px' }}>
                    {group.map((reward, innerIndex) => (
                        <div key={innerIndex} style={{ marginRight: '10px',fontFamily: 'Arial, sans-serif',  fontWeight: 'bold',fontSize: '20px'}}>{reward}
                        </div>

                    )) }
                    {group[1] > props.rewards.userPoints ? Validation = true: Validation = false}
                    <button onClick={handleclick} disabled = {Validation} style={{background:'#25396F' , border:"2px solid black" , borderRadius:"2px" , fontFamily: 'Arial, sans-serif',  fontWeight: 'bold',fontSize: '20px'}}>buy</button>
                    </div>
                ))}
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default AgencyReward