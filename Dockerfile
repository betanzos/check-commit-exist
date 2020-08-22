FROM alpine:3.12

LABEL maintainer="Eduardo Betanzos <ebetanzos@hotmail.es>"

RUN apk add --no-cache bash git

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]