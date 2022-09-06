import React from "react";
import AsyncSum from "./components/AsyncSum";
import Fetch from "./components/Fetch";
import EnhancedTable from "./components/SortingTable-MaterialUI";

const App = () => {
	return (
		<>
			<AsyncSum />
			<Fetch />
			<EnhancedTable />
		</>
	);
};

export default App;
