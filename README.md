# CITYMOMVIBESSA Women's Wellness Website

A responsive full-stack website based on the CITYMOMVIBESSA launch presentation.

## Stack
- Frontend: HTML5, CSS3, vanilla JavaScript
- Backend: Node.js + Express
- Database: SQLite
- API: REST endpoints for registrations and contact messages

## Run locally

1. Install Node.js 18+.
2. Open a terminal in the project root.
3. Install dependencies:

```bash
cd backend
npm install
```

4. Start the server:

```bash
npm start
```

5. Open:

http://localhost:3000

## Development

```bash
npm run dev
```

if nodemon is installed.

## API endpoints

- `POST /api/registrations`
- `GET /api/registrations`
- `POST /api/contact`
- `GET /api/health`

The SQLite database is created automatically at:
`backend/database/citymomvibessa.db`

## Notes

The project uses the presentation's language and structure for the brand story, six pillars, event experience, guest journey and speaker information. Replace placeholder event date/contact details with confirmed information before publishing.
