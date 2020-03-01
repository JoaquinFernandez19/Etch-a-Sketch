

// Objecto sktech donde se almacenan todos los nodes html

let sketch = {
    container : document.querySelector('.container'),
    clearBtn : document.querySelector('#clearBtn'),
    smallBtn : document.querySelector('#smallBtn'),
    mediumBtn : document.querySelector('#mediumBtn'),
    bigBtn : document.querySelector('#bigBtn'),
    red : document.querySelector('#red'),
    black : document.querySelector('#black')
}

let redState = false;
let blackState = true;

sketch.red.addEventListener('click', function(){
    redState = true;
    blackState = false;
    checker();  
})
sketch.black.addEventListener('click', function(){
    redState = false;
    blackState = true;
    checker();  
})


// funciones creadoras dependiendo del tamanio seleccionado
function createBoardSmall(){
    for ( let i = 0 ; i < 256 ; i++ ) {             //loop 256 repeticiones
    
        let point = document.createElement('div');  //crea 1 div llamada point
        point.style.width = '2em';                  //le asigna un width
        point.style.height ='2em';                  //le asigna un height
        point.className = 'divPoint';               //se le agrega una classe usada simplemente por propositos esteticos
        sketch.container.appendChild(point);        //agrega esa div a el container, el cual ya es una grid lista
                                                    //para almacenar las divs en un cuadrado
    }
  
}
function createBoardMedium(){                       
    for ( let i = 0 ; i < 1024 ; i++ ) {            //loop 1024 repeticiones
        let point = document.createElement('div');
        point.style.width = '1em';
        point.style.height ='1em';
        point.className = 'divPoint';
        sketch.container.appendChild(point);
    }
  
}
function createBoardBig(){
    for ( let i = 0 ; i < 4096 ; i++ ) {            //loop 4096 repeticiones
        let point = document.createElement('div');
        point.style.width = '0.5em';
        point.style.height ='0.5em';
        point.className = 'divPoint';
        sketch.container.appendChild(point);
        
    }
  
}


                                                            //eventListener para cambiar de size
sketch.smallBtn.addEventListener('click', function(){              //small btn
    sketch.container.classList.remove('container-medium');  //si estaba en size-medium, lo saca
    sketch.container.classList.remove('container-big');     //si estaba en size-big, lo saca
    sketch.container.classList.add('container');            //agrega la clase correspondiente para preparar el espacio
    deleteBoard();                                          //borra la tabla actual para dejar el container vacio
    createBoardSmall();                                     //crea una tabla small que se posiciona en el container vacio 
    checker();                                              //activa la funcion que checkea y pinta los cuadrados
    
});
sketch.mediumBtn.addEventListener('click', function(){             //medium size listener
    sketch.container.classList.remove('container');
    sketch.container.classList.remove('container-big');
    sketch.container.classList.add('container-medium');
    deleteBoard();
    createBoardMedium();
    checker();
    
});
sketch.bigBtn.addEventListener('click', function(){                //big size listener
    sketch.container.classList.remove('container');
    sketch.container.classList.remove('container-medium');
    sketch.container.classList.add('container-big');
    deleteBoard();
    createBoardBig();
    checker();
    
});
sketch.clearBtn.addEventListener('click', clearBoard); //listener del boton que limpia, al clickearlo ejecuta 'clearBoard';



                                                            //utilidades y funciones a usar
function clearBoard(){                          //limpia la tabla actual, borra la clase 'black' que determina si una div está pintada, dejandolas blancas
    let miniDivs = sketch.container.children;   
    for(let i = 0; i < miniDivs.length ; i++){  
        miniDivs[i].classList.remove('black');
        miniDivs[i].classList.remove('red');
    }
}
sketch.clearBtn.addEventListener('click', clearBoard); //listener del boton que limpia, al clickearlo ejecuta 'clearBoard';

function deleteBoard(){                         //deleteBoard fue creada para evitar que al cambiar de tabla se sobrepongan las tablas creando una talba enorme
    let miniDivs = sketch.container.children;   //seleccionamos toda las divs
    while(miniDivs[0]){                                  // while miniDivs[0](todas las divs)
        miniDivs[0].parentNode.removeChild(miniDivs[0]); //remover todas las divs
    }
}


function painter(e){
    let current = e.target; 
    if(redState === true){
        blackState = false;
        current.classList.add('red');
    }else {
        current.classList.add('black');
    }
 
}





function checker(){                             //activa un eventlistener para todas las divs que cuando se les pasa elmouse por arriba, 
                                                // su clase cambia a black
    let miniDivs = sketch.container.children;                           //seleccionamos todas las divs
    for (let index = 0; index < miniDivs.length; index++) {             //loop que pase por todas las divs

        miniDivs[index].addEventListener('mouseover', painter);           //event listener para DIV ACTUAL a la cual el mouse ingrese cambie el color a black

                                                                                    
    }
    
}
window.onload = createBoardSmall();             //la default board al iniciar al pagina es la small, por eso creo uno sin tener que borrar nada
window.onload = checker();                      //activo la funcion de detectar las divs, checker se tiene que activar para cada instancia
                                                


