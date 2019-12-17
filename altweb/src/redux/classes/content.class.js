class ContentList {
	constructor(contentList) {
		this.unparsedList = contentList;
		this.parsedList = [];

		this.parseContentBasedOnLevel()
	}

	parseContentBasedOnLevel() {
		for (let i = 0; i < this.unparsedList.length; i++) {
			let level = this.unparsedList[i].level			
			if (!this.parsedList[level]) {
				this.parsedList[level] = new ContentLevel(level)
			}
			this.parsedList[level].list.push(this.unparsedList[i])
		}
		this.unparsedList = 'parsed'
	}

}

class ContentLevel {
	constructor(level) {
		this.list = [];
		this.level = level; 
	}
}

export default ContentList