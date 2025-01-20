document.addEventListener("touchmove", (e) => e.preventDefault(), {
    passive: false,
});

let vS;
let vC;

/**
 * 指定した座標に半径rの十字を描画する
 * @param {*} x 
 * @param {*} y 
 * @param {*} r 
 */
function cross(x, y, r) {
    line(x - r, y, x + r, y);
    line(x, y - r, x, y + r);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    vS = createVector(0, 0);
    vC = createVector(0, 0);
}

function draw() {
    background(220);

    // 罫線
    push();
    strokeWeight(1);
    stroke(200);
    for (let x = 0; x < width; x += 20) {
        line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += 20) {
        line(0, y, width, y);
    }
    pop();

    // 始点
    push();
    fill(255, 0, 0);
    ellipse(vS.x, vS.y, 10, 10);
    pop();

    // カーソル
    vC.set(mouseX, mouseY);
    cross(vC.x, vC.y, 20);

    // 始点からカーソルまでのベクトル
    let vD = p5.Vector.sub(vC, vS);
    line(vS.x, vS.y, vC.x, vC.y);
    


    // デバッグテキスト
    push();
    fill(0);
    text(`(${vC.x}, ${vC.y})`, vC.x + 10, vC.y - 10);
    pop();
}

function mousePressed() {
    vS.set(mouseX, mouseY);
}