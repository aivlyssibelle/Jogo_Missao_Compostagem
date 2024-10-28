function tela_instrucoes(){
  background(255);
  
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    textStyle(BOLD);
    textSize((min(width, height) * 0.075));
    textAlign(CENTER, CENTER);
    text("INSTRUÇÕES", windowWidth/2, windowHeight/8);
  pop();
  
  push();
    //stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    //textStyle(BOLD);
    textSize((min(width, height) * 0.04));
    textAlign(CENTER, CENTER);
    text("Jogo de perguntas e respostas," + "\n" + 
         "voltado para a Educação Ambiental Infantil," + "\n" + 
         "para alunos a partir do Primeiro ano do Ensino" + "\n" + 
         "Fundamental. Com o objetivo de estimular a" + "\n" + 
         "Educação Ambiental através da Compostagem." + "\n" + 
         " Leia a pergunta e escolha uma das opções." + 
         "\n" + "Apenas uma resposta está correta." + "\n" + 
         "Você só pode responder uma vez cada pergunta." + "\n" + 
         "Lembre-se dos conceitos de compostagem." + "\n" + 
         "Divirta-se!", windowWidth/2, windowHeight/2);
  pop();
  
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "VOLTAR", "#FE9A2E", "tela_inicial");
}