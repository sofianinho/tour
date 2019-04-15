FROM golang:1.12-alpine
LABEL maintainer="github.com/sofianinho"

ENV GO111MODULE on

COPY . /go/src/github.com/sofianinho/tour

WORKDIR /go/src/github.com/sofianinho/tour

RUN apk add -U git \
    && CGO_ENABLED=0 go build -a -installsuffix nocgo -o /go/bin/tour .

EXPOSE 3999
CMD ["tour"]

