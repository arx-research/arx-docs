import React from "react";
import styles from "./LongUrl.module.css";

interface IProps {
  href: string;
  label?: string;
}

export default function GridBlock({ label, href }: IProps) {
  return (
    <p className={styles.p}>
      <a href={href} target="_blank" className={styles.a}>
        {label || href}
      </a>
    </p>
  );
}
