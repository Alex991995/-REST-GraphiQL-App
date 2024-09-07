/* eslint-disable react-compiler/react-compiler */

//import 'server-only';
import JSONViewer from '../JSONViewer/JSONViewer';
import prettify from '../../utils/prettify';

export default async function GraphiQLResponse({
  endpoint,
  query,
}: {
  endpoint: string;
  query: string;
}) {
  let statusCode: number | undefined;

  function fetchGraphQL(value: string) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    // const variables = {
    //   id: "4"
    // };
    
    // const query = `
    //   query Album($id: ID!) {
    //     album(id: $id) {
    //       id
    //       title
    //     }
    //   }
    // `;

    // const graphql = JSON.stringify({
    //   query: query,
    //   variables
    // });

    return fetch(endpoint, {
      method: 'POST',
      headers: myHeaders,
      body: value,
      redirect: 'follow',
    })
      .then(response => {
        statusCode = response.status;
        return response.text();
      })
      .then(result => {
        return result;
      })
      .catch(error => error);
  }

  const response: string = await fetchGraphQL(query);
  const prettifiedResponse = prettify(response);

  return <JSONViewer value={prettifiedResponse} statusCode={statusCode} />;
}
