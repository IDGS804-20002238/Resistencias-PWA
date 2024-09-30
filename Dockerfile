# Usar una imagen base de Node.js
FROM node:16

# Crear el directorio de la aplicación dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Instalar un servidor HTTP estático (serve) para servir la aplicación de React
RUN npm install -g serve

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 3000

# Comando para ejecutar el servidor HTTP estático
CMD ["serve", "-s", "build", "-l", "3000"]
