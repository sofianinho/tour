FROM golang:1.12-alpine AS build

COPY . /go/src/github.com/user/hello

WORKDIR /go/src/github.com/user/hello

RUN go get -v -d ./... \
    && CGO_ENABLED=0 go build -a -installsuffix nocgo -o /go/bin/hello .


FROM scratch

LABEL maintainer="user <user@mail.com>"

COPY --from=build /go/bin/hello /app/hello

WORKDIR /app
CMD ["./hello"]
