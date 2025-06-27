const palavrasComuns = ["pé", "mão", "pão", "flor", "sal", "luz", "sol", "mês", "mar", "rei", "voz", "chão", "céu",
"dor", "lar", "mel", "nau", "som", "cão", "rua", "cor", "nó", "paz", "fim", "gol", "bem",
"mal", "giz", "ser", "ter", "vir", "dar", "ir", "vir", "ver", "vir", "pôr", "crer", "ler", "ter", "vir", "ser",
"dar", "ir", "ver", "pôr", "fez", "diz", "quis", "fiz", "voz",
"casa", "mesa", "bola", "doce", "água", "fogo", "livro", "carro", "porta", "janela", "chuva", "vento", "copo",
"prato", "pato", "gato", "rato", "peixe", "banana", "café", "leite", "noite", "dia", "lua", "sol", "estrela",
"campo", "cidade", "ponte", "árvore", "flor", "folha", "areia", "pedra", "terra", "nuvem", "céu", "mar", "rio",
"montanha", "escola", "rua", "praça", "parque", "papel", "lápis", "caneta", "livro", "caderno", "mesa", 
"bonito", "amarelo", "vermelho", "caminho", "telefone", "cadeira", "cachorro", "borracha", "chocolate",
"bicicleta", "computador", "abelha", "elefante", "pássaro", "cenoura", "tomate", "batata", "cozinha", "janela",
"escada", "telefone", "parafuso", "martelo", "espelho", "garrafa", "panela", "colher", "geladeira",
"liquidificador", "televisão", "ventilador", "microfone", "mochila", "caneta", "caderno", "borracha", "régua",
"tesoura", "caderno", "armário", "banheiro", "quarto", "cozinha", "sala", "varanda", "jardim", "prédio",
"edifício", "hospital", "aeroporto", "universidade", "computação", "matemática", "literatura", "português",
"geografia", "história", "sociologia", "filosofia", "biologia", "engenharia", "arquitetura", "medicina",
"psicologia", "odontologia", "farmácia", "nutrição", "enfermagem", "fisioterapia", "administração",
"contabilidade", "advocacia", "jornalismo", "publicidade", "propaganda", "comunicação", "tecnologia",
"informática", "desenvolvimento", "programação", "inteligência", "artificial", "aprendizagem", "automática",
"processamento", "linguagem", "natural", "reconhecimento", "imagem", "segurança", "cibernética", "criptografia",
"blockchain", "metaverso", "realidade", "virtual", "aumentada", "sustentabilidade", "meioambiente",
"responsabilidade", "abrir", "bater", "cair", "dizer", "entrar", "fazer", "ganhar", "haver", "irônico", "jogar",
"levar", "morrer", "nascer", "olhar", "partir", "querer", "roubar", "saber", "trazer", "usar", "viver", "andar",
"beber", "correr", "dormir", "escrever", "falar", "girar", "honrar", "iluminar", "jantar", "lavar", "medir",
"navegar", "organizar", "pensar", "questionar", "retornar", "sentir", "tocar", "unir", "visitar", "acontecer",
"buscar", "cozinhar", "desenhar", "encontrar", "ferver", "gostar", "habitar", "imaginar", "justificar",
"lembrar", "montar", "negar", "obter", "procurar", "realizar", "salvar", "transmitir", "utilizar", "valorizar",
"aguardar", "comprar", "defender", "enviar", "formar", "gerar", "hesitar", "impactar", "lançar", "merecer",
"notar", "operar", "preparar", "registrar", "superar", "tolerar", "urgente", "viajar", "administrar",
"compartilhar", "decidir", "educar", "financiar", "garantir", "investigar", "lamentar", "manipular",
"necessitar", "observar", "participar", "representar", "significar", "transformar", "unificar", "validar", "analisar",
 "construir", "distribuir", "elaborar", "fortalecer", "identificar", "informar", "justificar",
"liderar", "manter", "otimizar", "personalizar", "resolver", "solucionar", "trabalhar", "verificar",
"abordar", "comunicar", "desenvolver", "estimular", "facilitar", "gerenciar", "implementar", "inovar",
"otimizar", "planejar", "promover", "revisar", "sintetizar", "utilizar", "avaliar", "colaborar",
"demonstrar", "evoluir", "fundamentar", "integrar", "interpretar", "legislar", "monitorar", "nutrir",
"orientar", "pesquisar", "priorizar", "racionalizar", "sistematizar", "aprimorar", "capacitar",
"dinamizar", "empreender", "estrategizar", "humanizar", "incentivar", "influenciar", "modernizar", 
"padronizar", "qualificar", "reafirmar", "reestruturar", "sistematizar", "valorizar", "viabilizar",
"abstrair", "ativar", "beneficiar", "contribuir", "despertar", "impulsionar", "maximizar",
"otimizar", "simplificar", "traduzir", "visualizar", "apresentar", "coordenar", "determinar",
"enfatizar", "flexibilizar", "harmonizar", "inspirar", "motivar", "perceber", "reflexionar",
"substituir", "teorizar", "viabilizar", "abundante", "acelerar", "adaptar", "adquirir",
"apreciar", "aprovar", "articular", "assegurar", "assistir", "atender"];

