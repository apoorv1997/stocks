define({ "api": [
  {
    "group": "Stocks",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/stocks/all/:limit",
    "title": "api for getting all stocks.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "setting",
            "description": "<p>the number of stocks to read. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"message\": \"All Data found\",\n    \"status\": 200,\n    \"data\":{\n        \"_id\": \"5c48aefe18891c124c07e720\",\n        \"date\": \"2016-01-05 00:00:00\",\n        \"symbol\": \"WLTW\",\n        \"open\": \"123.43\",\n        \"close\": \"125.839996\",\n        \"low\": \"122.309998\",\n        \"high\": \"126.25\",\n        \"volume\": \"2163600.0\"\n    },\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/routes.js",
    "groupTitle": "Stocks",
    "name": "GetApiV1StocksAllLimit"
  },
  {
    "group": "Stocks",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/stocks/:date",
    "title": "api for getting stocks with a particular date.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>for the stocks. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"message\": \"All Data found\",\n    \"status\": 200,\n    \"data\":{\n        \"_id\": \"5c48aefe18891c124c07e720\",\n        \"date\": \"2016-01-05 00:00:00\",\n        \"symbol\": \"WLTW\",\n        \"open\": \"123.43\",\n        \"close\": \"125.839996\",\n        \"low\": \"122.309998\",\n        \"high\": \"126.25\",\n        \"volume\": \"2163600.0\"\n    },\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/routes.js",
    "groupTitle": "Stocks",
    "name": "GetApiV1StocksDate"
  },
  {
    "group": "Stocks",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/stocks/symbol/:limit",
    "title": "api for getting all stocks with a particular symbol.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "symbol",
            "description": "<p>to look for in stocks. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"message\": \"All Data found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5c48aefe18891c124c07e720\",\n        \"date\": \"2016-01-05 00:00:00\",\n        \"symbol\": \"WLTW\",\n        \"open\": \"123.43\",\n        \"close\": \"125.839996\",\n        \"low\": \"122.309998\",\n        \"high\": \"126.25\",\n        \"volume\": \"2163600.0\"\n    },\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/routes.js",
    "groupTitle": "Stocks",
    "name": "GetApiV1StocksSymbolLimit"
  }
] });
