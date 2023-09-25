import express from 'express'
import * as OpenApiValidator from 'express-openapi-validator';

const spec = {
  "openapi": "3.0.1",
  "info": {
    "title": "API Documentation",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "/api",
      "description": "Local Server"
    }
  ],
  "components": {
    "schemas": {
      "ListApplicationsResponse": {
        "type": "string"
      }
    }
  },
  "paths": {},
  "tags": []
}

const app = express()

app.use(
  OpenApiValidator.middleware({
    apiSpec: spec,
    validateRequests: true
  })
)

app.get("/", (req, res) => {
  res.json(spec)
})

app.listen(3000)