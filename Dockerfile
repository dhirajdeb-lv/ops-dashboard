FROM node:14 as reactbuild

WORKDIR /apps

COPY package*.json /apps/

RUN npm install

COPY . /apps/

RUN npm run build

FROM nginx

COPY --from=reactbuild /apps/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

