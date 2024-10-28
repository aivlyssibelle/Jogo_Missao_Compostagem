let stars = []; // Array para armazenar as estrelas

function tela_que_pena(){
  // Configura o fundo
  background("black");
  
  // Criação das estrelas, se ainda não tiver sido feito
  if (stars.length === 0) {
    for (let i = 0; i < 100; i++) {
      stars.push(new Star(random(width), random(height), random(2, 5)));
    }
  }
  
  // Atualiza e desenha todas as estrelas
  for (let star of stars) {
    star.update();
    star.show();
  }

  // Calcula o ângulo de rotação usando a função seno para um movimento suave
  let angle = sin(frameCount * 0.05) * 0.1; // Aumente ou diminua o valor para ajustar a amplitude

  // Centraliza e rotaciona a imagem
  push();
    imageMode(CENTER);
    translate(width / 2, height / 2);
    rotate(angle); // Aplica a rotação com o ângulo calculado
    image(img2, 0, -50, img2.width * 0.5, img2.height * 0.5); // Ajuste a escala conforme necessário
  pop();
  
  // Desenha o texto
  push();
    stroke("#04B431");
    strokeWeight(4);
    fill("#FFFFFF");
    textFont("Roboto");
    textStyle(BOLD);
    textSize((min(width, height) * 0.04));
    textAlign(CENTER, CENTER);
    text("QUE PENA!", windowWidth / 2, windowHeight / 8);
    text("Você escolheu a alternativa incorreta.", windowWidth / 2, windowHeight * 0.725);
  pop();

  // Desenha os botões
  botao(windowWidth - (width * 0.3), windowHeight - (height * 0.1), 120, 30, "MENU", "#04B431", "tela_inicial");
  botao((windowWidth / 2) - (width / 7.15), windowHeight * 0.775, 140, 30, "Voltar para a fase", "#04B431", fase_atual);
}

// Classe Star para criar estrelas
class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.brightness = random(150, 255); // Brilho da estrela
  }

  update() {
    // Atualiza a posição da estrela para simular um leve movimento
    this.x += random(-0.1, 0.1);
    this.y += random(-0.1, 0.1);
    
    // Mantém as estrelas dentro da tela
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  show() {
    fill(this.brightness); // Cor da estrela
    noStroke();
    ellipse(this.x, this.y, this.size, this.size); // Desenha a estrela
  }
}