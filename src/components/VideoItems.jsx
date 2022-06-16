import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const VideoItems = ({ video, onVideoSelect }) => {
	return (
		<div>
			<Grid item xs={12} style={{ padding: "1rem" }}>
				<Paper
					style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
					onClick={() => onVideoSelect(video)}
				>
					<img
						style={{ marginRight: "20px" }}
						src={video.snippet.thumbnails.medium.url}
						alt="thumbnail"
					/>
					<Typography variant="subtitle1">
						<b>{video.snippet.title}</b>
					</Typography>
				</Paper>
			</Grid>
		</div>
	);
};

export default VideoItems;
