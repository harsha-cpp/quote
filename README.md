# Serverless Quote App

Serverless Quote App is a minimal seminar demo that connects a static frontend to an AWS Lambda function. It is designed to help explain Git, GitHub Actions, AWS Lambda, and Cloudflare in one short live presentation.

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js AWS Lambda
- GitHub Actions
- Cloudflare Pages

## Project Structure

```text
frontend/
  index.html
  style.css
  script.js
lambda/
  index.js
.github/workflows/
  ci.yml
README.md
```

## How the App Works

1. The frontend is deployed to Cloudflare Pages.
2. The button in the browser calls an AWS Lambda Function URL.
3. The Lambda function returns one random quote as JSON.
4. The frontend shows loading, success, and error states.
5. GitHub Actions checks the main files and JavaScript syntax on every push and pull request.
6. Pushes to `main` can also deploy the Lambda function automatically from GitHub Actions.

## Frontend

- `frontend/index.html` contains the page structure.
- `frontend/style.css` contains the styling.
- `frontend/script.js` calls the API and updates the page.

Replace the placeholder API URL in `frontend/script.js` before the final demo:

```js
const apiUrl = "https://your-lambda-url.lambda-url.region.on.aws/";
```

## AWS Lambda Deployment

This demo is easiest to present with a Lambda Function URL.

1. Open the AWS Console.
2. Go to Lambda.
3. Click `Create function`.
4. Choose `Author from scratch`.
5. Set the function name to `serverless-quote-app`.
6. Choose runtime `Node.js 20.x`.
7. Create the function.
8. Replace the default code with the contents of `lambda/index.js`.
9. Click `Deploy`.
10. Open `Configuration`.
11. Open `Function URL`.
12. Click `Create function URL`.
13. Set auth type to `NONE`.
14. Save the generated URL.
15. Test the URL in the browser. It should return JSON with `quote` and `author`.

Example response:

```json
{
  "quote": "Make it work, make it right, make it fast.",
  "author": "Kent Beck"
}
```

## Cloudflare Pages Deployment

1. Create a GitHub repository for this project.
2. Push this code to the `main` branch.
3. Update `frontend/script.js` with your real Lambda Function URL.
4. Commit and push that change.
5. Open the Cloudflare dashboard.
6. Go to `Workers & Pages`.
7. Click `Create application`.
8. Choose `Pages`.
9. Choose `Connect to Git`.
10. Select your GitHub repository.
11. Set the production branch to `main`.
12. Leave the build command empty.
13. Set the build output directory to `frontend`.
14. Deploy the site.
15. Open the Cloudflare Pages URL and test the button.

## GitHub Actions Lambda Deployment Setup

To enable Lambda CD from GitHub Actions, add these repository secrets in GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_LAMBDA_FUNCTION_NAME`

The function name should match your Lambda function, for example:

```text
serverless-quote-app
```

The workflow in `.github/workflows/ci.yml` will:

1. Run validation on every push and pull request.
2. Deploy the Lambda code on non-PR runs from the `main` branch.

To add the secrets:

1. Open your GitHub repository.
2. Go to `Settings`.
3. Go to `Secrets and variables`.
4. Open `Actions`.
5. Add each secret one by one.

## Git Commands for the Seminar

If this folder is not already its own Git repository, run:

```bash
git init
git branch -M main
```

Then use:

```bash
git add .
git commit -m "Create Serverless Quote App demo"
git remote add origin <your-github-repo-url>
git push -u origin main
```

After you change the Lambda URL:

```bash
git add frontend/script.js
git commit -m "Add Lambda API URL"
git push
```

## GitHub Actions Talking Points

- A push to GitHub starts the workflow in `.github/workflows/ci.yml`.
- The workflow checks that the required files exist.
- The workflow runs JavaScript syntax checks for the frontend and Lambda files.
- On `main`, the workflow can also deploy the Lambda function automatically.
- Cloudflare Pages handles the frontend deployment from the GitHub repository.

## Seminar Speaking Points

- Git tracks local changes and lets us commit small milestones.
- GitHub stores the project and runs GitHub Actions on every push.
- AWS Lambda gives us a backend without managing a server.
- Cloudflare Pages hosts the frontend globally as a static site.
- The browser talks directly to Lambda over HTTPS.
- CORS headers in the Lambda response allow the frontend to read the API response.

## Live Demo Flow

1. Show the repository structure.
2. Open `frontend/script.js` and point at the API URL.
3. Open `lambda/index.js` and show the JSON response logic.
4. Open `.github/workflows/ci.yml` and explain validation plus Lambda deployment.
5. Push a small change to GitHub and show the GitHub Actions run.
6. Open the Cloudflare Pages site.
7. Click `Get Quote`.
8. Refresh and click again to show a different quote.
9. Open browser dev tools and show the network request to Lambda.

## Why This Project Works Well for a Seminar

- Small enough to explain in a few minutes
- Includes frontend, backend, CI, and hosting
- No database, auth, or framework complexity
- Easy to deploy and reliable for a live demo
