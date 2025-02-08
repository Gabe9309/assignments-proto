FROM golang:1.18

RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    gnupg \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

ENV PROTOC_VERSION=3.19.1
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip \
    && unzip protoc-${PROTOC_VERSION}-linux-x86_64.zip -d /usr/local \
    && rm protoc-${PROTOC_VERSION}-linux-x86_64.zip

ENV PATH="/go/bin:${PATH}"
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.1 && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2.0

RUN npm install -g ts-protoc-gen @improbable-eng/grpc-web @types/google-protobuf google-protobuf
WORKDIR /workspace


COPY proto/ ./proto/

COPY generate.sh /workspace/generate.sh
RUN chmod +x /workspace/generate.sh

CMD ["/workspace/generate.sh"]
