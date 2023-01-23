class Tower { //cria a classe
  constructor(x, y, width, height) { //define os parametros para a classe
    var options = { //opções para a classe
      isStatic: true // verifica se é estatico ou não
    };
    this.image = loadImage("assets/tower.png"); // carrega a imagem da torre
    this.width = width; // define a largura
    this.height = height; // define a altura
    this.body = Bodies.rectangle(x, y, this.width, this.height, options); // reune todas as informações para a criação do corpo retangular
    World.add(world, this.body); // adiciona o corpo ao mundo
  }
  display() { // função para exibir o objeto
    var pos = this.body.position; // variavel para a posição do corpo do sprite
    var angle = this.body.angle; // variavel para o angulo do corpo do sprite
    push(); // define novas configurações
    translate(pos.x, pos.y); // "traduz"/repassa a posição 0,0 para da imagem
    rotate(angle); // rotaciona caso necessário a imagem da linha 6
    imageMode(CENTER); // deixa a imagem centralizada no retangulo criado
    image(this.image, 0, 0, this.width, this.height); // adiciona a imagem declarada na linha 6
    pop(); // reverte as configurações antigas
  }
}
