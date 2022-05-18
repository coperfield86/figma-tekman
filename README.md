# Pasos para visualizar la app
1- Descargar código
2- En la consola escribir `npm install` para descargar las librerías
3- En la consola escribir `ng serve` y fijarse en el puerto en el que se publica la app
4- Poner en el navegador la url generada. Generalmente es `http://localhost:4200`

# PWA
He configurado para que la app se convierta en una PWA. Con esto podrá ser instalable. Para poder ver esto:
1- En la consola escribir `npm run start-pwa` y fijarse en las url en que se publica la PWA
2- Poner una de estas URl en el navegador
3- A la derecha de la barra del navegador, aparecerá un icono para instalar la app.

# Temas de arquitectura
La app tiene una arquitectura limpia y se utilizan buenas prácticas en el desarrollo de app con angular. A continuación se detallan:
1- Patron repositorio para manejar el servicio para consumir info de una api. Hay dos servicios uno que se conectaría directamente a una api y otro que hace un mock a partir de un json. Notar que lo que se usa en el componente es la clase abstracta de forma que cuando se quiera cambiar no tendremos que cambiar el código del componente, solo la configuración.
2- Se utilizan varios módulos de angular y estos se cargan de forma perezosa para lograr una rápida carga de la app.
3- Se utilza un módulo para exportar todo lo que tiene que ver con angular material
4- Se utiliza un módulo shared donde están todos los componentes comunes a la app y asi no cargar el ḿodulo principal
