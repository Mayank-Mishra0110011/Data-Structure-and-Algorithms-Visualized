/*
	stuff:
		doubly linked list 
		circular linked list
		stack
		queue
			traversals
		tree
		graph
			tree/graph search algorithms
		list/array
			linear search
			binary search
			quick sort
			merge sort
			heap sort
			insertion sort
			selection sort
			bubble sort
*/

let scene,
	hidden = false,
	mainButtons,
	otherButtons,
	dataStructure,
	cc,
	temporaryElements = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	mainButtons = [
		createButton('Binary Tree').position(50, 150).mouseClicked(setScene),
		createButton('Binary Search Tree').position(400, 150).mouseClicked(setScene),
		createButton('AVL Tree').position(950, 150).mouseClicked(setScene),
		createButton('Red-Black Tree').position(50, 230).mouseClicked(setScene),
		createButton('Huffman Tree').position(450, 230).mouseClicked(setScene),
		createButton('B Tree').position(800, 230).mouseClicked(setScene),
		createButton('Undirected Graph').position(50, 310).mouseClicked(setScene),
		createButton('Directed Graph').position(500, 310).mouseClicked(setScene),
		createButton('1D Array').position(1000, 230).mouseClicked(setScene),
		createButton('2D Array').position(900, 310).mouseClicked(setScene),
		createButton('Multi Dimension Array').position(50, 390).mouseClicked(setScene),
		createButton('Stack').position(640, 390).mouseClicked(setScene),
		createButton('Queue').position(840, 390).mouseClicked(setScene),
		createButton('Circular Queue').position(50, 470).mouseClicked(setScene),
		createButton('Priority Queue').position(450, 470).mouseClicked(setScene),
		createButton('Dequeue').position(1030, 390).mouseClicked(setScene),
		createButton('Singly Linked List').position(850, 470).mouseClicked(setScene),
		createButton('Doubly Linked List').position(50, 550).mouseClicked(setScene),
		createButton('Circular Linked List').position(550, 550).mouseClicked(setScene)
	];
	otherButtons = [
		createButton('Add Element').position(200, 50).hide(),
		createButton('Remove Element').position(520, 50).hide(),
		createButton('Search').position(920, 50).hide(),
		createButton('Traverse').position(1120, 50).hide(),
		createButton('Back').position(50, 50).hide().mouseClicked(() => {
			scene = undefined;
			dataStructure = undefined;
			temporaryElements.forEach((element) => {
				element.remove();
			});
			otherButtons.forEach((btn) => {
				btn.hide();
			});
		})
	];
	stylize(Object.values(otherButtons));
	stylize(mainButtons);
}

function draw() {
	background(255);
	textSize(50);
	if (scene != undefined) {
		if (!hidden) {
			mainButtons.forEach((btn) => {
				btn.hide();
			});
			otherButtons.forEach((btn) => {
				btn.show();
			});
			hidden = true;
		}
		render(scene);
	} else {
		text('Pick a Data Structure To Play With', 235, 100);
		if (hidden) {
			mainButtons.forEach((btn) => {
				btn.show();
			});
			hidden = false;
		}
	}
}

function setScene() {
	scene = this.elt.textContent;
}

function render(scene) {
	switch (scene) {
		case 'Binary Tree':
			renderBinaryTree();
			break;
		case 'Binary Search Tree':
			renderBinarySearchTree();
			break;
		case 'AVL Tree':
			renderAVLTree();
			break;
		case 'Red-Black Tree':
			renderRedBlackTree();
			break;
		case 'Huffman Tree':
			renderHuffmanTree();
			break;
		case 'B Tree':
			renderBTree();
			break;
		case 'Directed Graph':
			renderDirectedGraph();
			break;
		case 'Undirected Graph':
			renderUndirectedGraph();
			break;
		case '1D Array':
			render1DArray();
			break;
		case '2D Array':
			render2DArray();
			break;
		case 'Multi Dimension Array':
			renderMultiDimensionArray();
			break;
		case 'Stack':
			renderStack();
			break;
		case 'Queue':
			renderQueue();
			break;
		case 'Circular Queue':
			renderCircularQueue();
			break;
		case 'Priority Queue':
			renderPriorityQueue();
			break;
		case 'Dequeue':
			renderDequeue();
			break;
		case 'Singly Linked List':
			renderSinglyLinkedList();
			break;
		case 'Doubly Linked List':
			renderDoublyLinkedList();
			break;
		case 'Circular Linked List':
			renderCircularLinkedList();
			break;
	}
}

