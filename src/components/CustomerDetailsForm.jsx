import React from "react";

function CustomerDetailsForm() {
	return (
		<div className="form-container">
			<div className="customer-details-form">
				<h2>Customer Details</h2>
				<div>
					<label htmlFor="first-name">First Name:</label>
					<input type="text" id="first-name" />
					<br />
					<label htmlFor="last-name">Last Name:</label>
					<input type="text" id="last-name" />
					<br />
					<label htmlFor="phone">Phone:</label>
					<input type="text" id="phone" />
					<br />
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" />
				</div>
			</div>
		</div>
	);
}

export default CustomerDetailsForm;
