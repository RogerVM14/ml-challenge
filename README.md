
# Mercado Libre Challenge

El siguiente repositorio contiene código de un challenge técnico como parte de una entrevista técnica. 





## Resumen

El código está desarrollado contemplando varios aspectos importantes:

- Usabilidad
- SEO
- Performance
- Escalabilidad
- Responsive

Se trabajo llevando a cabo una metodologia Atomica, la cuál nos permite poder ejecutar de una manera más modular, y por lo tanto, escalable, cualquier proyecto. 
Así mismo, se evito utilizar cosas inecesarias para mantener el performance de la página web.
En cuestion de responsivo, se hizo uso del grid de css para poder tener una relación correcta con las pantallas, en cada uno de los diferentes tamaños de monitores.


### Como ejecutar el proyecto ###

Dentro del repositorio podrás encontrar dos carpetas:
- cliente
- servidor

La cual, la primera contiene todo la lógica de programación, usando REACT JS, HTML, y CSS. Así mismo, como storage management se implemento redux toolkit.

Mientras que la carpeta de servidor, podremos encontrar en ella todo el contenido del servidor de Nodejs con Express.


Para poder ejecutar ambos proyectos:

nos situamos en la carpeta cliente, y ejecutamos npm i


## Installation

Instala el proyecto cliente usando npm 

```bash
  cd cliente
  npm install 
  npm start
```
Instala el proyecto server usando npm 

```bash
  cd server
  npm install 
  npm start
```
Con esto mantendremos ambos servidores encendidos para la perfecta comunicacion entre las plataformas.

NOTA: El Server debe levantarse estrictamente en el puero 3000 para una correcta funcion, para ello, simplemente levantamos primero el servidor y después el cliente.