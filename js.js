(function()
{

	var coordenadas =document.querySelector('html');
	var dimensiones=document.querySelector('#contenedor div');
	var posicion = dimensiones.getBoundingClientRect();
	
	coordenadas.addEventListener("mousemove", function(event) {
		var x = event.clientX;
		var y = event.clientY;
		if (x<parseInt(posicion.left)){
		  	dimensiones.style["transform"]= "perspective(900px) rotateY(-45deg) translateZ(50px)";
		}
		if(x>parseInt(posicion.right)){
		  	dimensiones.style["transform"]= "perspective(900px) rotateY(+45deg) translateZ(50px)";
		}
		if (y<parseInt(posicion.top)){
		  	 dimensiones.style["transform"]= "perspective(900px) rotateX(+45deg) translateZ(50px)";
		}
		if(y>parseInt(posicion.bottom)){
		  	dimensiones.style["transform"]= "perspective(900px) rotateX(-45deg) translateZ(50px)";
		}
    });
})();

