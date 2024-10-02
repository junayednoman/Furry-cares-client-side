
export type TUser = {
  coverPhoto: string
  isVerified: boolean
  _id: string
  name: string
  email: string
  password: string
  bio: string
  profilePicture: string
  role: string
  followers: TUser[]
  following: TUser[]
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
}
