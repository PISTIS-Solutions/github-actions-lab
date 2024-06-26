# Use the official Node.js 16 image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


EXPOSE 8000

# Start the application
CMD [ "node", "app.js" ]