import React from "react";
import { Paper, Typography } from "@material-ui/core";
const VideoDetail = ({ video }) => {
	if (!video) return <div>Loading...</div>;

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<Paper elevation={6} style={{ height: "70%" }}>
				<iframe
					src={videoSrc}
					width="100%"
					height="430rem"
					title="video player"
				></iframe>
			</Paper>
			<Paper elevation={6} style={{ padding: "25px" }}>
				<Typography variant="h5">
					{video.snippet.title} || {video.snippet.channelTitle}
				</Typography>
				<Typography variant="subtitle1">
					{video.snippet.channelTitle}
				</Typography>
				<Typography variant="subtitle2">{video.snippet.description}</Typography>
			</Paper>
		</div>
	);
};

export default VideoDetail;
