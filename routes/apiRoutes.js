const router = require('express').Router()
const {
  readFromFile,
  readAndAppend,
  readAndDelete,
} = require("fs");
const {v4: uuidv4} = require('uuid')




module.exports = router;