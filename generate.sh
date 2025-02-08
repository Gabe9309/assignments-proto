#!/bin/sh
set -e

echo "Creating output directories..."
mkdir -p gen/go gen/ts

echo "Generating Go protobuf files..."
protoc -I proto \
    --go_out=paths=source_relative:gen/go \
    --go-grpc_out=paths=source_relative:gen/go \
    proto/*.proto

echo "Generating Angular (JS/TS) protobuf files..."
protoc -I proto \
    --plugin="protoc-gen-ts=$(which protoc-gen-ts)" \
    --js_out="import_style=commonjs,binary:gen/ts" \
    --ts_out="service=grpc-web:gen/ts" \
    proto/*.proto

echo "Generation complete. Listing generated files:"

find gen -type f
