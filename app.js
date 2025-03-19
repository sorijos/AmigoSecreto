
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo()
{
    //empezamos obteniendo el valor del imput y quitanto espacios
    const input = document.getElementById('amigo');
    const amigoNombre = input.value.trim();

    // vamos a revisar que el campo no esté vacío
    if (!amigoNombre) {
        alert('Por favor ingresa un nombre, tu campo está vacío.');
        return;
      }

    // vamos a revisar que no se ingresen números      
    if (/^\d+$/.test(amigoNombre)) {
        alert('No se permiten nombres compuestos únicamente por números.');
        return;
    }

    // no hay que repetir nombres
    const lista = document.getElementById('listaAmigos');
    const existingLis = lista.querySelectorAll('li');
    
    for (let i = 0; i < existingLis.length; i++) {
        if (existingLis[i].textContent.trim().toLowerCase() === amigoNombre.toLowerCase()) {
            alert('El nombre ya existe en la lista.');
            return;
        }
    }    

    //vamos a obtener el id del elemento padre al que se le agregaran los elmntos li de los nombre ingresados 
    
    const li = document.createElement('li');
    li.textContent = amigoNombre;
    lista.appendChild(li);

    // vaciar el campo para que ingresen más nombres
    input.value = '';
    input.focus();

}


function sortearAmigo()
{
        // pasaremos los nombres a una lista para sortearlos
        const listaAmigos = document.getElementById('listaAmigos');
        const amigosLi = listaAmigos.querySelectorAll('li');

        // validar si hay nombres

        if (amigosLi.length === 0) {
            alert('No hay amigos en la lista para sortear.');
            return;
        } else if (amigosLi.length < 2){
            alert('Agrega más amigos');
            return;
        }


        // pasamos los amigos a una lista para el sroteo
        const amigos = [...amigosLi].map(li => li.textContent.trim());

        // Elegir un nombre random
        const randomIndex = Math.floor(Math.random() * amigos.length);
        const amigoGanador = amigos[randomIndex];

        // oculyas los LI
        listaAmigos.style.display = 'none';

        // Limpiar el contenido de 'resultado'
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';        

        // Crear un párrafo con el resultado
        const parrafoGanador = document.createElement('p');
        parrafoGanador.textContent = `El amigo secreto sorteado es: ${amigoGanador}`;
        // Aplicar estilos: negrita y color verde
        parrafoGanador.style.fontWeight = 'bold';
        parrafoGanador.style.color = 'green';
        resultado.appendChild(parrafoGanador);

        // Crear el botón para "Empezar lista con nuevos amigos"
        const botonReinicio = document.createElement('button');
        botonReinicio.textContent = 'Empezar lista con nuevos amigos';        

        // Configurar la acción al hacer clic en el botón de reinicio
        botonReinicio.onclick = function() {
            // renicio de lista listaAmigos
            listaAmigos.innerHTML = '';
            
            // mostramos todo como estaba al inicio
            listaAmigos.style.display = '';
            
            // borramos al antiguo ganador
            resultado.innerHTML = '';

            // Eliminar este botón
            botonReinicio.remove();
        };        
        
    // Agregar el botón junto al que sortea
    document.querySelector('.button-container').appendChild(botonReinicio);        

}


