movies-app-id=$(shell docker ps -a -q -f "name=movies-api")
movies-mongo-id=$(shell docker ps -a -q -f "name=movies-mongo")

build-all:
	@docker-compose -f docker-compose.yml build

up:
	@docker-compose -f docker-compose.yml up -d

stop-app:
	@docker stop ${movies-app-id}

stop:
	@docker-compose stop

rm-api:
	@docker rm -f $(movies-app-id)

rm-mongo:
	@docker rm -f $(movies-mongo-id)

rm-all: rm-movies-app rm-mongo

restart: stop run

rebuild: stop rm-all build-all run

run-tests:
	@docker exec -t movies-api-app /bin/sh -c 'yarn test'

attach-console:
	@docker logs --since 30s -f $(movies-api-app-id)

logs: attach-console