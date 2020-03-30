import got from "got";

const USERS_SERVICE_API = "http://users-service:7101";

export default class UsersService {
    static async createUser({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_API}/users`,
            {
                json: { email, password }
            })
            .json();
        return body;
    }
}