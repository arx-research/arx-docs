import React from "react";
import styles from "./VideoGrid.module.css";

interface IVideo {
  src: string;
  caption?: string;
}

interface IProps {
  videos: IVideo[];
}

export default function VideoGrid({ videos }: IProps) {
  return (
    <div className={styles.grid}>
      {videos.map((video, i) => {
        return (
          <figure key={i} className={styles.item}>
            <video autoPlay loop muted playsInline>
              <source src={video.src} />
            </video>
            {video.caption && <figcaption>{video.caption}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
