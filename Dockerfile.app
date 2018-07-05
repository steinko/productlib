FROM node:9-slim 
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install react --save
RUN npm install ajv --save
CMD ["npm", "start"]