var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest(); // Cria um objeto do tipo XMLHttpRequest

  xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); // Abre uma conexão com o endereço do servidor

  xhr.addEventListener("load", function () {
    // Adiciona um evento de carregamento

    if (xhr.status == 200) {
      // Verifica se a requisição foi bem sucedida
      var resposta = xhr.responseText; // Pega a resposta do servidor
      var pacientes = JSON.parse(resposta); // Transforma a resposta em um array de objetos

      pacientes.forEach(function (paciente) {

        adicionaPacienteNaTabela(paciente); // Adiciona o paciente na tabela
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });
  xhr.send(); // Envia a requisição para o servidor
});
