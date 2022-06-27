FROM node:latest
WORKDIR /app
COPY package.json ./
COPY node_modules ./


COPY . .
CMD ["npm", "start"] 