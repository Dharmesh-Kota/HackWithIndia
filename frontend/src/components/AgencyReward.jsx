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
  maxWidth: '30%',
  margin: "auto"
};
const accordiondetailsstyles = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)", // Two columns with equal width
//   gap: "20px"
};

const AgencyReward = (props) => {
  const [Rewards, setRewards] = useState([props.rewards]);
  useEffect(() => {
    setRewards(props.rewards);
  }, [props]);

  // const redeeem = (e)={
  //   console.log(e.value);
  // }
  return (
    <div>
      <Accordion style={accordionSummaryStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"

        >
        {props.name}
        </AccordionSummary>
        <AccordionDetails style={accordiondetailsstyles}>
                {props.rewards.map((group, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                    {group.map((reward, innerIndex) => (
                        <div key={innerIndex} style={{ marginRight: '10px' }}>{reward}</div>
                        
                    )) }
                    <button >buy</button>
                    </div>
                ))}
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default AgencyReward