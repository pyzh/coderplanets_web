export { Community, PagedCommunities } from './Community'
export { default as Article } from './Article'
export { Comment, PagedComments } from './Comment'
export { Post, PagedPosts } from './Post'
export { Video, PagedVideos } from './Video'
export { Repo, PagedRepos } from './Repo'
export { Job, PagedJobs } from './Job'
export { Tag, PagedTags } from './Tag'
export { Category, PagedCategories } from './Category'

export {
  EmptyUser,
  User,
  PagedUsers,
  SimpleUser,
  EduBackground,
  WorkBackground,
} from './User'

export const emptyPagiData = {
  entries: [],
  pageNumber: 1,
  pageSize: 20,
  totalCount: 0,
  totalPages: 0,
}
