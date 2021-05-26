import React from "react";
import styles from "./contact.module.css";

const Contact = (props) => (
	<div className={styles.contact}>
		<h1>Contact</h1>
		<section className={styles.content}>
			<p>If you wish to know more about me, don't hesitate to contact me!</p>
			<span>E-mail : lovedory43@naver.com</span>
			<div className={styles.kakao}>
				<span>Kakao : </span>
				<a href="https://open.kakao.com/o/sJCIiqfd">click!</a>
			</div>
		</section>
	</div>
);

export default Contact;
