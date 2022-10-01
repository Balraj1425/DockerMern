# command for frontend
FROM node:16 as frontend
WORKDIR /usr/src/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build


# command for backend
FROM node:16 as backend
WORKDIR /usr/src/app
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
EXPOSE 3001
CMD ["npm","start"] 