class Node {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
		this.drawX = 50;
		this.drawY = 200;
		this.dir = 1;
		this.offset = width - 250;
	}
	add(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			this.head.next = node;
			node.prev = this.head;
			this.head = node;
		}
		this.head.drawObject = new Rectangle(this.drawX, this.drawY, 100, 50, 'red', this.head.data, true);
		if (this.drawX <= this.offset) {
			if (this.dir == -1) {
				this.dir = 1;
				this.offset = width - 250;
				this.drawY += 110;
				this.changed = true;
			} else {
				this.drawX += this.dir * 200;
				this.changed = false;
			}
		} else if (this.drawX > this.offset) {
			if (this.dir == 1) {
				this.dir = -1;
				this.offset = 50;
				this.drawY += 110;
				this.changed = true;
			} else {
				this.changed = false;
				this.drawX += this.dir * 200;
			}
		}
		this.length++;
	}
	remove(index) {
		if (index == undefined && this.head) {
			let temp = this.head;
			this.head = this.head.prev;
			if (this.head) {
				this.head.next = null;
				temp.prev = null;
			}
			this.length--;
		} else if (index >= 0 && this.head) {
			let ptr = this.head;
			for (let i = 0; i < index; i++) {
				if (ptr.prev) {
					ptr = ptr.prev;
				} else {
					return;
				}
			}
			if (ptr) {
				let temp = ptr;
				if (ptr.prev == null) {
					ptr = ptr.next;
					if (ptr) {
						ptr.prev = null;
						temp.next = null;
					}
					this.head = ptr;
				} else if (ptr.next == null) {
					ptr = ptr.prev;
					if (ptr) {
						ptr.next = null;
						temp.prev = null;
					}
					this.head = ptr;
				} else {
					ptr.prev.next = ptr.next;
					ptr.next.prev = ptr.prev;
					ptr.next = null;
					ptr.prev = null;
				}
				this.length--;
			}
		}
	}
	draw() {
		if (this.head) {
			for (let ptr = this.head; ptr != null; ptr = ptr.prev) {
				if (ptr.next == null) {
					ptr.drawObject.draw();
				} else {
					ptr.drawObject.draw(ptr.next.drawObject);
				}
			}
		}
	}
	traverse() {
		if (this.head) {
			if (this._ptr) {
				this._ptr.drawObject.fillColor = 'green';
				if (this._ptr.prev == null) {
					return false;
				} else {
					this._ptr = this._ptr.prev;
				}
			} else {
				this._ptr = this.head;
			}
			return true;
		}
	}
}

class _1darray {
	constructor() {
		this.arr = [];
		this.drawX = 50;
		this.drawY = 200;
		this.dir = 1;
		this.offset = width - 250;
	}
	add(data) {
		this.arr.push({
			data: data,
			drawObject: new Rectangle(this.drawX, this.drawY, 100, 50, 'red', this.head.data, true)
		});
		if (this.drawX <= this.offset) {
			if (this.dir == -1) {
				this.dir = 1;
				this.offset = width - 250;
				this.drawY += 110;
				this.changed = true;
			} else {
				this.drawX += this.dir * 200;
				this.changed = false;
			}
		} else if (this.drawX > this.offset) {
			if (this.dir == 1) {
				this.dir = -1;
				this.offset = 50;
				this.drawY += 110;
				this.changed = true;
			} else {
				this.changed = false;
				this.drawX += this.dir * 200;
			}
		}
	}
	remove(index) {
		if (index) {
			this.arr[index] = undefined;
		}
		this.arr.pop();
	}
	draw() {
		for (let i = 0; i < this.arr.length; i++) {
			if (i == this.arr.length - 2) {
				this.arr[i].draw();
			} else {
				this.arr[i].draw(this.arr[i + 1].drawObject);
			}
		}
	}
}
