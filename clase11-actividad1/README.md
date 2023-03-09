# Actividad 1 ¡Hola, Usuario!


Si nuestra idea es mostrarles información distinta a los usuarios sin mostrarle tareas a los anónimos, toda nuestra aplicación deberá estar validando con un estado donde estén guardados los datos del usuario. ¿Por qué no implementamos un Custom Context que lo almacene e inyecte las funciones correspondientes?



### Notas actividad 1
Este Custom Context (AuthContext) debe inyectar la función de login que setea el estado de usuario y la de logout que limpia el estado de usuario. Utilizar la funcion de login en el componente Login.