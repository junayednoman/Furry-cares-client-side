import { TUser } from "./user.type"

export type TPost = {
  _id: string
  author: TUser
  title: string
  content?: string
  excerpt?: string
  thumbnail: string
  category: string
  tags: string[]
  isPremium: boolean
  votes: number;
  upVotes: string[]
  downVotes: string[]
  comments: TComment[]
  isDeleted: boolean
  isPublished: boolean
  createdAt: string
  updatedAt: string
  __v: number
}
export type TComment = {
  _id: string
  post: string
  commenter: string
  text: string
  createdAt: string
  updatedAt: string
  __v: number
}
