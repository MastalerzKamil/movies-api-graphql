movies-app-id=$(shell docker ps -a -q -f "name=movies-app")
movies-mongo-id=$(shell docker ps -a -q -f "name=movies-mongo")

build-all:
	@docker compose build

up:
	@docker compose  up -d

stop-app:
	@docker stop ${movies-app-id}

stop:
	@docker compose stop

rm-movies-app:
	@docker rm -f $(movies-app-id)

rm-mongo:
	@docker rm -f $(movies-mongo-id)

down:
	@docker compose down

start:
	@docker compose start

restart: stop up

rebuild: stop down build-all up

run-tests:
	@docker exec -t movies-app /bin/sh -c 'yarn test'

attach-console:
	@docker logs --since 30s -f $(movies-app-id)

logs: attach-console