# Hyte web dev example back-end server

**Node.js + Express** application.

(Check weekly branches too.)

## Usage

1. Clone/download code
2. Run `npm i` inside project folder
3. Install & start MySQL/MariaDB server
4. Import database script(s) in `db/` folder
5. Create `.env` file based on `.env.sample`
6. Start the dev server: `npm run dev` / `npm start`

## Resources and endpoints

### `/items` (works with hard-coded mock data only, no need for db)

```http
GET http://127.0.0.1:3000/items
GET http://127.0.0.1:3000/items/:id
DELETE http://127.0.0.1:3000/items/:id

POST http://127.0.0.1:3000/items
content-type: application/json
body: {"name": "New Item"}
```

### `/api/users`

Example queries:

```http
# Get all users
GET http://127.0.0.1:3000/users

# Get user by id
GET http://127.0.0.1:3000/users/:id

# Delete user
DELETE http://127.0.0.1:3000/users/:id

# Create user
POST http://127.0.0.1:3000/users
content-type: application/json

{
  "username": "test-update4",
  "password": "test-pw-update4",
  "email": "update4@example.com"
}

# Update user
PUT http://127.0.0.1:3000/users/:id
content-type: application/json

{
  "username": "test-update4",
  "password": "test-pw-update4",
  "email": "update4@example.com"
}

# Login
POST http://localhost:3000/api/users/login
content-type: application/json

{
  "username": "user",
  "password": "secret"
}

```

### `/api/entries`

Example queries:

```http
# Get all entries
GET http://localhost:3000/api/entries

# Get entries by id
GET http://localhost:3000/api/entries/:id

# Post entry
POST http://localhost:3000/api/entries
content-type: application/json

{
  "entry_date": "2024-02-12",
  "mood": "Happy",
  "weight": 69.6,
  "sleep_hours": 7,
  "notes": "This was a good day",
  "user_id": 3
}

# Update entry
PUT http://localhost:3000/api/entries/:id
content-type: application/json

{
  "entry_date": "2024-02-12",
  "mood": "Even more happy now",
  "weight": 69.6,
  "sleep_hours": 7,
  "notes": "This was a good day",
  "user_id": 3
}

# Delete entry
DELETE http://localhost:3000/api/entries/:id
```
