import React from "react";
import styles from "./Grid.module.css";

interface IProps {
  children?: React.ReactNode;
}

export default function Grid({ children }: IProps) {
  return <div className={styles.grid}>{children}</div>;
}
