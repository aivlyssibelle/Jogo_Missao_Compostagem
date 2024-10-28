function tela_fase_3(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img3, 1, 1.8, 0.225, 0.225); 
  img(img6, 1, 1.075, 0.175, 0.175);
  img(img7, 1, 0.4, 0.225, 0.225);
  
  ///// TEXTO /////
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    push();
      textStyle(BOLD);
      textSize((min(width, height) * 0.04));
      textAlign(CENTER, CENTER);
      text("Qual o principal benefício da compostagem?", windowWidth/2, windowHeight/8);
    pop();
    push();
      textSize((min(width, height) * 0.025));
      textAlign(RIGHT, CENTER);
      text("Fase 3", windowWidth-20, 25);
    pop();
  pop();
  
  ///// BOTÃO MENU /////
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "MENU", "#FE9A2E", "tela_inicial");
  
  ///// BOTÕES DAS ALTERNATIVAS /////
  botao((windowWidth/2)-(width/4), windowHeight/2*0.75, 250, 30, "Rezuz o lixo", "#FE9A2E", "tela_fase_4");
  botao((windowWidth/2)-(width/4), windowHeight/2*1.25, 250, 30, "Gera eletricidade", "#FE9A2E", "tela_que_pena");
}