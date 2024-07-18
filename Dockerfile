# Use a specific Node.js base image with version 18.17.1
FROM node:18.17.1

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Check Node.js version (for debugging purposes)
RUN node -v

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
