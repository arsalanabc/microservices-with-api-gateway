import bcrypt from "bcryptjs"

const passwordCompareSync = (passwordToTest, hashPassword) => 
bcrypt.compareSync(passwordToTest, hashPassword);


export default passwordCompareSync;