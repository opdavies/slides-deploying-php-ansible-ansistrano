install-shared-assets:
	@git submodule init
	@git submodule update

install-node-dependencies: node_modules
	@npm install

generate-theme-css: install-node-dependencies
	@npm run css:prod

generate-static-slides:
	@rm -fr _static
	@npx reveal-md slides.md --static \
		--asset-dirs=assets \
		--css=theme/slides.css

all: generate-theme-css generate-static-slides
