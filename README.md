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
