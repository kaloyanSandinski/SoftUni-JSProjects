const { chromium } = require('playwright');
const { expect } = require('chai');

let browser, page;
describe('E2E tests', function() {
    this.timeout(6000);
    before(async() => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    after(async() => { await browser.close(); });
    beforeEach(async() => { page = await browser.newPage(); });
    afterEach(async() => { await page.close(); });

    it('Loads static page', async() => {
        await page.goto('http://localhost:3000');

        //const content = await page.content();
        //expect(content).to.contains('Scalable Vector Graphics');
        //expect(content).to.contains('Unix');
        //expect(content).to.contains('Open standard');
        //expect(content).to.contains('ALGOL');

        //const content = await page.textContent('.accordion .head span');
        //expect(content).to.contains('Scalable Vector Graphics');

        const titles = await page.$$eval('.accordion .head span', (spans) => spans.map(s => s.textContent));
        expect(titles).to.contains('Scalable Vector Graphics');
    })

    it('Toggles text', async() => {
        await page.goto('http://localhost:3000');
        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        let visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.true;
        await page.click('#main>.accordion:first-child >> text=Less');
        visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.false;
    })
});