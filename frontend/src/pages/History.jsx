import React, { useState, useEffect } from "react";
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import config from "../config";

const dummy_data = [

	{
		sender: "username1",
		receiver: "name",
		rewards: ["tshirt", 100],
		timestamp: "2000-10-31T01:30:00.000-05:00"
	},
	{
		sender: "username2",
		receiver: "name",
		rewards: ["tshirt", 100],
		timestamp: "2000-10-12T01:30:00.000-05:00"
	},
	{
		sender: "username3",
		receiver: "name",
		rewards: ["tshirt", 100],
		timestamp: "2000-10-21T01:30:00.000-05:00"
	},
	{
		sender: "username4",
		receiver: "name",
		rewards: ["tshirt", 100],
		timestamp: "2000-10-22T01:30:00.000-05:00"
	}


]

const columns = [
	{
		id: 'username',
		label: 'Name',
		align: 'center',
		minWidth: 170
	},
	{
		id: 'reward',
		label: 'Rewards',
		align: 'center',
		minWidth: 170
	},
	{
		id: 'point',
		label: 'Points',
		minWidth: 100,
		align: 'center'
	},
	{
		id: 'fDate',
		label: 'Date',
		minWidth: 170,
		align: 'center',
	},
	
];


const createData = (data) => {
    const rows = [];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const username = item.sender;
        const reward = item.rewards[0];
        const point = item.rewards[1];
        const timestamp = item.timestamp;

        const dateObject = new Date(timestamp);
        const day = String(dateObject.getDate()).padStart(2, '0');
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const year = dateObject.getFullYear();
        const fDate = `${day}/${month}/${year}`;
		
        rows.push({ username, reward, point, fDate });
    }
	
    return rows;
};

const rows = createData(dummy_data);

const History = () => {
	const [data, setdata] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const headers = {
					"Content-Type": "application/json",
					Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				};
				const response = await axios.get((config.BACKEND_API || "http://localhost:8000") + "/agency/history", { headers });
				setdata(response.data);  
				//currenty setting to dummy data
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
				console.log("in error");
			}
		};
		fetchData();
	}, []);

	

	return (
		<div>
			{/* This is the history Page which shows the history to agencies of the user who have redeemed rewards from them. */}
			<div >
				{data.length > 0 ? (
					// Render your component with the fetched data
					<div >

						<Paper sx={{ width: '80%', overflow: 'hidden' , margin:'auto' ,marginTop:'3%', marginBottom:'10%' }}>
							<TableContainer sx={{ maxHeight: 440 }}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead >
										<TableRow>
											{columns.map((column) => (
												<TableCell
													key={column.id}
													align={column.align}
													style={{ minWidth: column.minWidth }}
												>
													{column.label}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{rows
											.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
											.map((row) => {
												return (
													<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
														{columns.map((column) => {
															const value = row[column.id];
															return (
																<TableCell key={column.id} align={column.align}>
																	{column.format && typeof value === 'number'
																		? column.format(value)
																		: value}
																</TableCell>
															);
														})}
													</TableRow>
												);
											})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10,50,100]}
								component="div"
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</Paper>
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>

		</div>
	)
}

export default History
