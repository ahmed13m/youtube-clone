import { Paper, TextField } from "@material-ui/core";
import React, { Component } from "react";

export default class SearchBar extends Component {
	state = {
		searchTerm: "",
	};
	handleChange = (e) => this.setState({ searchTerm: e.target.value });
	handleSubmit = (e) => {
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;
		onFormSubmit(searchTerm);
		e.preventDefault();
	};
	render() {
		return (
			<div>
				<Paper elevation={6} style={{ padding: "15px" }}>
					<form onSubmit={this.handleSubmit}>
						<TextField
							fullWidth
							label="Search..."
							onChange={this.handleChange}
						/>
					</form>
				</Paper>
			</div>
		);
	}
}
