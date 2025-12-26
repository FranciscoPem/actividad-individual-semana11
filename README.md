Proyecto Web Limelight con Express.js
Este proyecto consiste en la integración de la plantilla Limelight en un entorno de servidor utilizando Node.js y el framework Express.js. El objetivo es servir un sitio web multipágina de forma dinámica y organizada.

Requisitos
Para ejecutar este proyecto es necesario tener instalado Node.js y el gestor de paquetes npm.

Pasos para la instalacion
Descargar o clonar los archivos del proyecto en una carpeta local.

Abrir la terminal de comandos dentro de dicha carpeta.

Ejecutar el comando de inicializacion de Node si es necesario: npm init -y

Instalar la dependencia de Express mediante: npm install express

Estructura de carpetas
El proyecto esta organizado siguiendo las convenciones de aplicaciones web en Express:

/public: Contiene todos los recursos estaticos como hojas de estilo CSS, archivos de JavaScript, imagenes y fuentes.

/views: Contiene los archivos HTML de la plantilla Limelight.

app.js: Archivo principal que contiene la configuracion del servidor y la definicion de las rutas.

package.json: Registro de dependencias y scripts del proyecto.

Instrucciones de ejecucion
Para poner en marcha el servidor, utilice el siguiente comando en la terminal:

node app.js

Una vez ejecutado, el sitio web estara disponible en la direccion: http://localhost:3000

Rutas disponibles
El servidor ha sido configurado para responder a las siguientes solicitudes:

Ruta Raiz (/)

Descripcion: Carga la pagina principal del sitio.

Archivo servido: views/index.html

Ruta Nosotros (/nosotros)

Descripcion: Muestra la informacion institucional y del equipo.

Archivo servido: views/about.html

Ruta Servicios (/servicios)

Descripcion: Detalla el catalogo de servicios de la plantilla.

Archivo servido: views/services.html

Ruta Contacto (/contacto)

Descripcion: Muestra los datos de contacto y ubicacion.

Archivo servido: views/contact.html

Manejo de Errores (404)

Descripcion: Cualquier ruta no especificada anteriormente devolvera un mensaje de error indicando que la pagina no fue encontrada.
