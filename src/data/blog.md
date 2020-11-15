# Blog 
## 11/13/20: Todos

### MVP
#### Technical
* 1) Figure out why my backend crashes in production, but runs smoothly locally.
* 2) Front-end uses Graphiql as a proof-of-concept but this needs to be moved to the backend. Integrate GraphQL with flask backend.
* 3) If (1) and (2) are completed. Make queries for the URL. Example: https://www.indeed.com/cmp/Unigroup,-Inc/reviews ---> https://www.indeed.com/cmp/{company_name}/reviews. This company_name query needs to be input via graphql. User's shouldn't even be aware that the data is getting fetched from a different URL.
#### Styling
* 1) Invididual Blueprint page
* 2) Graphiql page
* 3) Blog & About
### The Future
* 1) Queries from Technical (3) could be saved in the database
* 2) Micro-API's could be linked via GraphQl. Example > The UFC rankings API could link to the UFC stats api. The trick is that in this particular instance, the URL for invidual stats uses a name with spaces being replaced by dashes (might not be a problem). But this relationship could somehow be established in the GraphQL schema. This would also actually leverage GraphQL in a useful way. If we were to request the UFC rankings and wanted stats. The requests could be made automatically. If there was no interest in stats. The request wouldn't be made at all, thanks to GraphQL.
* 3) Categories for API's
* 4) IMPORTANT: Tool that allows users to create a GhetoQL query without knowledge of XPATH's. This could be done in a variety a ways. Given a single page, users could type in their expect values for various fields. A script could go to the element where the text equals the expected result and use an algorithm to find an xpath that applies only to that element. This unique xpath is what would be used in the GhettoQL query.
* 5) A way of recognizing if a website's structure has changed. Downed API's could be reported and fixed.
* 6) If a downed API is detected, a script could potentially repair the GhettoQL using passed data. It could try to find similiar data and or selectors to rewrite the query. Probably not a worthy use of time. (4) is necessary to do this.
* 7) 