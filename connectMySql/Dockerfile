FROM ubuntu
RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
WORKDIR /app/
COPY . .
RUN npm install
CMD ["node", "index.js"]