# Lease Lens

My capstone project for IOD Software Engineering (2026).

Lease Lens is for renters looking for a new place. Renters can share what they saw on a tour, talk about the leasing agent who helped them, and post photos. People who already live there can share what it's really like after move-in. The goal is to help each other decide and weigh our options before signing a lease.

## How I built this

I came up with Lease Lens and chose the pages and features. The back end is built on my Module 9 blog app, and the React side uses my Module 7 useData hook and routing setup. The colors, apartment names and search come from my earlier Lease Lens draft (miniProject02). I used Claude to help write the new parts, like the review pages and models, and to help debug. I reviewed and tested everything myself.

## Pages

1. **Home** - what Lease Lens is, plus a search box (done)
2. **Apartments** - coming next
3. **Apartment Details** - coming next
4. **Write a Review** - coming next

## What I used

- **Front end:** React + Vite, React Router
- **Back end:** Node, Express (MVC folders)
- **Database:** MongoDB with Mongoose

## How to run it

You need Node and MongoDB installed, and MongoDB running.

**1. Back end** (first terminal)

```
cd backend
npm install
```

Copy `.env.example` and rename the copy to `.env`. Then:

```
npm run seed
npm run dev
```

You should see `MongoDB connected` and `Server is running on http://localhost:8081`.

**2. Front end** (second terminal)

```
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## API

| Method | URL | What it does |
|---|---|---|
| GET | /api/apartments | All apartments with their review count |
| GET | /api/apartments/:id | One apartment with its reviews |
| POST | /api/reviews | Add a review |
| GET | /api/reviews | All reviews (add `?apartment_id=` for one apartment) |
| GET | /api/reviews/:id | One review |
| PUT | /api/reviews/:id | Edit a review |
| DELETE | /api/reviews/:id | Delete a review |

A review needs `apartment_id`, `name`, `review_type` (tour or resident) and `rating` (1 to 5). `pros`, `cons`, `agent_name`, `agent_notes` and `photo_url` are optional.
