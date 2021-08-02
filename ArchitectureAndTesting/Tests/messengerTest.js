const { chromium } = require('playwright');
const { expect } = require('chai');

let browser, page;
describe('Messenger tests', function() {
    this.timeout(6000);
    before(async() => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    after(async() => { await browser.close(); });
    beforeEach(async() => { page = await browser.newPage(); });
    afterEach(async() => { await page.close(); });

    it('Load messages', async() => {
        await page.goto('http://127.0.0.1:5500/Messenger/index.html');
        await page.click('#controls #refresh');
        const messeges = await page.$eval('#main #messages', msg => msg.value);
        expect(messeges).to.contains('Spami: Hello, are you there?');
    });

    it('Send message to database', async() => {
        await page.goto('http://127.0.0.1:5500/Messenger/index.html');
        await page.fill('#author', 'Kaloyan');
        await page.fill('#content', 'Zdrasti bace');
        await page.click('#submit');
        await page.click('#refresh')

        const messeges = await page.$eval('#main #messages', msg => msg.value);
        expect(messeges).to.contains('Zdrasti bace');
    })
});