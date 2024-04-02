import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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

const AgencyReward = (props) => {
  const [Rewards, setRewards] = useState(['points1', 'reward1','points2','reward2']);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <DemoPaper square={false}>
          <Box sx={{ width: '80%', margin: "auto" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={12}>
				<Item>  here shoudl be agency's name </Item>
				</Grid>
				
				{Rewards.map((reward) => <Grid key={reward}  item xs={6}> {reward} </Grid>)} 
            </Grid>
          </Box>
        </DemoPaper>
      </Stack>

    </div>
  )
}

export default AgencyReward