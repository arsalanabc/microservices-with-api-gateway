import bc from "bcryptjs";

const hashPassword = password => bc.hashSync(password, bc.genSaltSync(13));

export default hashPassword;