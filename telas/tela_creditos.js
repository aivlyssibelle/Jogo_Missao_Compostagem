function tela_creditos(){
  background(255);
  
  push();
    stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    textStyle(BOLD);
    textSize((min(width, height) * 0.075));
    textAlign(CENTER, CENTER);
    text("CRÉDITOS", windowWidth/2, windowHeight/8);
  pop();
  
  push();
    //stroke("#FE9A2E")
    fill("#FE9A2E");
    textFont("Roboto");
    //textStyle(BOLD);
    textSize((min(width, height) * 0.04));
    textAlign(CENTER, CENTER);
    text("Jogo desenvolvido por Aivlys Sibelle," + "\n" + 
         "o qual faz parte da composição do manual didático:" + "\n" + 
         "Implementando a Compostagem como ferramenta " + "\n" + 
         "didática nos componentes curriculares do" + "\n" + 
         "Ensino Fundamental – Anos Iniciais (1º ao 5º ano)." + "\n" + 
         "Este jogo e o manual integram os Produtos" + "\n" + 
         "Tecnológicos do Programa de Pós-Graduação em" + "\n" + 
         "Uso Sustentável de Recursos Naturais, Mestrado" + "\n" +
         "Profissional (PPgUSRN) do Instituto Federal de" + "\n" + 
         "Educação, Ciência e Tecnologia do" + "\n" +  
         "Rio Grande do Norte (IFRN).", windowWidth/2, (windowHeight/2)-40);
  pop();
  
  image(img_logo, (windowWidth/2)-(width * 0.25/2), windowHeight-(height * 0.25), width * 0.25, height * 0.2);
  
  botao(windowWidth-(width * 0.3), windowHeight-(height * 0.1), 120, 30, "VOLTAR", "#FE9A2E", "tela_inicial");
}