# Dunia News

A responsive React-based news application for viewing news articles in various categories, along with a user-friendly interface for seamless navigation.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## About the Project
Dunia News provides users with the latest news articles from various categories, such as politics, health, sports, entertainment, and fitness. It is built with React and styled for modern web standards. The project also includes:

- A dashboard view for news analytics or extra features.
- A sign-in page for personalized user experiences.

## Features
- Dynamic news fetching using the [NewsAPI](https://newsapi.org/).
- Category-based filtering for streamlined news access.
- Fully responsive design for a seamless experience on all devices.
- Interactive hover effects for improved user engagement.
- Navigation between the home page, dashboard, and sign-in page.

## Technologies Used
- **Frontend**: React, CSS3
- **Routing**: React Router
- **API**: NewsAPI for fetching real-time news articles
- **Styling**: Responsive CSS with media queries

## Installation
1. Clone the repository:
   ```bash
    cd dunia-news
   npm install
   npm start

   project-root/
   ├── public/
   │   ├── sample.png           # Sample image for the README
   │   ├── index.html           # Entry point for the app
   ├── src/
   │   ├── Components/
   │   │   ├── Card.js          # Component to display news cards
   │   │   ├── Newsapp.js       # Main news fetching and display component
   │   │   ├── Dashboard.js     # Dashboard view
   │   │   ├── SignIn.js        # Sign-in component
   │   ├── App.js               # Main app entry point
   │   ├── index.js             # App renderer
   │   ├── index.css            # Global styles
   │   └── App.css              # App-specific styles
   ├── package.json             # Project dependencies


   git clone https://github.com/your-username/dunia-news.git

# Contributing
Contributions are welcome! Please fork the repository and create a pull request for any changes.

# License
This project is licensed under the MIT License.
