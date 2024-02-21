function setup() {
    createCanvas(960, 540);
    background(144, 238, 144);
    noStroke();
    fill(200,0,0);
    rect(10, 10, 55, 50);
    fill('rgba(0, 0, 200, 0.5)');
    rect(30, 30, 55, 50);
  }

  function setup() {
    let cnv = createCanvas(960, 540);
    cnv.id('canvas2');
    background(144, 238, 144);
    noStroke();
    fill(200,0,0);
    rect(10, 10, 55, 50);
    fill('rgba(0, 0, 200, 0.5)');
    rect(30, 30, 55, 50);
  }

  function setup() {
    let cnv = createCanvas(960, 540);
    cnv.id('canvas3');
    cnv.parent('movecanvas');
  }