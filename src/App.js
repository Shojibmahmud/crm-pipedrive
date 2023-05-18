import React from "react";
import { useState } from "react";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
import JobDetailsForm from "./components/JobDetailsForm";
import ServiceLocationForm from "./components/ServiceLocationForm";
import ScheduleForm from "./components/ScheduleForm";

function App() {
	const [isSaved, setSaved] = useState(false);

	const handleSave = () => {
		setSaved(true);
	};

	return (
		<div>
			<h1>Create a Job</h1>
			<CustomerDetailsForm />
			<JobDetailsForm />
			<ServiceLocationForm />
			<ScheduleForm></ScheduleForm>
			<br />
			<button
				className={`btn ${isSaved ? "btn-warning" : "btn-primary"} mb-3`}
				style={{ marginLeft: "10px" }}
				onClick={handleSave}>
				{isSaved ? "Have Been Saved" : "Save"}
			</button>
		</div>
	);
}

export default App;
