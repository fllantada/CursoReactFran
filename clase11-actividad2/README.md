# Actividad 2 Privacidad de rutas


Ahora tenemos dos tipos de usuarios, los autenticados y los anónimos, pero los anónimos no deberían poder acceder a la ruta task y los usuarios ya autenticados no deberían poder acceder a la ruta de login. Vamos a protegerlas.
Para esto vamos a necesitar de la librería react-router-dom y de nuestro AuthContext.
Necesitamos dos componentes: un ProtectedRoute y un PublicRoute



### Notas actividad 2
Podemos utilizar los componentes: 
Navigate y Outlet de react-router-dom