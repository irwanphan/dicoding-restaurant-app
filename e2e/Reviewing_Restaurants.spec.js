Feature('Reviewing Restaurants');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('add review but missing name and review, then focus on it', async ({ I }) => {
    I.seeElement('.card a');
    I.click(locate('.card a').first());

    I.seeElement('.review-form button');
    I.click('.review-form button');

    I.seeElement('.review-form input[type=text]');
    const inputName = await I.grabValueFrom('.review-form input[type=text]');
    if (inputName == '') {
        I.focus('.review-form input[type=text]');
    }
    I.fillField('.review-form input[type=text]', 'John Doe');

    I.seeElement('.review-form textarea');
    const inputReview = await I.grabValueFrom('.review-form textarea');
    if (inputReview == '') {
        I.focus('.review-form textarea');
    }
});

Scenario('add review to one restaurant', async ({ I }) => {
    I.seeElement('.card a');
    I.click(locate('.card a').first());
    
    I.seeElement('.review-form input[type=text]');
    I.fillField('.review-form input[type=text]', 'John Doe');
    I.seeElement('.review-form textarea');
    I.fillField('.review-form textarea', 'Ga pakai Lorem Ipsum buat review test e2e');

    I.amCancellingPopups();    
    I.seeElement('.review-form button');
    I.click('.review-form button');
    I.cancelPopup();
    // pause();
});