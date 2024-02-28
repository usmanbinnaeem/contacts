# Contacts API Documentation

## Overview

This API allows for the management of contact information, supporting operations such as create, update, fetch, search, and filter contacts.

## Getting Started

- **Base URL:** The API is set to run on `http://localhost:8082`. Ensure the API server is running before sending requests.
- **Tools:** Postman is recommended for testing the API endpoints.

## API Endpoints

### Create a Contact (POST)

- **Endpoint:** `/api/contacts`
- **Required Fields:**
  - `name` (string)
  - `mobileNumber` (string)
- **Optional Fields:**
  - `tags` (array of strings)
  - `source` (string)
  - `company` (string)
  - `designation` (string)
  - `website` (string)
- **Example Request:**

  ```plaintext
  POST http://localhost:3000/api/contacts
  Content-Type: application/json

  {
    "name": "Jane Doe",
    "mobileNumber": "+19876543210",
    "tags": ["Colleague", "Lead"],
    "source": "LinkedIn",
    "company": "Tech Solutions",
    "designation": "Engineer",
    "website": "https://www.techsolutions.com"
  }

  
### Update a Contact (PUT)

- **Endpoint:** `/api/contacts/:id`
- **Example Request:**

    ```plaintext
    PUT http://localhost:3000/api/contacts/507f191e810c19729de860ea
    Content-Type: application/json

    {
    "company": "Updated Company LLC",
    "designation": "Senior Engineer"
    }

    
### Get a Contact by ID (GET)

- **Endpoint:** `/api/contacts/:id`
- **Example Request:**

    ```plaintext
    GET http://localhost:3000/api/contacts/507f191e810c19729de860ea


### Get All Contacts (GET)

- **Endpoint:** `/api/contacts`
- **Example Request:**

    ```plaintext
    GET http://localhost:3000/api/contacts

    
### Search Contacts (GET)

- **Endpoint:** `/api/contacts/search`
- **Parameters:** Can include `name`, `company`, `designation`, etc.
- **Example Request:**

    ```plaintext
    GET http://localhost:3000/api/contacts/search?name=Jane&company=Tech Solutions


### Filter Contacts (GET)

- **Endpoint:** `/api/contacts/filter`
- **Functionality:** Supports multiple values for the same key for advanced filtering.
- **Example Requests:**
- Filtering by multiple tags:
  ```
  GET http://localhost:3000/api/contacts/filter?tag=Colleague&tag=Lead
  ```
- Filtering by multiple companies:
  ```
  GET http://localhost:3000/api/contacts/filter?company=Tech Solutions&company=Updated Company LLC
  ```

## Testing Tips

- Remember to include `Content-Type: application/json` in the header for POST and PUT requests.
- When testing the PUT endpoint, use an `id` from an existing contact.
- Utilize Postman's Params tab for dynamically adding query parameters for the search and filter requests.

## Error Handling

Responses will indicate the outcome of your request:

- `200 OK` - The request succeeded.
- `201 Created` - A new resource was successfully created.
- `400 Bad Request` - The request was malformed or invalid.
- `404 Not Found` - The requested resource was not found.
- `500 Internal Server Error` - An error occurred on the server side.

Error responses will include a JSON object with a message detailing the cause of the error.
