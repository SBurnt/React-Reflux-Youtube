import React from 'react';

import './css/videoListMini.css';
import actions from './actions';

function VideoListMiniItem(props) {
	// console.log(props);

	let videoId = props.data.id.videoId;
	// console.log("klic", videoId);

	return (
		<div className="videoListMiniItem">
			<div>
				<img src={props.data.snippet.thumbnails.medium.url} alt=""
					onClick={() => { actions.selectVideoMini(videoId) }} />
			</div>
			<div className="videoMiniItemInfo">
				<h3>
					<p onClick={() => { actions.selectVideoMini(videoId) }}>{props.data.snippet.title}
					</p>
				</h3>
			</div>
		</div>
	)
}

export default VideoListMiniItem;