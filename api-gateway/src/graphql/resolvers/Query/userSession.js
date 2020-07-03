const userSessionResolver = async (obj, args, context) => {
  if (args.me != true) throw new Error("Invalid argument supported");

  return context.res.locals.userSession;
};

export default userSessionResolver;
