function tela_fase_6(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img10, 1, 0.65, 0.425, 0.425); 
  
  ///// TEXTO /////
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    push();
      textStyle(BOLD);
      textSize((min(width, height) * 0.04));
      textAlign(CENTER, CENTER);
      text("O que contece com cascas \n de frutas no lixo comum??", windowWidth/2, windowHeight/8);
    pop();
    push();
      textSize((min(width, height) * 0.025));
      textAlign(RIGHT, CENTER);
      text("Fase 6", windowWidth-20, 25);
    pop();
  pop();
  
  ///// BOTÃO MENU /////
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "MENU", "#FE9A2E", "tela_inicial");
  
  ///// BOTÕES DAS ALTERNATIVAS /////
  botao((windowWidth/2)-(width/4), windowHeight/2*1.175, 250, 30, "Demoram a decompor", "#FE9A2E", "tela_fase_7");
  botao((windowWidth/2)-(width/4), windowHeight/2*1.355, 250, 30, "Desaparecem", "#FE9A2E", "tela_que_pena");
  
}