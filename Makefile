.PHONY: help build build-watch run clean

help:
	@echo "Available commands:"
	@echo "  make build       - Build TypeScript components"
	@echo "  make build-watch - Watch and build TypeScript components"
	@echo "  make run         - Run the Go application"
	@echo "  make clean       - Clean build artifacts"

build:
	@echo "Building TypeScript components..."
	@npx esbuild static/js/main.ts --bundle --format=esm --outfile=static/js/dist/main.js --sourcemap --alias:@components=./components --resolve-extensions=.ts,.js

build-watch:
	@echo "Watching TypeScript files..."
	@npx esbuild static/js/main.ts --bundle --format=esm --outfile=static/js/dist/main.js --sourcemap --watch --alias:@components=./components --resolve-extensions=.ts,.js

run:
	@echo "Starting Go application..."
	@go run main.go

clean:
	@echo "Cleaning build artifacts..."
	@rm -rf static/js/dist/
	@rm -rf components/*_templ.go
