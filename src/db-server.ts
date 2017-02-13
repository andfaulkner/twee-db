/************************************** THIRD-PARTY IMPORTS ***************************************/
import * as _ from 'lodash';

//************************************** THIRD-PARTY MODULES **************************************/
// import express
import * as express from 'express';

// utils
import * as path from 'path';
import { isSilly } from 'env-var-helpers';
import { inspect } from 'util';

/******************************************** LOGGING *********************************************/
import { buildFileTag, logFactory } from 'mad-logs';
import * as colors from 'colors';

const TAG = buildFileTag('index.ts', colors.bgMagenta.white);

/************************************ CONFIG & INITIALIZATION *************************************/
const app: express.Router = express();

/********************************************* ROUTES *********************************************/
/**
 * POST /
 */
app.all('/query/:query', (req: express.Request, res: express.Response) => {
    // do things
    console.log(req.params);
    console.log(`req.params.query:`, req.params.query);
    const reqData = req.read(); // get data from params
    console.log(reqData); // display data from params
    res.json(myData);
});

/**
 * @export
 */
export { app as dbServer }
