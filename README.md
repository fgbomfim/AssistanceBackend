# AssistanceBackend

## Frist steps
1. Install and config postgress
2. Go to root of project and create file named ``.env``
3. Create the keys values below on ``.env`` with your environment.

````
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_USER=your_db_user
DB_CLIENT=your_db_client
SALT_KEY=your_salt_key
````
4. Run ``yarn install`` and wait install all packages
5. Run ``yarn start`` to start server
6. Run ``yarn test`` to exec unit tests
7. Run ``yarn test:coverage`` to exec all unit tests and see coverage