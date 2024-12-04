# Informacion de Genshin Impact

Este proyecto es una aplicación web para gestionar la informacion sobre Genshin Impact, desarrollada utilizando React para el frontend y Node.js con Express para el back. La aplicacion permite realizar operaciones CRUD sobre los Pesonajes, Naciones, Elementos y Armas.
En esta app se utiliza:
    -React para el frontend, también se utilizaron librerías de bootstrap para dar una mejor apariencia a la página.
    -Node.js y Express para el backend. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
    -MongoDB como base de datos.
    
## Tecnologías Utilizadas

**Frontend**:

- *React*: Para crear una interfaz de usuario dinámica e interactiva.

- *React Router*: Para manejar la navegación entre las distintas páginas de la aplicación.

- *CSS*: Para el diseño y estilo.

- *Bootstrap*: Para mejorar la apariencia y la responsividad de la página.

**Backend**:

- *Node.js*: Para el entorno del servidor.

- *Express*: Framework para manejar las rutas y solicitudes HTTP.

- *Multer*: Para la gestión de archivos (como imágenes de personajes).

**Base de Datos**:

- *MongoDB*: Base de datos no relacional utilizada para almacenar los datos.

- *Mongoose*: ODM (Object Data Modeling) para interactuar con MongoDB.

## Estructura del Proyecto

- **Frontend**: Código fuente en el directorio `/frontend/`

- **Backend**: Código fuente en el directorio `/back/`

## Instalación

### Backend

1. Navega al directorio `back/`.

    cd back

2. Instala las dependencias del backend.

    npm install

3. Configura las variables de entorno. Crea un archivo `.env` en el directorio `back/` y agrega la siguiente línea:

    MONGODB_URI=mongodb+srv://<tu-usuario>:<tu-contraseña>@cluster.mongodb.net/mi-base-de-datos
    SESSION_SECRET=tu-clave-secreta

   Asegúrate de reemplazar <tu-usuario>, <tu-contraseña> y mi-base-de-datos con los valores correspondientes.

4. Inicia el servidor del backend.

    npm start


### Frontend

1. Navega al directorio `frontend/`.

    cd frontend

2. Instala las dependencias del frontend.

    npm install

3. Inicia el servidor de desarrollo del frontend.

    npm start

## Funcionalidades

**Características Principales**

- *Autenticacion:* Registro e inicio de sesión de usuarios.

- *Gestión de Datos:* Operaciones CRUD sobre personajes, naciones, elementos y armas.

- *Carga de Imágenes:* Subida de imágenes personalizadas para los personajes.

- *Datos Persistentes:* Toda la información se almacena en una base de datos MongoDB.


## Endpoints del API

*Personajes*

- `GET /api/personajes` - Obtiene la lista de todos los personajes
- `POST /api/personajes` - Crea un nuevo personaje.
- `PUT /api/personajes/:id` - Actualiza un personaje existente.
- `DELETE /api/personajes/:id` - Elimina un personaje.

*Naciones*
- `GET /api/naciones` - Obtiene la lista de todas las naciones

*Elementos*
- `GET /api/elementos` - Obtiene la lista de todos los elementos 

*Usuarios*
- `POST /api/auth/register` - Registra un nuevo usuario.
- `POST /api/auth/login` - Inicia sesión de un usuario.
- `GET /api/auth/logout` - Cierra la sesión del usuario.

## Deploy

La aplicación está desplegada en Render:

- *Frontend*: https://proyecto-final-1-ionh.onrender.com

- *Backend*: https://proyecto-final-ejj7.onrender.com



