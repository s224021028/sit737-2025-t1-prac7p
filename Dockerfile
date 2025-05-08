# Use the latest Node.js image as the base for this container
FROM node:latest

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and index.js from your local directory to the container's working directory
COPY package.json ./
COPY . .

# Install the Node.js dependencies defined in package.json
RUN npm install package.json

# Expose port 3000 to allow external connections to the container
EXPOSE 3000

# Define the command to run when the container starts
CMD ["node", "index.js"]