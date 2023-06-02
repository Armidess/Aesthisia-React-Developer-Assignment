import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";

function App() {
	const [user, setUser] = useState(false);
	const [isAccount, setIsAccount] = useState(true);
	return (
		<div className="App">
			{isAccount ? (
				<>
					{!user ? (
						<>
							<div className="LeftPanel">
								<LeftPanel />
							</div>
							<div className="LoginPage">
								<LoginPage setUser={setUser} setIsAccount={setIsAccount} />
							</div>
						</>
					) : (
						<HomePage setUser={setUser} />
					)}
				</>
			) : (
				<div className="SignUp">
					<SignUp setIsAccount={setIsAccount} setUser={setUser} />
				</div>
			)}
		</div>
	);
}

export default App;
