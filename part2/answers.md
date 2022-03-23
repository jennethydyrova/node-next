\*\*

1. What is the difference between responses with 401 and 403 status codes? When
   should an API return 401, and when should an API return 403?
   \*\*

401 response should be returned when user is not logged in (not authenticated) and tries to reach certain data, e.g. user has invalid credentials.
403 response, on the other hand, returned when used is logged in but has no permission to view requested data. e.g. user has insufficient credentials.

\*\*
The REST API described in (3.) returns user data, allows upload of user data, and
deletion of user data.

1. Which endpoints should have restricted access?
2. Do any endpoints read from a state that persists beyond the request lifetime? If so, which ones?
3. Do any endpoints write to a state that persists beyond the request lifetime? If so, which ones?
4. Do we expect data operations for any of these endpoints to be idempotent? If so, which ones?
   \*\*

5. I would say that /users and /users/userId should have restricted access, since we do not want everyone to have access to user data returned by /users endpoint. Also, we do not want someone randomly deleting users from our database.
6. /users, /ping
7. /users/userId
8. Yes, DELETE /users/userId endpoint, since effect of sending multiple DELETE requests would be same as an effect of sending just one.

\*\*
The REST API described in (3.), the GET user endpoint returns all of the
user’s data.

1. State (in less than 250 words) what you consider to be some upsides, and if relevant,
   downsides to this approach.
2. State (in less than 250 words) ways that you think this approach could be
   improved, for the purposes of data security.
   \*\*

3. I think it depends on the context where we use this endpoint. If we are using it internally for development purposes, then returning all data at once might have its advantages, such as avoiding sending multiple requests to get data related to a certain user. However, if it's used publicly, most of the time users should not be able to see info about other users. User's role (admin, moderator, user), balance (if it's related to money or other sensitive data), first name and last name and email, typically should not be available to all users. It makes app prone to security breach and user's data is not secure.

4. We should define who should have access to the endpoint and which fields are available to which users. We can require users to authenticate before using our endpoint to determine the role of the user. Admin, moderator and user will be authorized to have differet access to the same endpoint. If it's a type of an app where users need to see info of other users, we can give access to the endpoint to regular users but make certain fields private, such as balance and email (if not necessary for user). If app doesn't require users to see other users' info, then we can basically not give access to the endpoint for regular users.
