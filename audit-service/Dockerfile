FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port of the app
EXPOSE 4002

# First Command to run
CMD [ "npm", "start" ]