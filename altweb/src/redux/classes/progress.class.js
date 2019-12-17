import axios from 'axios'

export class ProgressMap {
	constructor(timeline){
		this.timeline = timeline || [];
	}

	static MakeProgressMap(timeline){
		return new ProgressMap(timeline)
	}

	createNewProgress(courseName){
		let newProgress = new ProgressInstance(courseName);
		this.timeline.push(newProgress)
		axios.post('/update_progress', {
			timeline: this.timeline
		})
	}

}

class ProgressInstance {
	constructor(courseName){
		this.timestamp = new Date();
		this.courseName = courseName;
	}
}

export class Feedback {
	static createFeedback(courseName, feedback, user){
		axios.post('/feedback', {
			courseName,
			feedback,
			user
		})
	}
}