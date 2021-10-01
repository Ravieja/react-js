import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Aadhar_No_Count: '',
			Enter_Aadhar: '',
		}
	}

	handleAadhar_No_CountChange = event => {
		this.setState({
			Aadhar_No_Count: event.target.value
		})
	}

	handleEnter_AadharChange = event => {
		this.setState({
			Enter_Aadhar: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.Aadhar_No_Count} ${this.state.Enter_Aadhar} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { Aadhar_No_Count, Enter_Aadhar } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Aadhar_No_Count </label>
					<input
						type="text"
						value={Aadhar_No_Count}
						onChange={this.handleAadhar_No_CountChange}
					/>
				</div>
				<div>
					<label>Enter_Aadhar</label>
					<textarea
						value={Enter_Aadhar}
						onChange={this.handleEnter_AadharChange}
					/>
				</div>
				
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form;