import ListingsService from "#root/adaptors/ListingsService";

const listingsResolver = async () => {
    return await ListingsService.fetchAllListings();
};

export default listingsResolver;