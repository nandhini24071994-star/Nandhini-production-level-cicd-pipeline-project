# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Build React app
RUN npm run build

# Install serve
RUN npm install -g serve

# Run app
CMD ["serve", "-s", "build", "-l", "3000"]
