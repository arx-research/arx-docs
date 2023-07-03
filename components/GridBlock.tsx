import React from "react";
import styles from "./GridBlock.module.css";

interface IProps {
  children?: React.ReactNode;
  title: string;
  href: string;
  image?: string;
}

export default function GridBlock({ children, title, href, image }: IProps) {
  return (
    <a href={href} target="_blank" className={styles.gridBlock}>
      {image && <img className={styles.image} src={image} alt={title} />}
      <span className={styles.gridBlockText}>
        <h3 className={styles.heading}>{title}</h3>
        <span className={styles.text}>{children}</span>
      </span>
    </a>
  );
}
