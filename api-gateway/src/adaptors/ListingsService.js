import got from "got";

const LISTINGS_SERVICE_API = "http://listings-service:7100";

export default class ListingsService {
    static async fetchAllListings(){
        const body = await got.get(`${LISTINGS_SERVICE_API}/listings`).json();
        return body;
    }
}