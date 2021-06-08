import React from "react";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {yourName: ''};
	}
	
handleCange() {
const inputValue = event.target.value;
this.setState(yourName: inputValue);
}

	render() {
		return (
			<div>
      	<h1>Hello, {this.state.yourName}</h1>
      	<input 
				value={this.state.yourName} 
				onChange={(event) => {this.handleCange(event)}} 
				/>
			</div>
		);
	}
}

export default App;