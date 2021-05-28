import React from "react";
import { useHistory } from "react-router";
import styles from "./nav_button.module.css";

const NavButton = (props) => {
	const history = useHistory();
	const goToPage = (event) => {
		const pageName = event.target.innerText;
		history.push(`/${pageName}`);
	};

	return (
		<ul className={styles.menu}>
			<li className={styles.item}>
				<button className={styles.button} onClick={goToPage}>
					home
				</button>
			</li>

			<li className={styles.item}>
				<button className={styles.button} onClick={goToPage}>
					works
				</button>
			</li>
			<li className={styles.item}>
				<button className={styles.button} onClick={goToPage}>
					contact
				</button>
			</li>
		</ul>
	);
};

export default NavButton;
