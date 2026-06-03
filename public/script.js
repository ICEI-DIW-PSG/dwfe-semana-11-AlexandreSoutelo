const dados = [
  {
    id: 1,
    titulo: "Praça é revitalizada",
    descricao: "Espaço recebeu melhorias.",
    conteudo: "A praça central da cidade passou por reformas e agora conta com nova iluminação e áreas de lazer.",
    categoria: "Cidade",
    autor: "Maria Silva",
    data: "01/04/2025",
    imagem: "img/noticia1.jpg"
  },

  {
    id: 2,
    titulo: "Feira de tecnologia",
    descricao: "Evento reúne estudantes.",
    conteudo: "A feira apresentou projetos de inovação desenvolvidos por alunos de escolas e universidades.",
    categoria: "Tecnologia",
    autor: "João Souza",
    data: "02/04/2025",
    imagem: "img/noticia2.jpg"
  },

  {
    id: 3,
    titulo: "Festival de música",
    descricao: "Shows atraem público.",
    conteudo: "O festival contou com apresentações de artistas locais e grande participação da comunidade.",
    categoria: "Cultura",
    autor: "Ana Costa",
    data: "03/04/2025",
    imagem: "img/noticia3.jpg"
  }
];

const listaNoticias = document.getElementById("lista-noticias");

if(listaNoticias){

    dados.forEach(noticia => {

        listaNoticias.innerHTML += `
            <div class="card">

                <img src="${noticia.imagem}" alt="${noticia.titulo}">

                <div class="card-content">
                    <h2>${noticia.titulo}</h2>

                    <p>${noticia.descricao}</p>

                    <a class="botao"
                       href="detalhes.html?id=${noticia.id}">
                       Ver detalhes
                    </a>
                </div>

            </div>
        `;
    });
}


// Página de detalhes
const detalhes = document.getElementById("detalhes");

if(detalhes){

    const parametros = new URLSearchParams(window.location.search);

    const id = parseInt(parametros.get("id"));

    const noticia = dados.find(item => item.id === id);

    if(noticia){

        detalhes.innerHTML = `
            <div class="detalhe-container">

                <img src="${noticia.imagem}" alt="${noticia.titulo}">

                <h2>${noticia.titulo}</h2>

                <p class="meta">
                    Autor: ${noticia.autor}
                </p>

                <p class="meta">
                    Categoria: ${noticia.categoria}
                </p>

                <p class="meta">
                    Data: ${noticia.data}
                </p>

                <hr><br>

                <p>${noticia.conteudo}</p>

                <br>

                <a class="botao" href="index.html">
                    Voltar
                </a>

            </div>
        `;
    } else {

        detalhes.innerHTML = `
            <h2>Notícia não encontrada.</h2>
        `;
    }
}


  