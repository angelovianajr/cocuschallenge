# Cocus Challege triangle

Cocus challege node.js to categorize triangles. Made using Express, sequelize with mysql.


## Getting Started

#### Clone the repo:

```bash
git clone --depth 1 https://github.com/charcode-server
```

#### Set environment variables:

```bash
cp .env.example .env
```
Fill with RDS or database variables

## Docker (preferably)

```bash
# run container locally
npm run docker:dev

# run container in production
npm run docker:prod
```

## Running Locally

```bash
npm run dev
```

#### Install dependencies:

```bash
npm install
```

## Running in Production

```bash
npm start
```

## Test

```bash
# run unit tests
npm run test:unit

# run integration tests
npm run test:integration

# run all tests and watch for changes
npm run test:watch
```

## Logs

```bash
# show logs in production
pm2 logs
```