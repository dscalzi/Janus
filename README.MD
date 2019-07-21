# Janus

Janus allows you to setup a simple file server for local testing.

## Usage

1. Clone the project
2. Create a `.env` file
  - Add `SERVER_PORT={PORT}`
  - Add `BASE_PATH={PATH}`
3. Run `npm start`

### Example

Your file server is located at C:/MockFileServer. There is one file at that location, LibraryFile.jar

```dotenv
SERVER_PORT=8080
BASE_PATH=C:/MockFileServer
```

Navigate to `localhost:8080/LibraryFile.jar` to download that file.

## Notes

Janus is intended for localhost testing ONLY. Do not use in a production environment.