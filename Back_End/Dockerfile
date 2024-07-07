# Utilisation de l'image Node.js LTS Alpine comme base
FROM node:lts-alpine

# Répertoire de travail dans l'image Docker
WORKDIR /app

# Ajouter tous les fichiers du répertoire local dans l'image Docker
COPY . .

# Installer les dépendances à l'aide de yarn (ou npm si vous utilisez npm)
RUN yarn

# Exposer le port 3000 sur le conteneur Docker
EXPOSE 3000

# Commande à exécuter lorsque le conteneur démarre
CMD ["node", "app.js"]
