import UserService from "./../adaptors/UsersServices";

const injectSession = async (req, res, next) => {
  if (req.cookies.userSessionId) {
    const userSession = await UserService.fetchUserSession({
      sessionId: req.cookies.userSessionId,
    });
    res.locals.userSession = userSession;
  }

  return next();
};

export default injectSession;
