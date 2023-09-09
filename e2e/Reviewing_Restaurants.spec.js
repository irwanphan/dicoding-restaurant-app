Feature('Reviewing Restaurants');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('add review to one restaurant', async ({ I }) => {
    I.seeElement('.card a');
    // pause();
    I.click(locate('.card a').first());
    
    I.seeElement('.review-form input[type=text]');
    // pause();
    I.fillField('.review-form input[type=text]', 'John Doe');
    I.seeElement('.review-form textarea');
    I.fillField('.review-form textarea', 'Ga pakai Lorem Ipsum buat review test e2e');

    I.amCancellingPopups();    
    I.seeElement('.review-form button');
    I.click('.review-form button');
    I.cancelPopup();
    // pause();
});