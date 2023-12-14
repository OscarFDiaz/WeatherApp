# ☀⛅ WeatherApp for Inprodi #

📰 Prueba frontend realizada para [Inprodi](https://inprodi.com.mx/)

<b>Vite + ReactTS, Mantine, Tabler-icons, RTKQuery, Redux, Redux-persist, Cypress, WeatherApi</b>.

🔗 Link GitHub Pages [WeatherAppDeploy](https://oscarfdiaz.github.io/WeatherApp/)

![WeatherApp](https://github.com/OscarFDiaz/WeatherApp/assets/9502714/e4344882-f414-4a69-b881-ba725faec670)

#### PUNTOS A EVALUAR ####

- Tener conocimiento de react-router-dom.
- Conocimientos de redux y redux persist.
- Consumir API.
- Diseño y estructuración de los archivos en el proyecto.
- Reutilización de componentes.
- Uso de Git
- TypeScript

#### EXTRAS #### 

- RTKQuery
- Mantine / Material UI
- Deploy.
- Eslint.
- Test

---
### Páginas ###

**HOME PAGE**

Desarrollar una App en donde en el inicio de la app, se muestre una lista de usuarios que
mostrará la siguiente información.

- Nombre
- Lat.
- Long.

En el mismo inicio, se tendrá un botón donde se desplegará un modal con un formulario
que solicitará los datos necesarios para dar de alta a un nuevo usuario. Además de un
botón para editar los usuarios y eliminarlos.

---

**USER PAGE**

Al dar clic sobre un usuario, se redireccionará a una nueva página en donde se proveerá al
usuario detalles del clima de su ciudad. Los detalles a mostrar serán:

- Información del usuario.
- Nombre de la ciudad.
- Icono que haga referencia al clima actual.
- Temperatura.
- Humedad.
- Velocidad del viento.
- Pronóstico de los próximos 5 días. (O el máximo que permita la API que se esté
  usando).

 ---

## Desplegar localmente

Clonar el repositorio

```bash
git clone https://github.com/OscarFDiaz/WeatherApp.git
```

Ir al directorio del proyecto

```bash
cd WeatherApp
```

Instalar dependencias

```bash
npm i
```

Iniciar el servidor

```bash
npm run dev
```

> [!NOTE]  
> Para poder realizar peticiones a la API es necesario tener una KEY de https://www.weatherapi.com/
> Una vez teniendo la KEY renombrar el archivo .env.template a .env y cambiar el comentario por tu KEY

---

## Test ##
Los test fueron realizados con **Cypress**

Inicia Cypress con
```bash
 npm run e2e
```

Selecciona e2e testing posteriormente Chrome
```bash
 e2e Testing > Chrome
```
Selecciona **WeatherApp.cy.ts**

![TestImg](https://github.com/OscarFDiaz/WeatherApp/assets/9502714/9c2cee7c-0506-47d0-b218-dc4a52250d88)

Y deja correr los test

![TestCy](https://github.com/OscarFDiaz/WeatherApp/assets/9502714/1b3b8eb0-899d-438d-bab5-64c995453509)
![TestCy1](https://github.com/OscarFDiaz/WeatherApp/assets/9502714/6a0460c8-5710-4e4f-9b17-20199694568f)



## Online

🔗 Link GitHub Pages

[WeatherAppDeploy](https://oscarfdiaz.github.io/WeatherApp/)

---

## Authors

- [@OscarFDiaz](https://github.com/OscarFDiaz)



