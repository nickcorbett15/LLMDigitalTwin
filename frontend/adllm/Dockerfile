FROM node:22-alpine

# Set working directory to the Vite app inside the subdirectory
WORKDIR /app

# Copy only the project files
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the Vite project
COPY . .

# Run Vite dev server on all network interfaces
CMD ["npm", "run", "dev", "--", "--host"]

