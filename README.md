# PROYECTO FINAL FUNDAMENTOS
En estre proyecto encontraras el codigo html, css y js de una renta de vehiculos vitual. Con este proyecto pondremos en practica los conocimientos asquiridos en el curso.

## HTML:
- Maquetacion.
- HTML semantico.

## CSS:
- Asignacion de estilos usando clases y selectores.
- Modelo de caja.
- Aplicacion de estilos con buenas practicas.
- Flexbox y grid.

## JS:
- Modificacion del DOM con JavaScript.
- Implementacion de funciones.
- Uso y gestion de estructuras de datos (arreglos y objetos).
- Implementacion de iteradores y condicionales.
- Gestion de eventos en JavaScript.
    - Ingreso de texto.
    - Botones.
    - Selectores.
- Tablas y formularios basicos.
- Uso de procesos asincronos con Promesas.

## LINEA DE DESARROLLO:
Alquiler de vehiculos.

## VISTAS DEL SISTEMA:
- VISTA REGISTRO
![Vista Registro](./img/Captura%20de%20pantalla%202025-05-25%20122348.png)

En esta vista el usuario podra realizar el registro de un nuevo vehiculo para el alquiler. Se le solicita al usuario digitar su nombre, este no puede superar los 20 caracteres. Tambien tendra que seleccionar los atributos que tendra el vehiculo que se creara, como la categoria, la capacidad, la imagen y la marca. Por ultimo se le pide al usuario que establesca un codigo unico y el precio para el nuevo vehiculo, el codigo debe tener 8 caracteres como minimo, minimo una letra minuscula y una mayuscula y dos numeros, el precio no debe ser menor a $ 10.000 COP y no debe ser mayor a $ 30'000.000 COP. Para registrar el vehiculo se debe opimir el boton "REGISTRAR" y si se quieren limpiar los campos con el boton "LIMPIAR".

- VISTA INDICACIONES
![Vista Indicaciones](./img/Captura%20de%20pantalla%202025-05-25%20122430.png)
![Vista Indicaciones](./img/Captura%20de%20pantalla%202025-05-25%20122454.png)

Si el usuario en algun punto no realizo el registro de la forma correcta, se le motrara un mensaje del error que obtuvo y se redireccionara a la vista de indicacion, donde encontrara la explicacion de como debe realizar el proceso y una imagen de ejemplo.

- VISTA PRODUCTOS
![Vista Productos](./img/Captura%20de%20pantalla%202025-05-25%20122612.png)
![Vista Productos](./img/Captura%20de%20pantalla%202025-05-25%20122633.png)

En esta vista el usuario podra observar todos los productos, incluyendo los productos registrados. Se mostraran 15 productos por pantalla, en la parte inferior de la vista podra encontrar los botones para cambiar de pagina y poder observar todos los productos registrados. En la parte superior estan ubicados los botones "REGISTRAR" para registrar un nuevo producto y "BUSCAR" para ser redireccionado a la vista buscar, donde podra filtrar vehiculos.

- VISTA BUSCAR
![Vista Buscar](./img/Captura%20de%20pantalla%202025-05-25%20122708.png)

En la vista buscar el usuario podra observar tres selectores, donde podra filtrar vehiculos por precio, capacidad y categoria. Para obtener resultados, el usuario debe marcar al menos uno de estos filtros y oprimir el boton con el icono de la lupa, para buscar los vehiculos con los filtros. Tambien se puede oprimir el boton con el icono de bote de basura para eliminar los filtros seleccionados y el boton con el icono de retroceder para volver a la vista de productos. 

- VISTA RESULTADOS
![Vista Resultados](./img/Captura%20de%20pantalla%202025-05-25%20122815.png)

En la vista de resultados el usuario podra observar una tabla con los resultados de los filtros aplicados en la vista buscar. En la parte inferior de la tabla prodra encontrar el numero de la pagina de la tabla en el que se encuentra y los botenes para retrocede y avanzar de pagina. Un poco mas abajo encontrara el boton con el icono de bote de basura para limpiar los filtros aplicados y sea redireccionado a la vista buscar, tambien se puede observar el boton con el icono de retroceder para ser redireccionado a la vista de productos.