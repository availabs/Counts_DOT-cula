# Counts DOT-cula

``` bash
npm install
node index.js
```

goto `http://localhost:4000/traffic_data/graphiql`

``` graphql
{
  allDotShortCountSpeeds(first:10) {
      edges {
      node {
        rg,
        regionCode,
        federalDirection
      }
    }
  }
}
```
