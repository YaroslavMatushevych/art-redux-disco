Next.js Artwork Project
Welcome to the Next.js Artwork Project! This project showcases a collection of artworks and leverages the power of Next.js for both static and server-side rendering.

🚀 Features
Next.js: The React framework that enables features like static site generation and server-side rendering.
React Toolkit Query: Used for caching and state management. React Toolkit Query is especially powerful when combined with custom RTK (Redux Toolkit) hooks.

!!!🧐 Opinionated Choices
While developing this project, I made some opinionated choices based on my experiences:

Redux Toolkit Query over Redux: I had the option to use the createAsyncThunk function directly in the artworkSlice, but I preferred to leverage Redux Toolkit Query for its excellent caching capabilities. The custom RTK hooks further enhanced the ease of state management.

Static vs. Dynamic Data: For this particular application, I believe it's beneficial not to rely heavily on Redux for state management. Instead, making the most out of Next.js's static and server-side rendering capabilities is more fitting. The data here isn't dynamic, and the app can benefit greatly from static or incremental static regeneration, leading to faster load times and a better user experience.

🚧 Installation & Setup
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit http://localhost:3000 to view the app in action!

📝 Conclusion
This project was a journey of exploring the capabilities of Next.js combined with the power of Redux Toolkit and Redux Toolkit Query. While there are many ways to manage state and handle data-fetching, the choices made here were tailored to this specific application's needs and my personal preferences.

Happy exploring! 🎉