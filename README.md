```markdown
# Full Stack Challenge

Esta es una aplicación Full Stack que consta de un backend desarrollado con Node.js y Express, y un frontend desarrollado con React. El backend consume datos de un API externo, los procesa y los expone a través de un endpoint que el frontend consume para mostrar la información.

## Estructura del Proyecto

```
fullstack-challenge/
│
├── backend/
│   ├── controllers/
│   │   └── filesController.js
│   ├── routes/
│   │   └── files.js
│   ├── test/
│   │   └── files.test.js
│   ├── app.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── FileList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│   │   ├── setupTests.js
│   │   └── .env
│   ├── package.json
│   └── README.md
│
└── README.md
```

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)
- [Git](https://git-scm.com/)

## Configuración del Proyecto

### Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd fullstack-challenge
```

### Configuración del Backend

1. **Navega al directorio del backend:**

    ```bash
    cd backend
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en el directorio `backend` con el siguiente contenido:

    ```env
    PORT=3000
    API_BASE_URL=https://echo-serv.tbxnet.com/v1/secret
    API_KEY=Bearer aSuperSecretKey
    ```

4. **Inicia el servidor del backend:**

    ```bash
    npm start
    ```

5. **Probar el backend:**

   Puedes ejecutar las pruebas del backend con:

    ```bash
    npm test
    ```

### Configuración del Frontend

1. **Navega al directorio del frontend:**

    ```bash
    cd ../frontend
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en el directorio `frontend/src` con el siguiente contenido:

    ```env
    REACT_APP_API_BASE_URL=http://localhost:3000/files
    ```

4. **Inicia la aplicación de React:**

    ```bash
    npm start
    ```

   La aplicación se abrirá en `http://localhost:3001`.

5. **Probar el frontend:**

   Puedes ejecutar las pruebas del frontend con:

    ```bash
    npm test
    ```

## Estructura del Backend

- **`app.js`**: Punto de entrada del servidor Express.
- **`controllers/filesController.js`**: Controlador que maneja la lógica de obtención y procesamiento de archivos.
- **`routes/files.js`**: Define las rutas del API relacionadas con los archivos.
- **`test/files.test.js`**: Pruebas unitarias para el API usando Mocha y Chai.

## Estructura del Frontend

- **`src/index.js`**: Punto de entrada del frontend en React.
- **`src/api.js`**: Define las funciones para interactuar con el backend.
- **`src/components/FileList.js`**: Componente React que muestra la lista de archivos y su contenido.
- **`src/setupTests.js`**: Configuración para Jest y Testing Library.

## Dockerización (Opcional)

Si deseas ejecutar la aplicación utilizando Docker, puedes crear archivos `Dockerfile` para el backend y frontend, y un archivo `docker-compose.yml` en la raíz del proyecto para facilitar la orquestación.
