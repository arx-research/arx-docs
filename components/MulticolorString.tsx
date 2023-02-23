import React from "react";
import styles from "./MulticolorString.module.css";

interface IPart {
  text: string;
  color: "red" | "green" | "blue" | "purple" | "text";
  space?: boolean;
  break?: boolean;
}

interface IProps {
  parts: IPart[];
  spaced?: boolean;
  noWrap?: boolean;
  href?: string;
}

export default function MulticolorString({
  parts,
  spaced,
  noWrap,
  href,
}: IProps) {
  const noWrapCls = noWrap ? styles.nowrap : "";

  if (href) {
    return (
      <p className={`${styles.string} ${noWrapCls}`}>
        <a href={href} target="_blank" className={styles.anchor}>
          {parts.map((part) => {
            return (
              <span className={styles[part.color]}>
                {part.text}
                {(spaced || part.space) && <> </>}
                {part.break && <br />}
              </span>
            );
          })}
        </a>
      </p>
    );
  }

  return (
    <p className={`${styles.string} ${noWrapCls}`}>
      {parts.map((part) => {
        return (
          <span className={styles[part.color]}>
            {part.text}
            {(spaced || part.space) && <> </>}
            {part.break && <br />}
          </span>
        );
      })}
    </p>
  );
}
