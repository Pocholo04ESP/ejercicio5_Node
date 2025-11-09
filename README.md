# 🧩 Node Ejercicio 5

## Ejercicio 5 — Express + Login + Lista desde el Servidor

### 📝 Descripción
Este proyecto implementa un servidor web en **Node.js** con **Express** que muestra una página inicial con una lista de elementos (imágenes) cargados desde el servidor y un botón para acceder a una página de **login**.

El proyecto fue creado con **express-generator** y utiliza **EJS** como motor de plantillas.

---

### ⚙️ Funcionalidad

#### 🏠 Página principal (`/`)
- Muestra una lista de imágenes cargadas dinámicamente desde el servidor.
- Cada elemento incluye un **nombre** y una **imagen**.
- Incluye un botón que redirige a la página de **login**.

#### 🔐 Página de login (`/login`)
- Contiene un formulario con campos de **usuario** y **contraseña**.
- No valida credenciales (versión básica).
- Incluye un enlace para volver a la página principal.

---

### 🚀 Ejecución

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Iniciar el servidor:

   ```bash
   npm start
   ```

3. Abrir en el navegador:

   👉 [http://localhost:3000](http://localhost:3000)

---

### 🧰 Tecnologías usadas
- Node.js  
- Express  
- EJS  
- HTML + CSS  
- Express Generator

---

### 📂 Estructura del proyecto

```
express_test/
├── app.js
├── bin/
│   └── www
├── package.json
├── public/
│   ├── images/
│   └── stylesheets/
├── routes/
│   ├── index.js
│   └── users.js
└── views/
    ├── index.ejs
    ├── login.ejs
    └── error.ejs
```
---

✍️ **Autor:** Javier Rozalén  
