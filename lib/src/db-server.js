"use strict";
//************************************** THIRD-PARTY MODULES **************************************/
// import express
const express = require("express");
/******************************************** LOGGING *********************************************/
const mad_logs_1 = require("mad-logs");
const colors = require("colors");
const TAG = mad_logs_1.buildFileTag('index.ts', colors.bgMagenta.white);
/************************************ CONFIG & INITIALIZATION *************************************/
const app = express();
exports.dbServer = app;
/********************************************* ROUTES *********************************************/
/**
 * POST /
 */
app.all('/query/:query', (req, res) => {
    // do things
    console.log(req.params);
    console.log(`req.params.query:`, req.params.query);
    const reqData = req.read(); // get data from params
    console.log(reqData); // display data from params
    res.json(myData);
});
//# sourceMappingURL=db-server.js.map