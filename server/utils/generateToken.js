import jwt from 'jsonwebtoken'
const genetateToken = (id) => {
  // prettier-ignore
  return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: "30d",
      })
}

export default genetateToken
