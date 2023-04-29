build:
	docker build -t dockerized-raxdio .

start:
	docker run --name raxdio -p 3000:3000 dockerized-raxdio