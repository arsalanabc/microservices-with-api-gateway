import UsersService from "../../adaptors/UsersServices";

const UserSession = {
  user: async (userSession) => {
    return await UsersService.fetchUser({ userId: userSession.userId });
  },
};

export default UserSession;
