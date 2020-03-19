import { Listing } from "#root/db/models/listings";

const routes = app => {
    app.get('/listings', async (req, res, next) => {
        const listings = await Listing.findAll();
        return res.json(listings);
    });
};

export default routes;