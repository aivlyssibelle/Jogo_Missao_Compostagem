let tela_atual = "tela_inicial";
let fase_atual = "tela_fase_1";
let clicado = false

let angle = 0;
let speed = 0.05;

function preload(){
  img_logo = loadImage('imagens/logo.png');
  img1 = loadImage('imagens/img1.png');
  img2 = loadImage('imagens/img2.png');
  img3 = loadImage('imagens/img3.png');
  img4 = loadImage('imagens/img4.png');
  img5 = loadImage('imagens/img5.png');
  img6 = loadImage('imagens/img6.png');
  img7 = loadImage('imagens/img7.png');
  img8 = loadImage('imagens/img8.png');
  img9 = loadImage('imagens/img9.png');
  img10 = loadImage('imagens/img10.png');
  img11 = loadImage('imagens/img11.png');
  img12 = loadImage('imagens/img12.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (tela_atual == "tela_inicial"){
    tela_inicial();
  } 
  else if (tela_atual == "tela_creditos"){
    tela_creditos();
  } 
  else if (tela_atual == "tela_instrucoes"){
    tela_instrucoes();
  } 
  else if (tela_atual == "tela_que_pena"){
    tela_que_pena();
  }
  else if (tela_atual == "tela_final"){
    tela_final();
    fase_atual = "tela_fase_1";
  }
  else if (tela_atual == "tela_fase_1"){
    tela_fase_1();
    fase_atual = "tela_fase_1";
  } 
  else if (tela_atual == "tela_fase_2"){
    tela_fase_2();
    fase_atual = "tela_fase_2";
  } 
  else if (tela_atual == "tela_fase_3"){
    tela_fase_3();
    fase_atual = "tela_fase_3";
  } 
  else if (tela_atual == "tela_fase_4"){
    tela_fase_4();
    fase_atual = "tela_fase_4";
  } 
  else if (tela_atual == "tela_fase_5"){
    tela_fase_5();
    fase_atual = "tela_fase_5";
  } 
  else if (tela_atual == "tela_fase_6"){
    tela_fase_6();
    fase_atual = "tela_fase_6";
  } 
  else if (tela_atual == "tela_fase_7"){
    tela_fase_7();
    fase_atual = "tela_fase_7";
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased() {
  if (clicado) clicado = false; // Reseta o estado de clique ao soltar o mouse
}
