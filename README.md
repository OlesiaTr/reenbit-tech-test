# The app's purpose

### Rick and Morty Characters

This application allows users to view a list of characters from the popular TV
show Rick and Morty. Users can click on a character to view more detailed
information about them, including their gender, species, status, origin, and
type. The application makes use of the Rick and Morty API to retrieve the
character data.

The purpose of this application is to provide fans of the show with an easy way
to access information about their favorite characters. It also serves as a
demonstration of React, React Router, and Axios, which are commonly used
technologies in modern web development.

## Details about the pages

### Login Page

The Login page is the first page users will see when they visit the application.
Its purpose is to allow users to authenticate and gain access to the Characters
Feed page. The Login page is only rendered when the user is not logged in.

### Character Feed

The home page displays a list of characters from the "Rick and Morty" TV show.
Each character card displays the character's name, species, and image. Clicking
on a character card will take the user to the character details page.

### Character Details

The character details page displays detailed information about a specific
character from the "Rick and Morty" TV show. The page shows the character's
name, image, gender, species, status, origin, and type (if applicable). If any
of this information is unknown, "Unknown yet" will be displayed. The user can go
back to the home page by clicking on the "Back to list" button.

## Major functions & dependencies

Added asynchronous JS code loading for the application routes using React.lazy()
and Suspense.

- Axios
- Modern normalize
- Prop-types
- Styled components
- React loader spinner
- React hot toast

## Preparing for work

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the project's base dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.
