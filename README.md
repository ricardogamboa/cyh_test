# Ricardo Test

## Setup

1. Install Node
2. Install Docker Compose
3. run `docker compose up`. This will boot the Postgres database container.
4. In another terminal go to `/backend`
5. Run `npm run dev`. This start the backend server.
6. In another terminal go to `/frontend`
7. Run `npm run dev`. This start the frontend server.
8. You can now access `http://localhost:3000/`

## TODO:

### Missing App features
- Enable https
- Enable CI/CD
- Dockerize the backend

### Missing UI features
- Show error message after login fails
- Disable purchase buttons when the user has an active plan
- Trigger refresh for "current plan" after a plan is purchased
- Add "finish" button that gets enabled when all the sessions in the current plan are mark as complete
- Set purchase as "inactive" on "finish" button click

* Note: there are TODOs in the code with other next steps
