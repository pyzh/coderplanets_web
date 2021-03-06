import gql from 'graphql-tag'

const pagedCommunities = gql`
  query($filter: CommunitiesFilter!, $userHasLogin: Boolean!) {
    pagedCommunities(filter: $filter) {
      entries {
        id
        title
        desc
        raw
        logo
        contributesDigest
        subscribersCount
        viewerHasSubscribed @include(if: $userHasLogin)
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`

const pagedCommunitiesRaw = `
  query($filter: CommunitiesFilter!, $userHasLogin: Boolean!) {
    pagedCommunities(filter: $filter) {
      entries {
        id
        title
        desc
        raw
        logo
        contributesDigest
        subscribersCount
        viewerHasSubscribed @include(if: $userHasLogin)
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`

const subscribeCommunity = gql`
  mutation($communityId: ID!) {
    subscribeCommunity(communityId: $communityId) {
      id
      title
      raw
      logo
      contributesDigest
      threads {
        title
        raw
      }
    }
  }
`

const unsubscribeCommunity = gql`
  mutation($communityId: ID!) {
    unsubscribeCommunity(communityId: $communityId) {
      id
    }
  }
`

const schema = {
  pagedCommunities,
  pagedCommunitiesRaw,
  subscribeCommunity,
  unsubscribeCommunity,
}

export default schema
