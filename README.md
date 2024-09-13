<a alt="Nx logo" href="https://luamaya.com" target="_blank" rel="noreferrer"><img src="https://www.luamaya.com/cdn/shop/files/LUA_Wortmarke_474747_3.png?v=1723623328&width=250" width="250"></a>

## What is this all about?

This repo is for a case study at Luamaya. The goal of this project is to enable employees to book a desk in the office. They should be able to select the desk and book it for one or multiple days. Booking should only be possible for the upcoming 30 days.

Please feel free to add features that you think would be great for the employees or admins.

## About this repo

This is a monorepo using [Nx](https://nx.dev/). It uses [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), [Tailwind](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).  
The basic setup is already done for you.

You can find the source of the Next.js app in `apps/lua-desk`. Everything related to the UI and shadcn is in a library located in `libs/ui-kit`.

### Dev server / Builds

To run the dev server for your app, use:

```sh
npx nx dev lua-desk
```

To create a production bundle:

```sh
npx nx build lua-desk
```

To see all available targets to run for a project, run:

```sh
npx nx show project lua-desk
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### shadcn

To add new shadcn components, you can use the known commands in the root directory of this repo, e.g.:

```sh
npx shadcn@latest add card
```

### Prisma

There is already a simple schema. You'll find it under `apps/lua-desk/prisma/schema.prisma`. There is also already a SQLite database in `apps/lua-desk/prisma/database/lua-desk.db`.

To generate the schema, you should use:

```sh
npx nx run lua-desk:prisma-generate
```

To sync the schema with the database, you can use:

```sh
npx nx run lua-desk:prisma-push
```

There are other possibilities to sync the schema with the database. You can find useful commands in the project config in `apps/lua-desk/project.json`.

## Configuration

The only configuration that needs to be done is setting the environment variable `DATABASE_URL` to the absolute file path of the SQLite database mentioned above.  
Use the `.env.local` file in the directory of the app.

```sh
DATABASE_URL=file:C:\Users\admin\lua-case\apps\lua-desk\prisma\database\lua-desk.db
```

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/next:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.
