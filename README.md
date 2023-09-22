This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install needed dependencies:

```bash
npm install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Routes
1. The Teachers registration page can be accessed on [http://localhost:3000/signup/teacher](http://localhost:3000/signup/teacher). 
2. The Student registration page can be accessed on [http://localhost:3000/signup/student](http://localhost:3000/signup/student).
3. Registrations can be viewed on [http://localhost:3000/list](http://localhost:3000/list).

### Process
Since no 3rd backend service or infrastructure is being used, this app uses Local Storage for mocking the process of storing and retrieving data to give a real-time feel.

For added context: Local storage is not used in large scale or data-heavy applications since it has a limit of 10 megabytes but for given this project scope it is expedient to use a solution that makes sense for the given context which is why Local Storage was chosen.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployed on Vercel

This project was deployed to [https://peabux-init.vercel.app/](https://peabux-init.vercel.app/) using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
