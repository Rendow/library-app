# pull the base image
FROM node:16.13.1-alpine3.13

# set the working direction
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
