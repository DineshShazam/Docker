#### REDIS EXAMPLE ####
# # declare the base image 
# FROM alpine

# # mention the run commands
# RUN apk add --update redis

# # final executing CMD command
# CMD ["redis-server"]
#### REDIS EXAMPLE ####

#### RUNNING NODE-JS ON UBUNTU ####
FROM ubuntu:20.04

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update --fix-missing

#  && apt-get install -y sudo

# RUN apt install -y git

RUN apt install -y build-essential libssl-dev

RUN apt-get install -y curl

# RUN sudo -s
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.16.1

# RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash 

# RUN source $NVM_DIR/nvm.sh
# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN mkdir /usr/app

WORKDIR /usr/app

COPY Node/package.json /usr/app 

RUN npm install

COPY ./ /usr/app 

CMD ["node","index.js"]
#### RUNNING NODE-JS ON UBUNTU ####