APP_NAME = golang-tour

.PHONY: help
help:
	@echo ""
	@echo "Usage:"
	@echo "  build        to build the golang tour"
	@echo "  run          to run the golang tour"
	@echo "  help         to show this help"
	@echo ""

.PHONY: build
build:
	docker build \
		--build-arg http_proxy=$(http_proxy) \
		--build-arg https_proxy=$(http_proxy) \
		-t $(APP_NAME):latest \
		.

.PHONY: run
run:
	docker run -it --rm \
		--name $(APP_NAME) \
		-p 80:3999  \
		$(APP_NAME):latest \
		tour -disableOriginCheck -http "0.0.0.0:3999"

.PHONY: test
test: build run
