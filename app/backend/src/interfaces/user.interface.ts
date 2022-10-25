export default interface IUser {
  email: string
  password: string
}

export interface IUserRepository extends IUser {
  id: number
  username: string
  role: string
}
