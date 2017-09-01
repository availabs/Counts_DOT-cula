# Counts DOT-cula

``` bash
npm install
node index.js
```

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
