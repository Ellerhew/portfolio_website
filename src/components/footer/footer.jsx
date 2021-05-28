import React from "react";
import NavButton from "../nav_button/nav_button";
import styles from "./footer.module.css";

const Footer = (props) => (
	<div className={styles.footer}>
		<div className={styles.buttons}>
			<NavButton />
		</div>
		<div className={styles.logo}>
			<span className={styles.logo_image}>
				<i className="fas fa-code"></i>
			</span>
			<span className={styles.logo_title}>Code Myself</span>
		</div>

		<span className={styles.contactInfo}>E-mail : lovedory43@naver.com</span>
	</div>
);

export default Footer;
