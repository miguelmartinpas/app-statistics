# pull official base image
FROM node:12.20.1

# set working directory
WORKDIR /server

# add `/server/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install server dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add server
COPY ./ ./

# start server
CMD ["npm", "run", "dev"]