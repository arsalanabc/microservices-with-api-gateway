const routes = app => {
    app.get('/', (req, res) => res.json({"msg":"welcome to listing service"}));
};

export default routes;