.PHONY: help dev up down logs build \
        migrate migrate-deploy seed \
        test test-backend test-frontend \
        install install-backend install-frontend

# ─── Default target ───────────────────────────────────────────────────────────
help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "  dev               Start all services in development mode (hot-reload)"
	@echo "  up                Start all services in production mode"
	@echo "  down              Stop all services"
	@echo "  logs              Tail logs from all services"
	@echo "  build             Build all Docker images"
	@echo ""
	@echo "  install           Install dependencies in backend and frontend"
	@echo "  install-backend   Install backend dependencies"
	@echo "  install-frontend  Install frontend dependencies"
	@echo ""
	@echo "  migrate           Run Prisma migrations (dev)"
	@echo "  migrate-deploy    Run Prisma migrations (prod/CI)"
	@echo "  seed              Seed the database with sample data"
	@echo ""
	@echo "  test              Run all tests"
	@echo "  test-backend      Run backend integration tests"
	@echo "  test-frontend     Run frontend unit + screenshot tests"

# ─── Docker Compose ───────────────────────────────────────────────────────────
dev:
	docker compose up --build

up:
	docker compose up --build -d

down:
	docker compose down

logs:
	docker compose logs -f

build:
	docker compose build

# ─── Dependencies ─────────────────────────────────────────────────────────────
install: install-backend install-frontend

install-backend:
	cd backend && npm install

install-frontend:
	cd frontend && npm install

# ─── Database ─────────────────────────────────────────────────────────────────
migrate:
	cd backend && npx prisma migrate dev

migrate-deploy:
	cd backend && npx prisma migrate deploy

seed:
	cd backend && npx prisma db seed

# ─── Tests ────────────────────────────────────────────────────────────────────
test: test-backend test-frontend

test-backend:
	cd backend && npm test

test-frontend:
	cd frontend && npm test