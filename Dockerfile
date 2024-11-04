# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de configuración del proyecto
COPY api/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de tu aplicación
COPY api/ .

# Define las variables de entorno
ENV PORT=8000
ENV TIENDANUBE_AUTENTICATION_URL=https://www.tiendanube.com/apps/authorize/token
ENV TIENDANUBE_API_URL=https://api.tiendanube.com/v1
ENV CLIENT_SECRET=30a5db24f65919e9be06c803a4483814f3f9d1d25f97b031
ENV CLIENT_ID=13757
ENV CLIENT_EMAIL=sufyanahmed@clostech.tech
ENV MONGODB_URI=mongodb+srv://CLOSTECH:xbcLl0DD5EbPHSLF@clostech.iria8as.mongodb.net/?retryWrites=true&w=majority&appName=Clostech
ENV MONGODB_NAME=test

# Expone el puerto que usará tu aplicación
EXPOSE 8000

# Comando para iniciar la aplicación
CMD ["npm", "start:dev"]
