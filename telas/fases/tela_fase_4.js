function tela_fase_4(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img8, 1, 0.7, 0.5, 0.5); 
  
  ///// TEXTO /////
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    push();
      textStyle(BOLD);
      textSize((min(width, height) * 0.04));
      textAlign(CENTER, CENTER);
      text("O que a compostagem \n faz para o solo?", windowWidth/2, windowHeight/8);
    pop();
    push();
      textSize((min(width, height) * 0.025));
      textAlign(RIGHT, CENTER);
      text("Fase 4", windowWidth-20, 25);
    pop();
  pop();
  
  ///// BOTÃO MENU /////
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "MENU", "#FE9A2E", "tela_inicial");
  
  ///// BOTÕES DAS ALTERNATIVAS /////
  botao((windowWidth/2)-(width/4), windowHeight/2*1.18, 250, 30, "Ela deixa o solo sem nutrientes", "#FE9A2E", "tela_que_pena");
  botao((windowWidth/2)-(width/4), windowHeight/2*1.3575, 250, 30, "Ela deixa o solo com nutrientes", "#FE9A2E", "tela_fase_5");
}