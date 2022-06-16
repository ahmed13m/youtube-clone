import React from "react";
import Grid from "@material-ui/core/Grid";

import { SearchBar, VideoList, VideoDetail } from "./components/Component";

import Utube from "./api/Utube";

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.handleSubmit("react");
	}
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	handleSubmit = async (searchTerm) => {
		const response = await Utube.get("search", {
			params: {
				part: "snippet",
				maxResults: 5,
				key: "AIzaSyDWo8Dxh5a969gktFN22fL77KcmfHmAVCg",
				q: searchTerm,
			},
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};
	render() {
		const { selectedVideo, videos } = this.state;

		return (
			<>
				<Grid justify="center" container spacing={10}>
					<Grid item xs={12}>
						<Grid container spacing={10}>
							<Grid item xs={12}>
								{/* SEARCH BAR */}
								<SearchBar onFormSubmit={this.handleSubmit} />
							</Grid>
							<Grid item xs={7}>
								{/* VIDEO DETAILS */}
								<VideoDetail video={selectedVideo} />
							</Grid>
							<Grid item xs={4}>
								{/* VIDEO LIST */}
								<h2
									style={{
										padding: "0.5rem",
										marginTop: "-2rem",
										marginBottom: "2rem",
									}}
								>
									Recommended for you
								</h2>
								<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default App;
