Hello, this project has been developed for Rently Web Case. It has been built using the Nuxt 3 framework, along with Tailwind and Daisy UI.

You can access the deployed part of the website through [this](https://nuxt-apartment-case.vercel.app/) link.

## To Run Locally

You need to create a Postgresql database via Vercel, then you need to fill in the necessary fields in the .env file.
just like this:
```bash
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
```

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

##Technologies

I developed the project on [Nuxt 3](https://nuxt.com/) Framework. I used [prisma](https://www.prisma.io/) for database connection and data retrieval from the database.

For the store structure, I used [Pinia](https://pinia.vuejs.org/ssr/nuxt.html). I also utilized [vee-validate](https://vee-validate.logaretm.com/v4/) and [zod](https://zod.dev/) for validation.