# Dulce Mente - Pastelería
Este proyecto es un ecommerce básico de una pastelería. El mismo se creo como proyecto del curso de React dictado por CoderHouse para la comisión 43255. 
La aplicación permite observar en la pagina inicial todos los productos ofrecidos para su compra y cuenta con dos categorías en su navbar para poder filtrar si el usuario desea ver una categoría en particular. 
Se puede realizar la compra de productos en linea los cuales se almacenan en el carrito y al cual se accede desde cualquier pagina de la aplicación. 
Los productos y ordenes de compra se almacenan en Firebase.

## Tecnologías utilizadas
- Vite
- React
- React Router
- Firebase

## Funcionalidades
- Ver lista de productos disponibles (no se permite agregar más que el stock cargado).
- Agregar productos al carrito de compras.
- Ver el carrito de compras.
- Eliminar productos desde el carrito de compras.
- Vaciar carrito.
- Realizar una orden de compra.
- Almacenar las ordenes de compra en base de datos.

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:
1- Clona el repositorio a tu máquina local.
2- Abre una terminal en el directorio del proyecto.
3-Ejecuta el comando npm install para instalar las dependencias.
4-Ejecuta el comando npm run dev para iniciar la aplicación.
5-Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:
Crea una cuenta en Firebase y crea un nuevo proyecto.
En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.