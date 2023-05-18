import React from "react";

function ScheduleForm() {
	return (
		<div className="form-container">
			<div className="schedule-form">
				<h2>Schedule</h2>
				<div>
					<label htmlFor="start-date">Start Date:</label>
					<input type="date" id="start-date" />
					<br />
					<label htmlFor="start-time">Start Time:</label>
					<input type="time" id="start-time" />
					<br />
					<label htmlFor="end-time">End Time:</label>
					<input type="time" id="end-time" />
					<br />
					<label htmlFor="test-select">Test Select:</label>
					<select id="test-select">
						<option value="Option 1">Option 1</option>
						<option value="Option 2">Option 2</option>
						<option value="Option 3">Option 3</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default ScheduleForm;
