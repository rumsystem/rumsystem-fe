FROM nginx:alpine

ADD ./dist /app

EXPOSE 80
