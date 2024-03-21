# url-shortener

Lets talk about the logic:

The logic itself for such a skeletal app is quite simple.
First thing, we get ourselves a url using POST parameters, and then
We use various ID generators, and generate one during the POST req
We store both the recieved link and the generated ID in our DB
Then, we use a GET req, and using parameters, we search for that ID in our DB
If Found, we redirect them to the page it is linked with
If not, we send a error 400 bad req to the server.

For now, this is what i've learnt from this project.

# Additional Stuff to remember but isnt the most important thing.
1. `locals` is where stuff from db is stored
2. helpful for conditional statements or situations where we need to check
3. SSR isnt the most necessary thing for backend, frontend frameworks handle those stuff
4. every thing from backend for now is a pass and play of POST and GET requests
5. `Make Sure To Think Outside The Box Always.` 
6. Go through Static Routers, form actions, ejs logic from time to time. 