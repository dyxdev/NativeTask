# Test Task Project (this project use Expo)
# This readme was generated by Cline extension

# Run
  npm install
  npm run start
  See .env.example for enviroment variable

## Stack Technology

This project uses the following technologies:

* **React Native:**  Framework for building native mobile apps using React.
* **Expo:**  A framework and a set of tools built around React Native to help you build, deploy, and iterate on your apps faster.
* **TypeScript:**  A superset of JavaScript that adds static typing.
* **Redux Toolkit:**  Predictable state container for JavaScript apps.
* **apisauce:**  A well-structured API client for making HTTP requests.
* **React Navigation:**  Routing and navigation for React Native apps.
* **Jest:**  JavaScript testing framework.


## Folder Structure

The project follows a layered architecture:

* **`app/`:** Contains the main application screens and navigation.
* **`components/`:** Reusable UI components.
* **`constants/`:** Application constants and configurations.
* **`hooks/`:** Custom React hooks.
* **`layers/data/`:**  Data access layer using apisauce.
* **`screens/`:**  Top-level screens.
* **`store/`:** Redux store and reducers.
* **`theme/`:** Theme and styling.
* **`types/`:** Type definitions.


## Data Layers

The application uses a layered architecture for data access:

1. **API Layer (`layers/data/api.ts`):** This layer handles communication with the backend API using apisauce.  It provides methods for GET, POST, PUT, and DELETE requests, and includes robust error handling.

2. **Redux Store (`store/`):**  The Redux store manages the application's state.  Data fetched from the API is stored in the Redux store using Redux Toolkit.

3. **UI Layer (`components/` and `screens/`):** The UI layer consumes data from the Redux store to render the application's interface.


## API Sauce Usage

The project utilizes apisauce for making API requests.  The `Api` class in `layers/data/api.ts` provides a clean and consistent way to interact with the backend.  It handles common tasks such as:

* Making HTTP requests (GET, POST, PUT, DELETE).
* Handling responses and errors.
* Providing a consistent interface for API calls.

The `api.apisauce.addMonitor` function adds a monitor to log responses for debugging purposes.  Error handling is implemented using a custom function `getGeneralApiProblem` which provides detailed error information.


## Test 
* **Jest:**  JavaScript testing framework.
* **Command:**  

npm run update-snapshots
npm run test

Use mock for async storage package in __mocks__ file
Use transform ignore patterns Jest advanced option for configure redux store in tested components and screens