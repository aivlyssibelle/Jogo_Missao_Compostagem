function tela_fase_1(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img3, 1, 0.45, 0.225, 0.225);
  img(img4, 1, 1.75, 0.225, 0.225);
  
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    push();
      textStyle(BOLD);
      textSize((min(width, height) * 0.04));
      textAlign(CENTER, CENTER);
      text("O que a compostagem produz?", windowWidth/2, windowHeight/8);
    pop();
    push();
      textSize((min(width, height) * 0.025));
      textAlign(RIGHT, CENTER);
      text("Fase 1", windowWidth-20, 25);
    pop();
  pop();

  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "MENU", "#FE9A2E", "tela_inicial");
  
  botao((windowWidth/2)-(width/4), windowHeight/2*0.82, 250, 30, "Papel", "#FE9A2E", "tela_que_pena");
  botao((windowWidth/2)-(width/4), windowHeight/2, 250, 30, "Adubo", "#FE9A2E", "tela_fase_2");
  botao((windowWidth/2)-(width/4), windowHeight/2*1.18, 250, 30, "Plástico", "#FE9A2E", "tela_que_pena");
  
}