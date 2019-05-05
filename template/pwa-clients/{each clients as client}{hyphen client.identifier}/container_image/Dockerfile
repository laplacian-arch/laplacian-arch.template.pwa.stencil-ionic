FROM nginx:1.15-alpine
RUN apk add --no-cache bash
COPY www /usr/share/nginx/html
COPY entrypoint.sh entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

