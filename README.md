# spring-rest-api-with-angular
## Backend
### Descripción
Aplicación desarrollada con Spring Boot (JPA, RESTController, JDBC, Maven), donde se exponen los siguientes endpoints que son consumidos por el cliente (proyecto Angular):

  | Endpoint | Descripción |Posibles valores para path param |
  | ------ | ------ | ------|
    | /api/languaje/ | HTTP GET para traer desde MYSQL el listado de idiomas.  | No aplica dado que se traen todos los idiomas almacenados en base de datos. |
  | /api/letter/{languajeId} | HTP GET para traer desde MYSQL el listado de cartas asociadas a un idioma.   | Número entre 1 y 5 que representa uno de los idiomas disponibles para obtener el listado de cartas.|

La estructura de la aplicación se basa en tres capas:
-Model: Capa que representa las tablas de la base de datos, por tanto define las entidades y sus relaciones a través de JPA.

-Repository: Capa basada en Interfaces que heredan la lógica de JPARepository quien se encarga de realizar la comunicación con la base de datos.

-Controller: Esta capa inyecta los Repository con el fín de utilizar sus diferentes métodos dentro de los GetMapping (endpoint) que finalmente se exponen al cliente. 

### Cómo ejecutar el Backend?
Abrir el proyecto con Spring Tool Suite o Eclipse, asegurándose que se verifique correctamente la carga de todas las dependencias Maven y posteriormente ejecutar la clase principal de la aplicación (BackendApplication.java).
Se asume que el PC dónde se busca ejecutar la aplicación cuenta con Java 1.8.0_171.
La aplicación se ejecuta sobre el puerto 8080.
No se requiere realizar configuración adicional alguna más que verificar que los endpoint respondan correctamente (Utilizar postman o directamente el navegador).

## FrontEnd
### Descripción
Aplicación desarrollada en Angular utilizando:
Angular CLI: 8.3.3
Node: 10.16.3
Angular: 8.2.5
@angular-devkit/architect         0.803.3
@angular-devkit/build-angular     0.803.3
@angular-devkit/build-optimizer   0.803.3
@angular-devkit/build-webpack     0.803.3
@angular-devkit/core              8.3.3
@angular-devkit/schematics        8.3.3
@angular/cdk                      8.1.4
@angular/cli                      8.3.3
@angular/http                     7.2.15
@angular/material                 8.1.4
@ngtools/webpack                  8.3.3
@schematics/angular               8.3.3
@schematics/update                0.803.3
rxjs                              6.4.0
typescript                        3.5.3
webpack                           4.39.2

La aplicación se separa en dos capas básicamente:
-components: Capa de componentes angular (Template + Archivo .ts) que se encarga del look and feel, la lógica de presentación y la comunicación con la capa de services.
-services: capa que se encarga de consumir directamente los endpoint REST proporcionados por el backend y devolver la data que posteriormente muestran los componentes.

### Cómo ejecutar el Frontend?
Dentro de la carpeta raíz del proyecto (frontend) ejecutar los siguientes comandos por terminal:
$ npm install
$ npm start

Si todo es correcto la terminal indicará el build success y la aplicación se ejecutará sobre el puerto 4200 (abrir el navegador en la url localhost:4200).
Se asume que el PC donde se va a ejecutar cuenta con NodeJs y Angular CLI instalados en las versiones antes mencionadas.

## Base de datos
### Descripción

Un plus adicional que tiene esta solución es que la data del listado de idiomas y del listado de cartas está alojada en una base de datos MYSQL dentro de un servidor remoto de pruebas (remotemysql.com), por tanto no se requiere realizar nada sobre esta capa.

***Nota: Tener presente que la base de datos al estar alojada en un servidor gratuito, se evidencia que los tiempos de respuesta a veces son excesivamente altos, así mismo tambien se evidencia que a veces genera errores que en el cliente aparecen con el código 500, esto al no poder establecer conexión con la misma.