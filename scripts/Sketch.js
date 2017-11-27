var blob;
var blobs = [];

//creates blob ojbects
function setup() {
    createCanvas(600, 600);
    blob = new Blob(width / 2, height / 2, 64);
    for (var i = 0; i < 50; i++) {
        var x = random(-width, width * 2);
        var y = random(-width, width * 2);
        blobs[i] = new Blob(random(x), random(y), 16);
    }

    console.log('setup done')
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    
    for (var i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
    }
    
    blob.show();
    blob.update();
    console.log('draw function success');
}