## OBSERVACIONES Y COMPLICACIONES DEL PROYECTO
 Para este proyecto me base en mi anterior trabajo hecho en React "InfoGenshin", y mis objetivos son:
 - Conectar el proyecto Backend y el Frontend
 - Reemplazar los documentos JSON estaticos por contenido mas dinamico traido de una api propia hecha con Express y MongoDB.
 - Crear una seccion en el apartado de personajes para hacer operaciones CRUD, en este caso... Crear, Editar y eliminar personajes
 - Crear un apartado para el logeo de usuarios
 - Hacer correcciones en el CSS
 - Hacer el deploy respectivo del proyecto.

 Hasta el momento no tuve muchas complicaciones para conectar el back y el front. Tuve algunos problemas con las rutas al momento de traer la informacion, ya que, algunos nombres no coincidian y tuve que verificar si la informacion era traida correctamente, viendo directamente en el buscador de google si traia bien el JSON. Cosa que no hacia, por ende pude saber que el error era que no estaba exportando bien el modelo traido de la base de datos.

El siguiente problema que tuve fue que traia toda la informacion pero no las imagenes, intente traerlas de manera interna en la carpeta public de mi back, pero lo solucione por el momento, es mas que un error de organizacion de las carpetas, asi que subi las imagenes de manera local a la carpeta /public y separe las imagenes para las secciones de Elementos, Personajes y Naciones e inclui las rutas en server.js para que todo funcione correctamente. Hecho esto, cambie el codigo de mi front para que la informacion que se traiga sea a traves del puerto de mi backend, todo esto solicitando la informacion con la URL brindada por la biblioteca de axios.

 En este punto del proyecto, intente hacer agregado de las opciones de usuario, Login, Register y Logout. Sinceramente, tuve varias complicaciones, sobre todo al momento de intentar que la informacion se guarde en la base de datos, ya que todo andaba bien pero no aparecia la informacion de los usuarios registrados en la misma. Tras esto estuve en la busqueda de problemas, y eran varios, el primer problema era que no habia hecho bien las rutas, por eso para no tener estos problemas me asegure de crear una ruta directa (authRoutes) en el que guardo las rutas para Iniciar sesion, Registrar y Cerrar sesion, despues cree un documento de modelado de los usuarios en el cual cree un esquema para traer la informacion de mongodb. Los siguientes problemas que tuve fueron directamente que no se traia la informacion correctamente, utilice POSTMAN para testear que todo este bien, pero no me traia la informacion de la url de usuarios, intente crear una coleccion aparte para usuarios en la base de datos por si esta no se habia creado bien, despues intente comprobar si esta estaba funcionando correctamente... si estaba realmente conectado a mi proyecto, siendo sincero no recuerdo como solucione esto, simplemente era un problema en el frontend que yo sepa, en todo este proceso me olvide de hacer los commits correspondientes para ir viendo el avance de a poco.

 Para este ultimo punto, tengo que decir que me hice mucho problema con el tema de las rutas, ya lo habre mencionado anteriormente, pero es que cada que quiero añadir un componente nuevo me complico mucho para configurar las rutas en el backend, aun asi trato de organizar todo lo mejor posible, en este caso en particular estuve trabajando con el crud de los personajes, y por un lado no me recibia los datos, lo corregi cambiando de direccion las rutas, hice pruebas en postman y resulta que no me recibia las imagenes, intente configurar bien el multer y si me las tomo, pero no se visualizaban en la pagina, aparecian con el tipico icono "image bronken", y no se me ocurria por que, asi que empece a usar console logs para ver donde me daba algun error, por un lado, la carpeta public estaba dentro del src. Se me ocurrio que tal vez al estar dentro no se podrian visualizar, asi que lo saque del src y lo coloque directo en la raiz del proyecto back, por otro lado, ahora las rutas estaban mal dirigidas hacia src/public, asi que redirigi todas las rutas. Despues de estar todo bien, me seguia apareciendo las imagenes rotas, asi que me puse a ver detalladamente donde esta el error, me di cuenta de que esta mal la url construida, sinceramente en este punto ya no tengo mucho tiempo asi que consulte con chatgpt y me dio una solucion temporal de modificar la ruta directamente en el frontend. Aunque despues lo tengo que arreglar, prefiero dejarlo asi y seguir, no quedarme trabado.

  Ya tenia una configuracion de controladores para editar y eliminar personajes, asi que cree una seccion en el frontend para editar los personajes y un boton para eliminarlos, y les hice un pequeño diseño en css.
  Deploy hecho.
  