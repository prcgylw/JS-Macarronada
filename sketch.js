let palavra

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
}

function palavraAleatoria() { 
  let palavras = ["Macarronada", "Macarrão", "Massa"]
  palavra = random(palavras);
  return random(palavras);
}
function inicializaCores() {
  textAlign(CENTER, CENTER);
  textSize(64);
  textFont("comic sans ms");
  background("orange");
  fill("yellow");
}

function palavraParcial(minimo,maximo){
    let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    return parcial
}
function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 0;

  let texto = palavraParcial(0,width);
  
  text(texto, 200, 200);

}
function wttu(){

  let meme
  meme = ["engracado"]
  text(meme,200,200)
}