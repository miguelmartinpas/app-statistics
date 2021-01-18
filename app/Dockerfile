# pull official base image
FROM node:12.20.1

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add client
COPY ./ ./

# start client
CMD ["npm", "run", "dev"]