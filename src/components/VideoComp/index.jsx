import React from "react";
// video
import { Player } from "video-react";

export default function VideoComp() {
  return (
    <Player
      playsInline
      poster="/assets/video/Wildlife.wmv"
      src="../assets/video/Wildlife.wmv"
    />
  );
}
