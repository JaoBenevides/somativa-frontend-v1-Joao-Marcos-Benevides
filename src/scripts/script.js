const saudacaoLivraria = document.getElementById("saudacao-livraria")
const bannerCultura = document.getElementById("banner-cultura")
const qtdLivros = document.getElementById("qtd-livros")
const totalPagar = document.getElementById("total-pagar")
const btnLista = document.getElementById("btn-lista")
const nomeLivro = document.getElementById("nome-livro")
const listaLeitura = document.getElementById("lista-leitura")
const btnLimpar = document.getElementById("btn-limpar")

const horaAtual = new Date().getHours()
if (horaAtual < 12) {
  saudacaoLivraria.textContent = ("Boa leitura matinal!")
} else if (horaAtual < 18) {
  saudacaoLivraria.textContent = ("Aproveite a tarde para ler!")
} else {
  saudacaoLivraria.textContent = ("Uma boa história antes de dormir?")
}

bannerCultura.addEventListener("mouseover", function () {
  bannerCultura.classList.add("tema-sepia")
})

bannerCultura.addEventListener("mouseout", function (){
  bannerCultura.classList.remove("tema-sepia")
})

qtdLivros.addEventListener("input", function () {
  const quantidade = Number(qtdLivros.value)
  const total = quantidade * 42
  totalPagar.textContent = total.toFixed(2)
})

btnLista.addEventListener("click", function() {
  const titulo = nomeLivro.value.trim()
  if (titulo === "") {
    console.warn("Digite um título válido!")
    return
  }

  listaLeitura.innerHTML += `<article class="card-leitura"><h3> Título: ${titulo}</h3></article>'`
  nomeLivro.value = ""
  nomeLivro.focus()
})

btnLimpar.addEventListener("click", function () {
  listaLeitura.innerHTML = ""
  window.alert("Sua lista foi arquivada com sucesso!")
  nomeLivro.focus()
})
