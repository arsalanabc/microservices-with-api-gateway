import { User } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";


const setupRoutes = app => {
    app.post("/user", (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid user body"));
        }

        try {
            const newUser = User.create({
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