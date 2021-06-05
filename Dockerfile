# stage 1
FROM node:lts AS my-app-build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# stage 2
FROM nginx:alpine
COPY --from=my-app-build /app/dist/spa  /usr/share/nginx/html
EXPOSE 80