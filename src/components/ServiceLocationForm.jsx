import React from "react";

function ServiceLocationForm() {
	return (
		<div className="form-container">
			<div className="service-location-form">
				<h2>Service Location</h2>
				<div>
					<label htmlFor="address">Address:</label>
					<input type="text" id="address" />
					<br />
					<label htmlFor="city">City:</label>
					<input type="text" id="city" />
					<br />
					<label htmlFor="state">State:</label>
					<input type="text" id="state" />
					<br />
					<label htmlFor="zip-code">Zip Code:</label>
					<input type="text" id="zip-code" />
					<br />
					<label htmlFor="area">Area:</label>
					<select id="area">
						<option value="Area 1">Area 1</option>
						<option value="Area 2">Area 2</option>
						<option value="Area 3">Area 3</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default ServiceLocationForm;
