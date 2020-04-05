import { addHours } from "date-fns";

import { User, UserSession } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync";


const USER_SESSION_EXPIRY_HOURS = 1;

const setupRoutes = app => {
    app.post("/sessions", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid user body"));
        }

        try {
            const user = await User.findOne({
                attributes: {},
                where: {
                    email: req.body.email,
                }
            });

            if (!user) return next(new Error("Invalid email"));
            
            if (!passwordCompareSync(req.body.password, user.passwordHash)) {
                return next(new Error("Invalid password"));
            }

            const sessionToken = generateUUID();

            const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

            const userSession = await UserSession.create({
                id: sessionToken,
                userId: user.id,
                expiresAt
            });
            
            return res.json(userSession);

        } catch (error) {
            return next(error);
        }
    });

    app.post("/users", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid user body"));
        }

        try {
            const newUser = await User.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            });

            return res.json(newUser);
        } catch (error) {
            return next(error);
        }
    });
};

export default setupRoutes;