const { chromium } = require('playwright');
const { expect } = require('chai');

let browser, page;
describe('Library tests', function() {
    this.timeout(60000);
    before(async() => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
    after(async() => { await browser.close(); });
    beforeEach(async() => { page = await browser.newPage(); });
    afterEach(async() => { await page.close(); });

    it('Load books', async() => {
        await page.goto('http://127.0.0.1:5500/BookLibrary/index.html');
        await page.click('#loadBooks');
        const books = await page.$$eval('tbody tr td:first-child', tr => tr.map(t => t.textContent));
        expect(books).to.contains('Harry Potter and the Philosopher\'s Stone');
        expect(books).to.contains('C# Fundamentals');
    })

    it('Add book to database', async() => {
        await page.goto('http://127.0.0.1:5500/BookLibrary/index.html');
        await page.fill('[placeholder="Title..."]', 'Zdrastii!');
        await page.fill('[placeholder="Author..."]', 'Ivancho');
        await page.click('#createForm button');
        await page.click('#loadBooks');
        const books = await page.$$eval('tbody tr td:first-child', tr => tr.map(t => t.textContent));
        expect(books).to.contains('Zdrastii!');
    });

    it('Edit book', async() => {
        await page.goto('http://127.0.0.1:5500/BookLibrary/index.html');
        await page.click('#loadBooks');
        await page.click('tbody tr:nth-child(3) .editBtn');
        const expected = await page.isVisible('#editForm');
        expect(expected).to.be.true;
        await page.fill('#editForm [placeholder="Title..."]', 'Hello Title Again!');
        await page.click('#editForm button');
        await page.click('#loadBooks');
        const books = await page.$$eval('tbody tr td:first-child', tr => tr.map(t => t.textContent));
        expect(books).to.contains('Hello Title Again!');
    })

    it('Delete selected book', async() => {
        await page.goto('http://127.0.0.1:5500/BookLibrary/index.html');
        await page.click('#loadBooks');
        page.on('dialog', dialog => dialog.accept());
        await page.click('tbody .deleteBtn');
        await page.click('#loadBooks');

        const books = await page.$$eval('tbody tr td:first-child', tr => tr.map(t => t.textContent));
        const contain = books.includes('Harry Potter and the Philosopher\'s Stone');
        expect(contain).to.be.false;
    })
});