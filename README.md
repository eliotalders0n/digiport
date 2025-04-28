# Digiport - Digital Passports Initiative

Welcome to **Digiport**, an innovative initiative aimed at exploring the possibility of introducing digital passports in Zambia. This project is designed to simplify and modernize the passport renewal process through a digital platform, providing users with a seamless, secure, and efficient way to manage their passport-related services.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Digiport is a digital solution that seeks to improve the passport renewal process for Zambians. Through this web platform, users can easily access services related to passport renewals and other related activities. The goal of Digiport is to enhance the overall experience for citizens and reduce administrative bottlenecks.

This platform makes use of modern technologies like Firebase to ensure security, reliability, and scalability.

You can access the Digiport platform by visiting: [Digiport Web App](https://digiport-dc.web.app/).

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Passport Renewal Process**: Easy access to renew or apply for passports online.
- **Data Storage**: All user data is securely stored and managed in Firebase Firestore.
- **Document Upload**: Allows users to upload documents necessary for passport processing.
- **Notifications**: Automated notifications sent to users for status updates and reminders.

## Technologies

Digiport is built with the following technologies:

- **Frontend**: React
- **Backend**: Firebase (Firestore, Authentication, and Storage)
- **Hosting**: Firebase Hosting
- **Authentication**: Firebase Auth for user management
- **Database**: Firebase Firestore for data storage
- **File Storage**: Firebase Storage for storing user documents

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Getting Started

1. **Clone the Repository**

   First, clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/digiport.git
   ```

2. **Install Dependencies**

   Navigate into the project directory and install the dependencies.

   ```bash
   cd digiport
   npm install
   ```

3. **Set up Firebase**

   Set up Firebase and configure the project by following these steps:
   
   - Create a Firebase project via the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firebase Authentication, Firestore, and Storage for your project.
   - Download the Firebase configuration file and replace the configuration in your project.

4. **Run the Project Locally**

   After installing the dependencies and setting up Firebase, run the project locally:

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can access it via the provided URL (either locally or on the deployed version).

### Authentication

Users can sign up or log in using their email address through Firebase Authentication. A confirmation email will be sent to users after sign-up.

### Passport Renewal

After logging in, users will be able to access a simple interface to initiate the passport renewal process, upload necessary documents, and track the status of their renewal.

### Document Uploads

Users can upload documents (e.g., ID, proof of residency) through Firebase Storage. All documents are stored securely, and users will be able to check the status of their uploaded files.

## Contributing

We welcome contributions to Digiport! If you would like to contribute, please fork the repository and submit a pull request.

### Steps for Contributing:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Create a new pull request.

Please make sure your code passes all tests and follows the project's coding style.

## License

Digiport is licensed under the [MIT License](LICENSE).

---
