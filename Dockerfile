FROM node:9-slim AS app
ENV PORT 3000
EXPOSE 3000

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install react --save
RUN npm install ajv --save
CMD ["npm", "start"]