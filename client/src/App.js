//TODO: Work out how to build whole project in one go. backend and frontend.
import React from "react";
import './App.css';

function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch("/api/countdown")
		.then((res) => res.json())
		.then((data) => setData(data));
	}, []);

	return (
		<div className="App">
			<div id="clockdiv">
				<div>
					<span className="days">{ data[1] }</span>
					<div className="smallText">Days</div>
				</div>
				<div>
					<span className="days">{ data[2] }</span>
					<div className="smallText">Hours</div>
				</div>
				<div>
					<span className="days">{ data[3] }</span>
					<div className="smallText">Minutes</div>
				</div>
				<div>
					<span className="days">{ data[4] }</span>
					<div className="smallText">Seconds</div>
				</div>
			</div>
		</div>
	);
}

export default App;
