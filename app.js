const listaAmigos = [];

function agregarAmigo (){
  const inputAmigo = document.getElementById("amigo");  
  if (!inputAmigo.value.trim()){
    alert("Nombre no válido, por favor escriba un nombre");
    return;
  }

  listaAmigos.push(inputAmigo.value.trim());

  actualizarLista();

  inputAmigo.value = "";
  inputAmigo.focus();
}

function actualizarLista(){
  const ulListaAmigos = document.getElementById("listaAmigos");  
  ulListaAmigos.innerHTML = "";

  listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ulListaAmigos.appendChild(li);
  });
}

function sortearAmigo(){
  const ulResultado =  document.getElementById("resultado");  
  if (listaAmigos.length === 0){
    alert("No hay amigos para sortear. Introduzca al menos dos nombres");
    return;
  }

  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<li>El amigo secreto es:  ${amigoSecreto}</li>`;
}