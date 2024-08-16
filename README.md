## Reproduction 001

Issue: We are not seeing the link "alternate" headers in the response headers. Instead, we only see the `next/font` "preload" headers.

Hypothesis: The issue is a conflict between `next-intl` and `next/font`. The `next/font` headers are overwriting the `next-intl` headers.

Conclusion: The issue is not a conflict between `next-intl` and `next/font`. The issue in the original app is that the `next/intl` headers are being lost after middleware executes. 

In this repro, we DON'T see the issue. The repro is working as expected. The `next/intl` headers are being sent in the response headers. 

## Getting Started

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


Check the response headers in the browser dev tools. You should see the "alternate" headers from `next-intl` in the response headers.