function tela_fase_5(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img3, 1, 1.325, 0.25, 0.25); 
  img(img9, 1, 0.5, 0.25, 0.25);
  
  ///// TEXTO /////
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    push();
      textStyle(BOLD);
      textSize((min(width, height) * 0.04));
      textAlign(CENTER, CENTER);
      text("Qual o nome do adubo da compostagem?", windowWidth/2, windowHeight/8);
    pop();
    push();
      textSize((min(width, height) * 0.025));
      textAlign(RIGHT, CENTER);
      text("Fase 5", windowWidth-20, 25);
    pop();
  pop();
  
  ///// BOTÃO MENU /////
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "MENU", "#FE9A2E", "tela_inicial");
  
  ///// BOTÕES DAS ALTERNATIVAS /////
  botao((windowWidth/2)-(width/4), windowHeight/2*0.85, 250, 30, "Composto orgânico", "#FE9A2E", "tela_fase_6");
  botao((windowWidth/2)-(width/4), windowHeight/2*1.5, 250, 30, "Veneno orgânico", "#FE9A2E", "tela_que_pena");
}