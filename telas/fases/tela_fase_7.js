function tela_fase_7(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img11, 1, 1.6, 0.425, 0.425); 
  
  ///// TEXTO /////
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    push();
      textStyle(BOLD);
      textSize((min(width, height) * 0.04));
      textAlign(CENTER, CENTER);
      text("Como a compostagem ajuda \n a cuidar da natureza?", windowWidth/2, windowHeight/8);
    pop();
    push();
      textSize((min(width, height) * 0.025));
      textAlign(RIGHT, CENTER);
      text("Fase 7", windowWidth-20, 25);
    pop();
  pop();
  
  ///// BOTÃO MENU /////
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "MENU", "#FE9A2E", "tela_inicial");
  
  ///// BOTÕES DAS ALTERNATIVAS /////
  ///// BOTÕES DAS ALTERNATIVAS /////
  botao((windowWidth/2)-(width/4), windowHeight/2*0.64, 250, 30, "Reduz o lixo e ajuda as plantas", "#FE9A2E", "tela_final");
  botao((windowWidth/2)-(width/4), windowHeight/2*0.82, 250, 30, "Faz as plantas pararem de crescer", "#FE9A2E", "tela_que_pena");
}