import {observable} from 'mobx';

export default class PackageModel {
	store;
	id;
	@observable title;

	constructor(store, id, title) {
		this.store = store;
		this.id = id;
		this.title = title;
	}

	setTitle(title) {
		this.title = title;
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
		};
	}

	static fromJS(store, object) {
		return new PackageModel(store, object.id, object.title);
	}
}
