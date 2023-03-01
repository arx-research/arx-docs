import React from "react";
import styles from "./MediaGrid.module.css";

interface IMedia {
  src: string;
  caption?: string;
  video?: boolean;
}

interface IProps {
  medias: IMedia[];
}

export default function MediaGrid({ medias }: IProps) {
  return (
    <div className={styles.grid}>
      {medias.map((media, i) => {
        return (
          <figure key={i} className={styles.item}>
            {media.video ? (
              <video autoPlay loop muted playsInline>
                <source src={media.src} />
              </video>
            ) : (
              <img src={media.src} />
            )}

            {media.caption && <figcaption>{media.caption}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
