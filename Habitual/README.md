# Habitual21 - "Build A new Habit"

## Overview

'Engineered a full-stack habit tracking application to help users build or quit habits over a 21-day period, featuring intuitive check-in systems and progress tracking.

It is said that it takes 21 (straight) days to create a habit so our App is the perfect way to put it to the test!


- **Effortless to Use:** Start building habits in just a few clicks!
- **Just 21 Days:** Form new habits in a manageable timeframe.
- **Daily Check-ins:** Seamlessly track your habits each day.
- **Visual Progress:** Instantly see your journey's progress on the main screen.
- **Habit Suggestions:** Get inspired with a curated selection of habit ideas.
- **Comprehensive Habit Page:** Review and update your habit progress, even for past days.


The remember that the small changes amount to great things and that the turtle won the race so no hurry.

## Features

- **21-Day Tracking:** Scientifically-backed habit formation with a clear 21-day timeline.
- **Daily Checkpoints:** Set and monitor daily goals for each habit effortlessly.
- **Custom Habits:** Easily add new habits and bookmark your favorites.
- **Suggested Habits:** Quick setup with a curated list of habit suggestions.
- **Responsive Design:** Seamless experience across all your devices.
- **Tech Stack:** Built with powerful libraries including Dayjs, Emoji-Picker-React, React-Toastify, and Lodash.


## Technologies Used

- **Frontend:** React.js for dynamic and interactive user interfaces, Axios for seamless HTTP requests.
- **Backend:** Express.js (Node.js) for robust and scalable server-side operations.
- **Database:** MongoDB Atlas for cloud-based, scalable data storage, Mongoose for elegant MongoDB object modeling.
- **Authentication:** JSON Web Token (JWT) for secure and efficient user authentication.



## Demo

<a href='https://habitual-e2js.onrender.com'> GO TO SITE ---> </a>

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for database access.
- React Developer Tools extension for an enhanced development experience (optional but recommended).

### Installation

1. **Clone the repository.**
   ```bash
   git clone git@github.com:Ashwanikumar1715/backeend.git
   git clone git@github.com:Ashwanikumar1715/frontend.git
   ```


3. **Install dependencies for the frontend and backend..**

```
  cd frontend
npm install

cd ../backend
npm install
```

4. **Set up environment variables.**
   Create a .env file in the server directory.
   Add the following variables:

```
PORT=3000
ORIGIN="http://localhost:3000"
TOKEN_SECRET=TOKEN_SECRET
MONGODB_URL=''
```

5. **Run the development servers.**

```
 cd frontend
npm run dev

cd ../backend
npm run dev
```

6. **Access the application in your browser at http://localhost:3000.**


## Future Development

Implement new filtering by type (quit or build).
Allow setting filters in the URL as a query string.
Enhance Ai suggestion to gain new habits


