# School Application

The School Application is a web application built using Node.js, Express.js, and Sequelize for SQL database interactions. It provides functionality for managing schools, classes, students, and user authentication.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Models](#models)
- [Controllers](#controllers)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

1. User can sign up with name, email, password, and optional invite codes for parent or teacher.
2. User can log in with email and password.
3. User can create schools and receive unique invite codes.
4. User can view the schools they are associated with and their roles (admin, teacher, parent).
5. User can create classes within a school.
6. User can create students and assign them to a class.
7. Various APIs to retrieve information about schools, classes, students, and relationships.
8. Role-based access control.

## Getting Started

### Prerequisites

- Node.js installed
- MySQL or any other SQL database installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Install dependencies:

  ```bash
cd school-app
npm install

3. Run the application:

  ```
  npm start

  The application will be running on http://localhost:8000. 

### Create Readme.md file
* create a readme.md file and add these values

```bash
LOCALHOST = localhost
USER = Your Sql Username
PASSWORD = Your Sql Password
DB_PORT = 3306
DATABASE = Name Of Database
JWT_SECRET = Some Secret Key
```

### Usage
The application provides APIs for school management. Make requests using tools like Postman.


### API Endpoints

 #### Authentication

**POST api/user/signUp**
* Create a new user account.
* Required Fields: Name, Email, Password
* Optional: Invite code for parent, Invite code for teacher

**POST api/user/login**
* Log in with email and password.

#### Schools

**POST api/school/create**
* Create a new school.
* Required Fields: Name, Photo

**GET api/school/my-schools**
* Get schools associated with the user.

#### Classes

**POST api/class/create**
* Create a new class.
* Required Fields: Name, school_id
**GET api/class/by-school/:schoolId**
* Get classes for a specific school.

#### Students

**POST api/student/create**
* Create a new student.
* Required Fields: Name, Photo, school_id

**GET api/student/get**
* Get students based on school_id or class_id query parameters.

**POST api/student/assign-to-class**
* Assign a student to a class.
* Required Fields: class_id, student_id

**GET api/student/in-all-classes**
* Get students who are part of all created classes.

**GET api/student/classmates/:studentId**
* Get classmates of a specific student.
Required Fields: student_id

### Models
* User
* School
* Class
* Student

### Controllers
* authController
* schoolController
* classController
* studentController

### Routes
* authRoutes
* schoolRoutes
* classRoutes
* studentRoutes

