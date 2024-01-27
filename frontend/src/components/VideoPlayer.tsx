//Author: INSERIRE AUTORE
import ReactPlayer from "react-player";

export const VideoPlayer = (props: { id: number }) => {
  return (
    <ReactPlayer
      light={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGUQB47iWuzsTHiKxSff9EHRR0ioZc2a4hw&usqp=CAU"
      }
      controls={true}
      url={`http://localhost/api/downloadRecording/${props.id}`}
      width="100%"
      height=""
    />
  );
};

export default VideoPlayer;
