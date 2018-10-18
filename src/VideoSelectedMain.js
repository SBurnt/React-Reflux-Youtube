import React from 'react';
import Reflux from 'reflux';

import Store from './Store';
import './css/videoListMini.css';

class VideoSelectedMain extends Reflux.Component {
	constructor(props) {
		super(props);

		this.store = Store;
		this.storeKeys = ["selected"]; // выбираем определенные данные из хранилища
	}

	render() {
		// console.log("videoSelectMaim", this.state.selected);

		if (this.state.selected === '') {
			return '';
		}

		let videoIdMini = "https://www.youtube.com/embed/" + this.state.selected;
		return (
			<div>
				<iframe src={videoIdMini} allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		);
	}
}

export default VideoSelectedMain;