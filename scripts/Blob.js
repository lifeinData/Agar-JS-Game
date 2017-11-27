/*jslint indent: 4 */
/*global define*/

function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

    this.update = function () {
        var vel = createVector(mouseX - width / 2, mouseY - height / 2) //centers the blob relative to it's cetner
        vel.setMag(2); //size
        this.pos.add(vel);
    }

    this.eats = function (other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        //checks if the distance between the two centers (big blob vs blob[i]) is smaller than their added radius{
        if (d < this.r + other.r) {
            this.r += sqrt(other.r);
            return true;
        } else {
            return false;
        }

    }
}
