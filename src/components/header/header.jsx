import React from "react";
import { useHistory } from "react-router-dom";
import NavButton from "../nav_button/nav_button";
import styles from "./header.module.css";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<span className={styles.logo_image}>
					<i className="fas fa-code"></i>
				</span>
				<span className={styles.title}>Code Myself</span>
			</div>
			<NavButton />
		</header>
	);
};

export default Header;
