# Considerations

- This project is compatible with blueprint for frontend, you can find these
  blueprints in the following [repository](https://bitbucket.org/tradesystem/front_snippets/src/master/).

- Service layer should implement react query for endpoint calls and fetching
  data.

- Service layer use mock responses by default. If you need disabled it, change
  `shouldMock` variable in utils/common.utils.ts file

- To install a new dependency package, you must use the -W flag, because this
  repository uses turborepo and is configured with workspaces.

- If you want add Continuous Delivery feature, you must configure a provider.
  Ex: Vercel
