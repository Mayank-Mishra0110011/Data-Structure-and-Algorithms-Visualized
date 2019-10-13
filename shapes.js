class Rectangle {
	constructor(x, y, width = 100, height = 50, fillColor = 'red', name, bidirectional = false) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.fillColor = fillColor;
		this.bidirectional = bidirectional;
		if (name) this.name = name;
	}
	draw(neighbour, strokeWeight = 2) {
		const sf = this.height / this.width;
		if (neighbour) {
			neighbour.draw();
			let px, py, qx, qy;
			if (neighbour.x < this.x + this.width) {
				if (neighbour.y < this.y - 50) {
					px = this.x + this.width / 2;
					py = this.y;
					qx = neighbour.x + neighbour.width / 2;
					qy = neighbour.y + neighbour.height + 5;
				} else if (neighbour.y > this.y + this.height + 50) {
					px = this.x + this.width / 2;
					py = this.y + this.height;
					qx = neighbour.x + neighbour.width / 2;
					qy = neighbour.y - 5;
				} else {
					px = this.x;
					py = this.y + this.height / 2;
					qx = neighbour.x + neighbour.width;
					qy = neighbour.y + neighbour.height / 2;
				}
			} else {
				if (neighbour.y < this.y - 50) {
					px = this.x + this.width / 2;
					py = this.y;
					qx = neighbour.x + neighbour.width / 2;
					qy = neighbour.y + neighbour.height + 5;
				} else if (neighbour.y > this.y + this.height + 50) {
					px = this.x + this.width / 2;
					py = this.y + this.height;
					qx = neighbour.x + neighbour.width / 2;
					qy = neighbour.y - 5;
				} else {
					px = this.x + this.width;
					py = this.y + this.height / 2;
					qx = neighbour.x;
					qy = neighbour.y + neighbour.height / 2;
				}
			}
			if (this.bidirectional) {
				if (neighbour.y < this.y - 50 || neighbour.y > this.y + this.height + 50) {
					px += 10;
					qx += 10;
				} else {
					py += 10;
					qy += 10;
				}
				arrow(qx, qy, px, py, strokeWeight);
				if (neighbour.y < this.y - 50 || neighbour.y > this.y + this.height + 50) {
					px -= 20;
					qx -= 20;
				} else {
					py -= 20;
					qy -= 20;
				}
			}
			arrow(px, py, qx, qy, strokeWeight);
		}
		fill(this.fillColor);
		rect(this.x, this.y, this.width, this.height);
		fill(0);
		if (this.name) {
			textSize(50 * sf);
			text(this.name, this.x + this.width / 2.5, this.y + 10 + this.height / 2);
		}
	}
}

class Circle {
	constructor(x, y, radius = 50, fillColor = 'red', name) {
		this.neighbours = [];
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.fillColor = fillColor;
		if (name) this.name = name;
	}
	draw(strokeWeight = 2) {
		const sf = this.radius / 2;
		this.neighbours.forEach((neighbour) => {
			neighbour.draw();
			let px = this.x,
				py = this.y,
				qx,
				qy;
			if (neighbour.x < this.x + this.radius) {
				if (neighbour.y < this.y - 50) {
					//Top Left
					qx = neighbour.x + neighbour.radius / 2 * cos(-4.71) + 5;
					qy = neighbour.y + neighbour.radius / 2 * sin(-4.71) + 5;
				} else if (neighbour.y > this.y + this.radius + 50) {
					qx = neighbour.x + neighbour.radius / 2 * cos(4.71) - 5;
					qy = neighbour.y + neighbour.radius / 2 * sin(4.71) - 5;
				} else {
					qx = neighbour.x + neighbour.radius * cos(1);
					qy = neighbour.y + neighbour.radius * sin(0.1);
				}
			} else {
				if (neighbour.y < this.y - 50) {
					qx = neighbour.x + neighbour.radius / 2 * cos(-4.71) + 5;
					qy = neighbour.y + neighbour.radius / 2 * sin(-4.71) + 5;
				} else if (neighbour.y > this.y + this.radius + 50) {
					qx = neighbour.x + neighbour.radius / 2 * cos(4.71) - 5;
					qy = neighbour.y + neighbour.radius / 2 * sin(4.71) - 5;
				} else {
					qx = neighbour.x - neighbour.radius * cos(1);
					qy = neighbour.y - neighbour.radius * sin(0.1);
				}
			}
			arrow(px, py, qx, qy, strokeWeight);
		});
		fill(this.fillColor);
		ellipse(this.x, this.y, this.radius);
		fill(0);
		if (this.name) {
			textSize(sf);
			text(this.name, this.x - sf / 3, this.y + sf / 3);
		}
	}
}

function arrow(x1, y1, x2, y2, stroke = 5) {
	strokeWeight(stroke);
	const sf = stroke * 0.03;
	const x3 = x2 + sf * ((x1 - x2) * cos(0.5) + (y1 - y2) * sin(0.5));
	const y3 = y2 + sf * ((y1 - y2) * cos(0.5) - (x1 - x2) * sin(0.5));
	const x4 = x2 + sf * ((x1 - x2) * cos(0.5) - (y1 - y2) * sin(0.5));
	const y4 = y2 + sf * ((y1 - y2) * cos(0.5) + (x1 - x2) * sin(0.5));
	line(x1, y1, x2, y2);
	line(x2, y2, x3, y3);
	line(x2, y2, x4, y4);
	strokeWeight(1);
}
