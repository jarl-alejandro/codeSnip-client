import gpl from 'graphql-tag'

export default {
  query: {
    allCode: gpl` {
      allCode {
        username
        code
        language
      }	
    }
    `
  },
  mutation: {
    createCode: gpl`
      mutation ($username: String!, $code: String!, $language: String!) {
        createCode(username: $username, code: $code, language: $language) {
          username
          code
        }
      }
    `
  }
}
