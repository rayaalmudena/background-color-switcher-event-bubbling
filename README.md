# Cambia el color del fondo - Burbujeo de evento!

Al hacer clic en cada uno de los círculos de colores, el color de fondo del body debe cambiar al mismo color de fondo del círculo clicado. 

[Demo](https://js-beginners.github.io/background-color-switcher/)

1. Asocia el event __click__ al div identificado que tiene la clase __canvas__ . NO asocies el evento click a cada uno de los "botones" del DOM.
2. En la función que se ejecuta al capturar el evento click, haz un console.log de **event.target.id**
3. Utiliza ese valor para modificar el color de fondo de todo el __body__

Nota: es normal que para el botón de color verdoso, el código no funcione.

¡Felicidades! Has usado en tu beneficio el burbujeo de eventos

## BONUS

Existe una manera de poder "recoger" el color de fondo del nodo, sin tener que depender de su "id" ni ningún otro dato. Investiga por Internet como obtener el color de fondo aplicado por CSS a un nodo HTML.

