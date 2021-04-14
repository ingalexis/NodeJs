'use strict'

const fs = require('fs');
const CONSTANTS = require('./constants');
const webdriver = require('selenium-webdriver');
const {Before, After, setDefaultTimeout, Status} = require('cucumber');
const { constants } = require('buffer');
const RESULT_FOLDER_PATH = './test/results';
const APP_URL = 'http://localhost:9294/login';
const EVENTS = {
    EXIT: 'exit',
    EXCEPTION: 'exception'
};

let driver;

process.on(EVENTS.EXIT, exitHandler);
process.on(EVENTS.EXCEPTION, exitHandler);

createTestResultFolderIfNeeded();

Before({timeout: CONSTANTS.HOOK_TIMEOUTS.BEFORE}, async scenario => {
    setDefaultTimeout(CONSTANTS.STEP_TIMEOUTS.TIMEOUT);
    //const browserName = this.parameters.browserName;
    const browserName = 'chrome';
    const scenarioName = scenario.pickle.name;
    const builder = new webdriver.Builder();
    this.appUrl = APP_URL;
    driver = await builder.forBrowser(browserName).build();
    this.driver = driver;
    await driver.get(this.appUrl);
});

After({timeout: CONSTANTS.HOOK_TIMEOUTS.AFTER}, async scenario => {
    if(!this.driver) {
        return;
    }
    if(!scenario.result.status === Status.FAILED){
        await tryAttachScreenShot(this);
        console.log(`Scenario - ${scenario.pickle.name} - FAILED`);
    }
    await deInitWebDriver();
    delete this.driver;
});

async function deInitWebDriver() {
    if(!driver) {
        return;
    }
    try {
        await driver.quit();        
    } catch(error) {

    }
    driver = undefined;
}

async function exitHandler() {
    await deInitWebDriver();
    process.exit;
}

function createTestResultFolderIfNeeded() {
    if(!fs.existsSync(RESULT_FOLDER_PATH)) {
        fs.mkdirSync(RESULT_FOLDER_PATH);
    }    
}

async function tryAttachScreenShot(world) {
    try {
        const screenshot = await world.driver.takeScreenshot();
        world.attach(screenshot, 'image/png');
    } catch (error) {
        console.log('No esta disponible la captura de pantalla');
    }
}