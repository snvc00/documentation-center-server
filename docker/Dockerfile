FROM node:13.12.0-alpine
LABEL maintainer="S. Valle <snvc00@gmail.com>"

# Install git
RUN apk --no-cache add git

# Bundle source code and dependencies
WORKDIR /src
RUN git clone -b master --single-branch https://github.com/snvc00/documentation-center-server.git
WORKDIR /src/documentation-center-server
RUN npm ci

EXPOSE 4000

CMD [ "node", "server.js" ]
