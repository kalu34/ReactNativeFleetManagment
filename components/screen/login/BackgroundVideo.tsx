import { useRef } from "react";
import Video, { VideoRef } from "react-native-video";
import { StyleSheet } from "react-native";

const BackgroundVideo = () => {
  const videoRef = useRef<VideoRef>(null);
  const background = require("@assets/video/background.mp4");

  const onError = (e: any) => {
    console.log(e);
  };
  const onBuffer = (b: any) => {
    console.log(b);
  };
  return (
    <Video
      // Can be a URL or a local file.
      source={background}
      // Store reference
      ref={videoRef}
      // Callback when remote video is buffering
      onBuffer={onBuffer}
      // Callback when the video cannot be loaded
      onError={onError}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
      repeat
      muted
    />
  );
};

export default BackgroundVideo;

