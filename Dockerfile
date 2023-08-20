FROM node:latest as build
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# production env
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]