const menuButtons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".exercise");

let intervaloAtual = null; // armazenar valor do setInterval para ser limpo depois

menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


function parar() {
  if (intervaloAtual) {
    clearInterval(intervaloAtual);
    intervaloAtual = null;
  }

  // limpa todos os containers de exercícios
  document.querySelectorAll(".exercise div").forEach(div => {
    div.innerHTML = "";
  });
}

// Leitura em Blocos
function startBlocos() {
  const container = document.getElementById("bloco-texto"); // ID correto no HTML
  container.innerHTML = "";

  const ppm = parseInt(document.getElementById("ppm-blocos").value);
  const qtdBloco = parseInt(document.getElementById("qtd-bloco").value);

  const intervalo = (60000 / ppm) * qtdBloco;

  let i = 0;

  if (intervaloAtual) clearInterval(intervaloAtual);
  intervaloAtual = setInterval(() => {
    if (i >= palavrasComuns.length - qtdBloco) {
      i = 0; // recomeça do início ou use clearInterval() para parar
    }

    const bloco = palavrasComuns.slice(i, i + qtdBloco).join(" ");
    container.textContent = bloco;

    i += qtdBloco;
  }, intervalo);
}


// RSVP
function startRSVP() {
    const container = document.getElementById("rsvp-palavra");
    container.innerHTML = "";
  
    const ppm = parseInt(document.getElementById("ppm-rsvp").value);
    const intervalo = 60000 / ppm;
  
    if (intervaloAtual) clearInterval(intervaloAtual);

      intervaloAtual = setInterval(() => {
      const idx = Math.floor(Math.random() * palavrasComuns.length);
      container.textContent = palavrasComuns[idx];
    }, intervalo);
  }


// Busca Visual
function startBusca() {
  const container = document.getElementById("busca-container");
  const letras = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  const alvo = "X";
  container.innerHTML = "";

  let content = "";
  for (let i = 0; i < 200; i++) {
    const letra = letras[Math.floor(Math.random() * letras.length)];
    content += letra === alvo ? `<span style="color:red">${letra}</span> ` : letra + " ";
  }
  container.innerHTML = content;
}

function startDigitos() {
  const container = document.getElementById("contador");
  
  const npmN = parseInt(document.getElementById("npm-numeros").value);

  const ppmConversion = (60000 / npmN);

  if (intervaloAtual) {
    clearInterval(intervaloAtual);
  }

  intervaloAtual = setInterval(() => {
    const numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    container.textContent = numeroAleatorio;
  }, ppmConversion);
}
// Colunas
function startColunas() {
  const container = document.getElementById("colunas-container");
  container.innerHTML = "";
  let html = "<table><tr>";
  for (let i = 0; i < 3; i++) {
    html += "<td>";
    for (let j = 0; j < 10; j++) {
      html += palavrasComuns[Math.floor(Math.random() * palavrasComuns.length)] + "<br>";
    }
    html += "</td>";
  }
  html += "</tr></table>";
  container.innerHTML = html;
}

// Fixação de Olhar
function startFixacao() {
  const container = document.getElementById("fixacao-container");
  container.innerHTML = "";

  let i = 0;

  if (intervaloAtual) clearInterval(intervaloAtual);
  intervaloAtual = setInterval(() => {
    if (i >= 5) {
      clearInterval(intervaloAtual);
      intervaloAtual = null;
      return;
    }

    const palavra = palavrasComuns[Math.floor(Math.random() * palavrasComuns.length)];
    container.textContent = palavra;

    i++;
  }, 700);
}

function startBolinhasPagina() {
  const overlay = document.getElementById("overlay-treino");
  const container = document.getElementById("bolinhas-container");
  container.innerHTML = "";
  overlay.classList.add("active");

  const speed = parseInt(document.getElementById("vel-bolinhas").value);
  const dist = parseFloat(document.getElementById("dist-borda").value);

  if (intervaloAtual) clearInterval(intervaloAtual);

  const dot = document.createElement("div");
  dot.classList.add("bolinha");
  dot.style.position = "absolute";
  container.appendChild(dot);

  const W = overlay.clientWidth;
  const H = overlay.clientHeight;
  const marginX = (dist/100)*W;
  const marginY = (dist/100)*H;
  const left = marginX;
  const right = W - marginX - dot.clientWidth;
  const top = marginY;
  const bottom = H - marginY - dot.clientHeight;
  const lineStep = 40;

  let x = left, y = top;
  let dirX = 1, dirY = 1;

  dot.style.left = `${x}px`; dot.style.top = `${y}px`;

  intervaloAtual = setInterval(() => {
    x += dirX * ( (right-left) / ( (right-left)/10 ) );
    if ((dirX === 1 && x >= right) || (dirX === -1 && x <= left)) {
      x = dirX === 1 ? right : left;
      y += dirY * lineStep;
      if (y > bottom || y < top) {
        dirY *= -1;
        y += dirY * lineStep;
      }
      dirX *= -1;
    }
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  }, speed);

  setTimeout(() => {
    document.onclick = () => {
      parar();
      overlay.classList.remove("active");
      document.onclick = null;
    };
  }, 200);
}

function parar() {
  clearInterval(intervaloAtual);
}
