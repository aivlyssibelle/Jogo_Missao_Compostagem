function img(imagem, dx, dy, sx, sy){
  // Escala da imagem baseada na proporção da tela
  let scaleFactor = min(width / imagem.width, height / imagem.height);
  let imgWidth = imagem.width * scaleFactor * sx;
  let imgHeight = imagem.height * scaleFactor * sy;
  
  // Calcula a posição centralizada da imagem
  let x = (width - imgWidth) / 2 * dx;
  let y = (height - imgHeight) / 2 * dy;    
  image(imagem, x, y, imgWidth, imgHeight);
}