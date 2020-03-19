import { Listing } from "#root/db/models/listings";

const routes = app => {
    app.get('/listings', async (req, res, next) => {
        const listings = await Listing.findAll();
        return res.json(listings);
    });

    app.get('/create-dummy-listings', async (req, res, next) => {
        const title = "some Title";
        const description = "some Description";

        const dummyListings = [
            { title: "title 1", description: "description 1" },
            { title: "title 2", description: "description 2" },
            { title: "title 3", description: "description 3" },
            { title: "title 4", description: "description 4" },
            { title: "title 5", description: "description 5" },
        ]
        Listing.bulkCreate(dummyListings)
            .then((data) => {
                data
                ?res.send(data)
                :res.status(400).send('Error in insert new record');
            });
    });
};

export default routes;