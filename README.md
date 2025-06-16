Initiate — Betting Application (Interview Task)
Initiate is a simple, responsive React application built as an interview task for a betting platform. This project focuses purely on the frontend, demonstrating a clean structure, responsive UI with Tailwind CSS, and dummy JSON data for club and game lists.


Tech Stack

```React + Vite — for fast and modern frontend development```

```Tailwind CSS — for utility-first styling```

```React Router DOM — for page navigation```

```flatlist-react — for efficient and readable list rendering```

```Moment.js — for date and time formatting```

```React Toastify — for user-friendly alerts and notifications ```

Setup Instructions

1.Create the Vite + React project

```npm create vite@latest bettingapplication -- --template react```

2.Install Tailwind CSS

```npm install tailwindcss @tailwindcss/vite```

Then create tailwind.config.js file at root level:

```export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


Assumptions & Trade-offs

Frontend only:
This project demonstrates only the frontend part. All data (clubs, games, bets) is handled using dummy JSON objects to simulate API responses.

List rendering:
For displaying lists like clubs or games, I used flatlist-react instead of a simple .map() because it improves code readability and provides extra features like item separators and better performance for long lists.

Date formatting:
moment is used for converting and displaying dates in a readable format.

Notifications:
react-toastify provides simple, non-intrusive alerts for actions like placing a bet.

Responsive design:
The app is styled with Tailwind CSS and is fully responsive for various screen sizes.

