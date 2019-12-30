brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-even:
	npx babel-node src/bin/brain-even.js

unstall:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
