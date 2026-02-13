# === STAGE 1: Build the React App ===
FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of your project files
COPY . .

# Build the Vite app (this creates the 'dist' folder)
RUN npm run build


# === STAGE 2: Serve with Nginx ===
FROM nginx:alpine

# Copy the built files from Stage 1 into the Nginx web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
