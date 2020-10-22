var dropzone;
var img;
var drawImage = false;
function setup() {
    dropzone = createCanvas(750,650);
    pixelDensity(1);    
  
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight);
    background(0);
    
    
    rSlider=createSlider(-255,255,0);
    rSlider.position(650+100,50);
    textRSlider = createP("");
    textRSlider.position(650+120,20);
    r = "";
    
    gSlider=createSlider(-255,255,0);
    gSlider.position(650+100,150);
    textGSlider = createP("");
    textGSlider.position(650+120,120);
    g = "";
    
    bSlider=createSlider(-255,255,0);
    bSlider.position(650+100,250);
    textBSlider = createP("");
    textBSlider.position(650+120,220);
    b = "";
    
    fill(255);
    noStroke();
    textSize(24);
    textAlign(CENTER);
    text('Arraste uma imagem do seu computador e solte aqui.', 340, 300);
}

function draw() {
    
    updateSliderValue();    
    
    if(drawImage)
    {
        drawImagePixel();       
    }
   
}

function highlight(){
    background(255);
}
function unhighlight(){
    background(0);
}

function drawImagePixel(){  
        
        img.loadPixels();
        loadPixels();
        
        for(y= 0; y < img.height; y++)
        {
            for(x = 0; x < img.width; x++)
            {
            var index = (x +y*img.width)*4;
            var pixIndex = (y*width + x)*4;
            pixels[pixIndex] = img.pixels[index + 0] + r;
            pixels[pixIndex+1] = img.pixels[index + 1] + g;
            pixels[pixIndex+2] = img.pixels[index + 2] + b;
            pixels[pixIndex+3] = 255;
            }

        }
         updatePixels();
}

function updateSliderValue(){
    r = rSlider.value();
    textRSlider.html("R: "+r);
    g = gSlider.value();
    textGSlider.html("G: "+g);
    b = bSlider.value();
    textBSlider.html("B: "+b);
}

function gotFile(file){
  if(file.type === "image"){
   img = loadImage(file.data, function(){
      drawImage = true;
    });
  }    
    //LoadImage = Não existe o img.size() e o img.hide()
    //createImg = Não existe o img.get(x,y)
}

function mousePressed(){
 noStroke();
 fill(0, random(255), random(255), 100);
 ellipse(mouseX, mouseY, 15, 15);
}
