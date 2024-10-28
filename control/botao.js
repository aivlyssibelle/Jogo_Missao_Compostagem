/*
x -> Número: coordenada x do retângulo.
y -> Número: coordenada y do retângulo.
w -> Número: largura do retângulo.
h -> Número: altura do retângulo.
*/

function botao(x, y, w, h, texto, cor, proxima_tela){
  push();
    if(mouseX >= x && mouseY >= y && 
       mouseX <= x+(w*windowWidth/500) && 
       mouseY <= y+(h*windowHeight/500)){
      fill("#FFFFFF");
    }else{
      fill(cor);
    }
    
    stroke(cor);
    strokeWeight(5);
    rect(x, y, w*windowWidth/500, h*windowHeight/500, 5);
  pop();
  
  push();
    if(mouseX >= x && mouseY >= y && 
       mouseX <= x+(w*windowWidth/500) && 
       mouseY <= y+(h*windowHeight/500)){
      fill(cor);
    }else{
      fill("#FFFFFF");
    }
    textFont("Roboto");
    textStyle(BOLD);
    textSize((min(width, height) * 0.03));
    textAlign(CENTER, CENTER);
    text(texto, x+((w*windowWidth/500)/2), 2+y+((h*windowHeight/500)/2));
  pop();
  
  // Verifica clique no botão e muda de tela
  if (!clicado && mouseIsPressed &&
      mouseX >= x && mouseY >= y &&
      mouseX <= x + (w * windowWidth / 500) &&
      mouseY <= y + (h * windowHeight / 500)) {
    tela_atual = proxima_tela;
    clicado = true; // Marca o botão como clicado para evitar repetição
  }
}
