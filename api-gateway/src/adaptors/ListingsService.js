import got from "got";

const LISTINGS_SERVICE = "http://listings-service:7100";

export default class ListingsService {
    static async fetchAllListings(){
        const body = await got.get(`${LISTINGS_SERVICE}/listings`).json();
        return body;
    }
}