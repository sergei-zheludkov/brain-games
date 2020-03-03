brain-prime:
	npx babel-node src/bin/brain-prime.js

brain-progression:
	npx babel-node src/bin/brain-progression.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-even:
	npx babel-node src/bin/brain-even.js

install:
	npm install

test:
	npx jest

publish:
	npm publish --dry-run

lint:
	npx eslint .
