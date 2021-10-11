# Apollo-training-with-lerna-GraphQL-Codegen

The starting point of the `server` code after completing the Odyssey Lift-off IV course.

how to run application

```
cd packages/server

yarn install

yarn start
```


cd packages/client 

```
yarn install 

yarn codegen
```

goto packages/client/src/generated/codegen.ts 

remove duplicate gql import line 7

import gql from 'graphql-tag';

```
yarn start
```


