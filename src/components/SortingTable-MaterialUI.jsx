import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

function createData(name, calories, fat, carbs, protein) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
	};
}

const rows = [
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Donut", 452, 25.0, 51, 4.9),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
	createData("Honeycomb", 408, 3.2, 87, 6.5),
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
	{
		id: "name",
		numeric: false,
		label: "Dessert (100g serving)",
	},
	{
		id: "calories",
		numeric: true,
		label: "Calories",
	},
	{
		id: "fat",
		numeric: true,
		label: "Fat (g)",
	},
	{
		id: "carbs",
		numeric: true,
		label: "Carbs (g)",
	},
	{
		id: "protein",
		numeric: true,
		label: "Protein (g)",
	},
];

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "left"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={() => onRequestSort(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default function EnhancedTable() {
	const [order, setOrder] = React.useState("asc");
	const [orderBy, setOrderBy] = React.useState("calories");

	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Paper sx={{ width: "100%", mb: 2 }}>
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
						/>
						<TableBody>
							{rows.sort(getComparator(order, orderBy)).map((row) => {
								return (
									<TableRow hover tabIndex={-1} key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">{row.calories}</TableCell>
										<TableCell align="right">{row.fat}</TableCell>
										<TableCell align="right">{row.carbs}</TableCell>
										<TableCell align="right">{row.protein}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
}
