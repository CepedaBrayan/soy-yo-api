# Vamos a tomar la imagen de node versión 16 como base
FROM node:16

# Debemos de establecer el directorio de trabajo
WORKDIR /app

# Y listo, ejecutamos la aplicación.
ENTRYPOINT npm run start:dev