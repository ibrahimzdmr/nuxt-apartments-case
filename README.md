Hello, this project has been developed for Rently Web Case. It has been built using the Nuxt 3 framework, along with Tailwind and Daisy UI.

You can access the deployed part of the website through [this](https://nuxt-apartment-case.vercel.app/) link.

## To Run Locally

You need to create a Postgresql database via Vercel, then you need to fill in the necessary fields in the .env file (e.g. env image).

Afterwards, you need to run the commands below one by one for the node modules and prisma.

(I used yarn for the commands but you can you use npm or pnpm of course)

```bash
yarn install
yarn prisma generate
yarn prisma migrate deploy
```

For last you can use this command to run the project locally.

```bash 
yarn run dev 
```

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
