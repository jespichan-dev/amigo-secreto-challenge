// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
   const input = document.getElementById('amigo');
   const nombre = input.value.trim();

   if (nombre === '') {
      alert('Por favor, escribe un nombre válido.');
      return;
   }

   amigos.push(nombre);
   input.value = '';
   mostrarLista();
}

// Función para mostrar la lista en el UL
function mostrarLista() {
   const lista = document.getElementById('listaAmigos');
   lista.innerHTML = '';

   amigos.forEach((amigo, index) => {
      const li = document.createElement('li');
      li.textContent = amigo;
      lista.appendChild(li);
   });
}

// Función para sortear un amigo
function sortearAmigo() {
   if (amigos.length === 0) {
      alert('La lista está vacía. Agrega al menos un nombre.');
      return;
   }

   const indiceAleatorio = Math.floor(Math.random() * amigos.length);
   const amigoSorteado = amigos[indiceAleatorio];

   const resultado = document.getElementById('resultado');
   resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

// Función para reiniciar la partida
function nuevaPartida() {
   amigos = [];
   document.getElementById('listaAmigos').innerHTML = '';
   document.getElementById('resultado').innerHTML = '';
   document.getElementById('amigo').value = '';
}
