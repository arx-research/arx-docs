import React from "react";
import styles from "./GridBlock.module.css";

interface IProps {
  children?: React.ReactNode;
  title: string;
  href: string;
}

export default function GridBlock({ children, title, href }: IProps) {
  return (
    <a href={href} target="_blank" className={styles.gridBlock}>
      <h3 className={styles.heading}>{title}</h3>
      <span className={styles.text}>{children}</span>
    </a>
  );
}
