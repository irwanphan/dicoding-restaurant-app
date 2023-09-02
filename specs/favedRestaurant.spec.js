import FaveButtonInitiator from "../src/scripts/utils/favorite-button-initiator";

describe("Faving a Restaurant", () => {
    it('show empty heart on the fave button when the restaurant has not been set as favorite before', async () => {
        document.body.innerHTML = '<div id="faveButtonContainer"></div>';

        await FaveButtonInitiator.init({
            faveButtonContainer: document.querySelector('#faveButtonContainer'),
            restaurant: {
                id: 's1knt6za9kkfw1e867',
            },
        });

        expect(document.querySelector('[aria-label="add as favorite"]')).toBeTruthy();
    });
})