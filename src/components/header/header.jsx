import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
	const history = useHistory();
	const goToPage = (event) => {
		const pageName = event.target.innerText;
		history.push(`/${pageName}`);
	};
	const goToHome = () => {
		history.push("/");
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={goToHome}>
				<span className={styles.logo_image}>
					<i className="fas fa-code"></i>
				</span>
				<span className={styles.title}>Code Myself</span>
			</div>

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
		</header>
	);
};

export default Header;
