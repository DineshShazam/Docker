FROM node:alpine as builder
WORKDIR /usr/app
COPY package.json /usr/app
RUN npm install 
COPY . /usr/app
RUN npm run build

FROM nginx
COPY --from=builder /usr/app/build /usr/share/nginx/html


# FROM node:alpine
# WORKDIR '/app'
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx
# COPY --from=0 /app/build /usr/share/nginx/html


