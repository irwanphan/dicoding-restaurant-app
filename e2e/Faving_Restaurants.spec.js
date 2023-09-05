Feature('Faving Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants',  ({ I }) => {
    I.seeElement('#favedRestaurants');
    I.see('You have no favorite restaurant :(', '#favedRestaurants');
});

Scenario('favoriting one restaurant', async ({ I }) => {
    I.see('You have no favorite restaurant :(', '#favedRestaurants');

    I.amOnPage('/');

    I.seeElement('.card a');
    // pause();
    I.click(locate('.card a').first());

    I.seeElement('#faveButton');
    I.click('#faveButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    // pause();
});

Scenario('favoriting then unfavoriting one restaurant', async ({ I }) => {
    I.see('You have no favorite restaurant :(', '#favedRestaurants');
    I.amOnPage('/');

    I.seeElement('.card a');
    I.click(locate('.card a').first());
    
    I.seeElement('#faveButton');
    I.click('#faveButton');
    
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    // pause();

    I.click(locate('.card a').first());

    I.seeElement('#faveButton');
    I.click('#faveButton');
    I.amOnPage('/#/favorite');
    I.see('You have no favorite restaurant :(', '#favedRestaurants');
    // pause();
});