function stylize(p5eltArray) {
	p5eltArray.forEach((p5elt) => {
		let textLength = p5elt.elt.textContent.length * 25;
		p5elt
			.style('borderRadius', '10px')
			.style('backgroundColor', '#ff7fa7')
			.style('color', '#ffffff')
			.style('border', '1px solid gray')
			.style('outline', 'none')
			.style('width', `${textLength}px`)
			.style('height', '64px')
			.style('fontSize', '32px')
			.style('transitionDuration', '0.2s')
			.style('cursor', 'pointer');
		p5elt.elt.onmouseover = function() {
			p5elt.style('transform', 'scale(1.1)').style('boxShadow', '0 10px 10px -10px rgba(0, 0, 0, 0.5)');
		};
		p5elt.elt.onmouseout = function() {
			p5elt.style('transform', 'none').style('boxShadow', 'none');
		};
	});
}

function render1DArray() {
	console.log('rendering 1d array');
}

function render2DArray() {
	console.log('rendering 2d array');
}

function renderMultiDimensionArray() {
	console.log('rendering multi dimension array');
}

function renderBinaryTree() {
	console.log('rendering binary tree');
}

function renderBinarySearchTree() {
	console.log('rendering binary search tree');
}

function renderAVLTree() {
	console.log('rendering avl tree');
}

function renderRedBlackTree() {
	console.log('rendering red-black tree');
}

function renderBTree() {
	console.log('rendering b tree');
}

function renderHuffmanTree() {
	console.log('rendering huffman tree');
}

function renderUndirectedGraph() {
	console.log('rendering undirected graph');
}

function renderDirectedGraph() {
	console.log('rendering directed graph');
}

function renderStack() {
	console.log('rendering stack');
}

function renderQueue() {
	console.log('rendering queue');
}

function renderDequeue() {
	console.log('rendering dequeue');
}

function renderPriorityQueue() {
	console.log('rendering priority queue');
}

function renderCircularQueue() {
	console.log('rendering circular queue');
}

function renderSinglyLinkedList() {
	console.log('rendering singly linked list');
}

let traversing;
function renderDoublyLinkedList() {
	if (!dataStructure) {
		dataStructure = new DoublyLinkedList();
		cc = 1;
		otherButtons[0].mouseClicked(() => {
			dataStructure.add(cc);
			cc++;
		});
		otherButtons[1].mouseClicked(() => {
			let index = temporaryElements[0].value();
			if (index.trim().length == 0) {
				dataStructure.remove();
			} else {
				dataStructure.remove(parseInt(index));
			}
			if (dataStructure.head == null) cc = 1;
		});
		temporaryElements.push(createInput().position(680, 15));
		otherButtons[3].mouseClicked(() => {
			traversing = true;
		});
	}
	if (traversing) {
		frameRate(3);
		traversing = dataStructure.traverse();
	} else {
		frameRate(60);
	}
	textSize(20);
	text('Remove Index : ', 520, 30);
	dataStructure.draw();
	if (traversing && dataStructure._ptr.next) {
		dataStructure._ptr.next.drawObject.fillColor = 'red';
	}
}

function mouseClicked() {
	if (dataStructure && dataStructure._ptr && !traversing) {
		dataStructure._ptr.drawObject.fillColor = 'red';
		dataStructure._ptr = undefined;
	}
}

function renderCircularLinkedList() {
	console.log('rendering circular linked list');
}
