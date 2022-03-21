FROM nginx

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

ADD ./dist /app

EXPOSE 80
