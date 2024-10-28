function tela_inicial(){
  background(255);
  
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    textStyle(BOLD);
    textSize((min(width, height) * 0.05));
    textAlign(CENTER, CENTER);
    text("MISSÃO COMPOSTAGEM: \n SALVANDO O PLANETA", windowWidth/2, windowHeight/8);
  pop();
  
  image(img1, (windowWidth/2)-(width * 0.05), (windowHeight/2)-(height * 0.5/2), width * 0.5, height * 0.5);
  
  botao(windowWidth/6, (windowHeight/2)-75, 120, 30, "JOGAR", "#FE9A2E", "tela_fase_1");
  botao(windowWidth/6, windowHeight/2, 120, 30, "INSTRUÇÕES", "#FE9A2E", "tela_instrucoes");
  botao(windowWidth/6, (windowHeight/2)+75, 120, 30, "CRÉDITOS", "#FE9A2E", "tela_creditos");
  
}