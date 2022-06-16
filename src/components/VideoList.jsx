import React from "react";
import VideoItems from "./VideoItems";
import { Grid } from "@material-ui/core";

function VideoList({ videos, onVideoSelect }) {
	const listOfVideos = videos.map((video, id) => (
		<VideoItems onVideoSelect={onVideoSelect} key={id} video={video} />
	));
	return (
		<>
			<Grid container spacing={10}>
				{listOfVideos}
			</Grid>
		</>
	);
}

export default VideoList;
