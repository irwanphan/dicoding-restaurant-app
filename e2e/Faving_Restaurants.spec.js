Feature('Faving Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants',  ({ I }) => {
    I.seeElement('#favedRestaurants');
    I.see('You have no favorite restaurant :(', '#favedRestaurants');
});
