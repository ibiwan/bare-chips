import gql from 'graphql-tag';

// eslint-disable-next-line consistent-return
export const parseGql = (gqlStr, name = '') => {
  try {
    // @ts-ignore (vs doesn't know gql is callable)
    return gql`${gqlStr}`;
  } catch (e) {
    console.error(`issue parsing gql (${name})`, gqlStr);
  }
};
