# Building a single page application with Next.js and React Router

There are many reasons to use React Router inside a Next.js project! React Router is far more flexible than Next's router and makes it easy to share layout and state between among routes, even deeply nested ones. Doing this with Next.js requires consolidating all your shared logic in a custom `_app.tsx` component and using [complicated layout hacks](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/).

If you're building a single-page application and SEO isn't a concern, using React Router with Next.js is a powerful combination. Unfortunately there is no guidance for how to do this provided by th Next.js team. This repo demonstrates how this can be achieved.

For the full description of this project, go to [https://colinhacks.com/essays/building-a-spa-with-nextjs](https://colinhacks.com/essays/building-a-spa-with-nextjs).

### The approach

The basic idea:

1. Create a custom App (`/pages/_app.tsx`)

2. Return `null` if `typeof window === "undefined"`. This is required to prevent react-router from throwing errors during the SSR step!

```tsx
// pages/_app.tsx

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning> // <- ADD THIS
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;
```

3. Rewrite all routes to the homepage

```tsx
// next.config.js

module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};
```

Go to [https://colinhacks.com/essays/building-a-spa-with-nextjs](https://colinhacks.com/essays/building-a-spa-with-nextjs) for more details.

Feel free to tweet questions to me [@colinhacks](https://twitter.com/colinhacks) 🤙
