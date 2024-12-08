

## Practice Description
In this activity, a client web application will be developed using the main web technologies (HTML, CSS, and JavaScript), following the MVC design pattern. The application will serve as a movie database, where data such as the title, director, and the URL of each movie's cover will be stored. Users will be able to view the movie information, add new movies, edit existing ones, delete them, or reset the database. All of these actions will be performed through buttons in the application's interface. The main goal of this activity is for students to become familiar with the development of a complete web application, encompassing everything from interface design to managing stored data in the browser.

The development of this application will allow students to learn how to work with the MVC (Model-View-Controller) pattern, which is widely used in modern software development. This pattern facilitates the separation of application logic, data presentation, and user interaction, contributing to cleaner and more maintainable code. Additionally, localStorage will be used to store data in the browser, helping students understand how client-side data persistence options work.
Currently, the provided code includes the functionality to list existing movies and edit movie information. As part of the practice, students will need to implement the remaining functionalities: create new movies, display them, delete them, and reset the database. Implementing these additional functionalities will give students a deeper understanding of how different parts of an MVC application interact and how events and data flow are managed within the application.

## Tasks
The goal of this practice is to complete the missing functionalities:
Show: Display information about a movie.
New: Display the form to add a new movie.
Create: Add a new movie to the model.
Delete: Remove a movie from the model (user confirmation required).
Reset: Restore the model to its initial state.

To implement these functionalities, it is recommended to follow these steps:
Add the corresponding button in the indicated view, including the specified class and necessary attributes (e.g., data-my-id).
Configure the router to capture the event and call the appropriate controller, passing the necessary parameters.
Modify the controller to perform the necessary operations on the model and update the view.
Modify the view to properly represent the new functionality.

These steps will help structure the implementation and ensure each functionality is developed correctly and efficiently, providing a complete experience in developing a functional web application.