


// Objecto sktech









let container = document.querySelector('.container');
let clearBtn = document.querySelector('#clearBtn');
let smallBtn = document.querySelector('#smallBtn');
let mediumBtn = document.querySelector('#mediumBtn');
let bigBtn = document.querySelector('#bigBtn');

function createBoardSmall(){
    for ( let i = 0 ; i < 256 ; i++ ) {
        let point = document.createElement('div');
        point.style.width = '16px';
        point.style.height ='16px';
        point.className = 'divPoint';
        container.appendChild(point);
    }
  
}

function createBoardMedium(){
    for ( let i = 0 ; i < 1024 ; i++ ) {
        let point = document.createElement('div');
        point.style.width = '16px';
        point.style.height ='16px';
        point.className = 'divPoint';
        container.appendChild(point);
    }
  
}
function createBoardBig(){
    for ( let i = 0 ; i < 4096 ; i++ ) {
        let point = document.createElement('div');
        point.style.width = '8px';
        point.style.height ='8px';
        point.className = 'divPoint';
        container.appendChild(point);
        
    }
  
}






smallBtn.addEventListener('click', function(){
    container.classList.remove('container-medium');
    container.classList.remove('container-big');
    container.classList.add('container');
    deleteBoard();
    createBoardSmall();
    checker();
    
});
mediumBtn.addEventListener('click', function(){
    container.classList.remove('container');
    container.classList.remove('container-big');
    container.classList.add('container-medium');
    deleteBoard();
    createBoardMedium();
    checker();
    
});
bigBtn.addEventListener('click', function(){
    container.classList.remove('container');
    container.classList.remove('container-medium');
    container.classList.add('container-big');
    deleteBoard();
    createBoardBig();
    checker();
    
});





function clearBoard(){
    let miniDivs = container.children;
    for(let i = 0; i < miniDivs.length ; i++){
        miniDivs[i].classList.remove('black');
    }
}
clearBtn.addEventListener('click', clearBoard);

function deleteBoard(){
    let miniDivs = container.children;
    while(miniDivs[0]){
        miniDivs[0].parentNode.removeChild(miniDivs[0]);
    }
}


function checker(){
    let miniDivs = container.children;
    for (let index = 0; index < miniDivs.length; index++) {
        miniDivs[index].addEventListener('mouseenter', function(e){
            console.log('hi');
            e.target.classList.add('black');

        });
    }
}
window.onload = createBoardSmall();
window.onload = checker();