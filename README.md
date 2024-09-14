To-Do App

Welcome to the To-Do App! This application helps you manage your tasks with features for user registration, login, and to-do item management, built using React.js, Redux, and React Router DOM.

Features
User Registration: Create a new account by providing a username, email, and password (with confirmation).
Login: Sign in using your email and password.
Dashboard: Access your to-do list where you can:
Add new to-do items.
Edit existing to-do items.
Check off items as completed.
Remove items from the list.
Filter Options: View all to-do items or filter by:
Completed items
Not completed items
Technologies Used

Frontend:
React.js: For building the user interface.
Redux: For state management across the application.
React Router DOM: For handling routing and navigation within the application.

Installation
To run this application locally, follow these steps:

Prerequisites
Node.js and npm (Node Package Manager) installed on your machine.
A modern web browser.
Clone the Repository

git clone https://github.com/Jayanath-Nanayakkara/To_Do_List.git

Install Dependencies
Navigate to the project directory and install the required dependencies:

npm install
Run the Application
Start the development server:

npm run dev
Open your browser and navigate to http://localhost:5173/ to see the app in action.

Usage
Register an Account:

Go to the registration page
Enter your username, email, and password. Confirm your password.
Submit the form to create your account.

Login:

Go to the login page
Enter your email and password.
Submit the form to access your dashboard.

Manage To-Do Items:

On the dashboard (To_List), use the Add button to create a new to-do item.
Use the Edit option to modify existing items.
Check the box next to a to-do item to mark it as completed.
Click the Remove button to delete an item.
Use the Filter selector to view all items, completed items, or not completed items.

Redux Store
The application uses Redux for state management. The store is set up to manage the state for user authentication and to-do items. The following reducers and actions are included:

User Reducer: Manages user authentication state.
Todo Reducer: Manages the list of to-do items and their status.
Actions: Include actions for adding, editing, removing, and filtering to-do items, as well as for user authentication.
Routing
React Router DOM is used for navigating between pages. The following routes are defined:

register: User registration page.
login: User login page.
dashboard(To Do Lidt): Main dashboard for managing to-do items.

Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request. Ensure that your code follows the existing style and includes tests if applicable.

License
This project is licensed under the MIT License.

Contact
For any questions or issues, please reach out to your jayanatha1993@gmail.com
