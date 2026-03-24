FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o /guard .

FROM gcr.io/distroless/static:nonroot
LABEL org.opencontainers.image.source=https://github.com/egoavara/personal-cluster
COPY --from=builder /guard /guard
USER nonroot:nonroot
ENTRYPOINT ["/guard"]
