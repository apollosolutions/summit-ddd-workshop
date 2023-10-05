# Use official Node.js image as the base image
FROM node:18-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application
COPY . .

EXPOSE 3000

# Command to run the application
CMD ["npm", "run","start"]