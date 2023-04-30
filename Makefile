build:
	docker build -t dockerized-raxdio .

start:
	docker run --rm --name raxdio -p 3003:3000 dockerized-raxdio