import React from "react";

function JobDetailsForm() {
	return (
		<div className="form-container">
			<div className="job-details-form">
				<h2>Job Details</h2>
				<div>
					<label htmlFor="job-type">Job Type:</label>
					<select id="job-type">
						<option value="Type 1">Type 1</option>
						<option value="Type 2">Type 2</option>
						<option value="Type 3">Type 3</option>
					</select>
					<br />
					<label htmlFor="job-source">Job Source:</label>
					<select id="job-source">
						<option value="Source 1">Source 1</option>
						<option value="Source 2">Source 2</option>
						<option value="Source 3">Source 3</option>
					</select>
					<br />
					<label htmlFor="job-description">Job Description:</label>
					<textarea id="job-description" />
				</div>
			</div>
		</div>
	);
}

export default JobDetailsForm;
