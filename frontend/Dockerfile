FROM node:20-alpine

WORKDIR /frontend/

EXPOSE 5173

COPY index.html /frontend/
COPY public/ /frontend/public/
COPY src/ /frontend/src/
COPY package.json /frontend/
COPY postcss.config.js /frontend/
COPY tailwind.config.js /frontend/
COPY vite.config.js /frontend/

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]