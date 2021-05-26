import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
	const history = useHistory();
	const goToPage = (event) => {
		const pageName = event.target.innerText;
		history.push(`/${pageName}`);
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img
					className={styles.picture}
					src="./image/image.jpg"
					alt="logo"
				></img>
				<span className={styles.title}>Elle</span>
			</div>

			<ul className={styles.menu}>
				<li className={styles.item}>
					<button className={styles.button} onClick={goToPage}>
						about
					</button>
				</li>
				<li className={styles.item}>
					<button className={styles.button} onClick={goToPage}>
						skills
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
