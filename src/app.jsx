import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import styles from "./app.module.css";

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path={["/", "/home"]}>
						<Home />
					</Route>
					<Route path="/works">
						<Works />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
