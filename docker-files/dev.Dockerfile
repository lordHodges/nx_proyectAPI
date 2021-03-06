#imagen base

FROM node
# set working directory
RUN mkdir /usr/src/app
RUN mkdir /usr/src/uploads
RUN mkdir /usr/src/uploads/egresoHostal
WORKDIR /usr/src/app

# add .bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install package.json (o sea las dependencies)
COPY ./package.json /usr/src/app/package.json
RUN npm install
#install pm2 dependences

# RUN npm install -g @angular/cli@1.7.3 

# add app
COPY . /usr/src/app

# start app
CMD npm run dev 
