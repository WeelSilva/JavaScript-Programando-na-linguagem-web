var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest(); // Cria um objeto do tipo XMLHttpRequest

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Abre uma conexão com o endereço do servidor

  xhr.addEventListener("load", function () {
    // Adiciona um evento de carregamento

    if (xhr.status == 200) {
      // Verifica se a requisição foi bem sucedida
      var resposta = xhr.responseText; // Pega a resposta do servidor
      var pacientes = JSON.parse(resposta); // Transforma a resposta em um array de objetos

      pacientes.forEach(function (paciente) {
        // Percorre o array de objetos
        adicionaPacienteNaTabela(paciente); // Adiciona o paciente na tabela
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });
  xhr.send(); // Envia a requisição para o servidor
});
