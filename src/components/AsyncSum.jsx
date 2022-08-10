import React from "react";
import { Box, Button, Container } from "@mui/material";

const AsyncSum = () => {
	const [count, setCount] = React.useState(0);
	const calculate = async (value) => {
		setTimeout(() => {
			setCount((count) => count + value);
		}, 2000);
	};
	return (
		<>
			<Container>
				<Box py={5} display="flex" flexDirection="column" alignItems="center">
					<Box>Result: {count}</Box>
					<Box py={2}>
						<Button
							onClick={() => calculate(2)}
							variant="contained"
							color="success"
						>
							+ 2
						</Button>
						<Button
							onClick={() => calculate(1)}
							variant="contained"
							color="success"
						>
							+ 1
						</Button>
						<Button
							onClick={() => calculate(-1)}
							variant="contained"
							color="error"
						>
							- 1
						</Button>
						<Button
							onClick={() => calculate(-2)}
							variant="contained"
							color="error"
						>
							- 2
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default AsyncSum;
