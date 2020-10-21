# # build environment
# FROM node:12.13.0 as builder
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build:opti --prod

# # production environment
# FROM nginx:1.13.9-alpine
# RUN rm -rf /etc/nginx/conf.d
# RUN mkdir -p /etc/nginx/conf.d
# COPY ./default.conf /etc/nginx/conf.d/
# COPY --from=builder /usr/src/app/dist/angpatrimoine /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# base image
FROM node:12.2.0 as build


# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app


# generate build
RUN ng build --prod

############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=builder /usr/src/app/dist/angpatrimoine /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
