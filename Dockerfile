FROM node:14.15.1-alpine

RUN mkdir -p /tmp/app

COPY package*.json /tmp/app/

RUN cd /tmp/app && npm install


COPY . /tmp/app/

RUN cd /tmp/app && npm run build

RUN mkdir -p /otp/app && mkdir -p /opt/app/src && mv -if /tmp/app/lib/* /opt/app/src

WORKDIR /opt/app

RUN mv /tmp/app/package.json /opt/app/package.json 

RUN rm -rf /tmp/app

RUN cd /opt/app && npm install --production

EXPOSE 3001

CMD ["npm", "start"]