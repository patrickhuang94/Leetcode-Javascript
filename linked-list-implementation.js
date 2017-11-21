function LinkedList() {
	this.head = null
}

LinkedList.prototype.push = function((val) => {
	//Node keeps track of the current node value and points to the next node
	var node = {
		value: val,
		next: null
	}

	//Set the current node to be the head of the linked list
	if (!this.head) {
		this.head = node
	} else {
		var current = this.head
		while (current.next) {
			current = current.next
		}
		current.next = node
	}
})
