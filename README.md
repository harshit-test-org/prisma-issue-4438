## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/4438


## Version tested

2.11.0(reverted findOne -> findUnique breaking change), 2.12.1, 2.13.0-dev.31

Reproducible in the all above versions

```
Environment variables loaded from /home/harshit/code/reproductions/issue-4438/prisma/.env
@prisma/cli          : 2.12.1
@prisma/client       : 2.12.1
Current platform     : debian-openssl-1.1.x
Query Engine         : query-engine cf0680a1bfe8d5e743dc659cc7f08009f9587d58 (at node_modules/@prisma/engines/query-engine-debian-openssl-1.1.x)
Migration Engine     : migration-engine-cli cf0680a1bfe8d5e743dc659cc7f08009f9587d58 (at node_modules/@prisma/engines/migration-engine-debian-openssl-1.1.x)
Introspection Engine : introspection-core cf0680a1bfe8d5e743dc659cc7f08009f9587d58 (at node_modules/@prisma/engines/introspection-engine-debian-openssl-1.1.x)
Format Binary        : prisma-fmt cf0680a1bfe8d5e743dc659cc7f08009f9587d58 (at node_modules/@prisma/engines/prisma-fmt-debian-openssl-1.1.x)
Studio               : 0.322.0
```

## Steps for reproduction

1. Clone this repository
2. Change the credentials in the prisma/.env file
3. Run `npx prisma migrate dev --early-access-feature` to bootstrap the schema
4. Run `yarn` to install the dependencies
5. Run `yarn start` to reproduce
