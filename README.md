# Informacion de Genshin Impact

Este proyecto es una aplicación web para gestionar la informacion sobre Genshin Impact, desarrollada utilizando React para el frontend y Node.js con Express para el back. La aplicacion permite realizar operaciones CRUD sobre los Pesonajes, Naciones, Elementos y Armas.
En esta app se utiliza:
    -React para el frontend, también se utilizaron librerías de bootstrap para dar una mejor apariencia a la página.
    -Node.js y Express para el backend. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
    -MongoDB como base de datos.
    
## Tecnologías Utilizadas

- **Frontend**: React, React Router, CSS
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB, Mongoose

## Estructura del Proyecto

- **Frontend**: Código fuente en el directorio `frontend/`
- **Backend**: Código fuente en el directorio `back/`

## Instalación

### Backend

1. Navega al directorio `back/`.

    cd back

2. Instala las dependencias del backend.

    npm install

3. Configura las variables de entorno. Crea un archivo `.env` en el directorio `back/` y agrega la siguiente línea:

    MONGODB_URI=mongodb://localhost:27017/mi-base-de-datos

    Asegúrate de reemplazar `mi-base-de-datos` con el nombre de tu base de datos en MongoDB.

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



## Endpoints del API

- `GET /api/personajes` - Obtiene la lista de todos los personajes
- `GET /api/naciones` - Obtiene la lista de todas las naciones
- `GET /api/elementos` - Obtiene la lista de todos los elementos 



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
  