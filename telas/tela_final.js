function tela_final(){
  background(255);
  
  ////////// IMAGENS DA TELA //////////
  ///(imagem, posiçãoX, posiçãoY, escalaX, escalaY)///
  img(img12, 1, 1, 0.65, 0.65); 
  
  
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    textStyle(BOLD);
    textSize((min(width, height) * 0.05));
    textAlign(CENTER, CENTER);
    text("PARABÉNS!!! \n VOCÊ CONCLUIU TODAS AS RESPOSTAS!!!", windowWidth/2, windowHeight/8);
  pop();
  
  push();
    //stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    //textStyle(BOLD);
    textSize((min(width, height) * 0.03));
    textAlign(CENTER, CENTER);
    text("AMIGUINHOS VAMOS SALVAR O PLANETA!", windowWidth/2, windowHeight/2*1.7);
  pop();
  
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "VOLTAR", "#FE9A2E", "tela_inicial");
}