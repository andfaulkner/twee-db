/************************************** THIRD-PARTY IMPORTS ***************************************/
import * as _ from 'lodash';

//************************************** THIRD-PARTY MODULES **************************************/
// import express
import * as express from 'express';

// utils
import * as path from 'path';
import { isSilly } from 'env-var-helpers';
import { inspect } from 'util';

//Determine and store project root path
import { path as rootPath } from 'app-root-path';

/**************************************** PROJECT MODULES *****************************************/
import { dbServer } from './src/db-server';

/******************************************** LOGGING *********************************************/
import { buildFileTag, logFactory } from 'mad-logs';
import * as colors from 'colors';

const TAG = buildFileTag('index.ts', colors.bgMagenta.white);

/************************************ CONFIG & INITIALIZATION *************************************/
const app: express.Router = express();

const myData = { };
