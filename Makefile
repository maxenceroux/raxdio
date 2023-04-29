build:
	docker build -t dockerized-raxdio .

start:
	docker run --rm --name raxdio -p 3000:3000 dockerized-raxdio