// Let we have a link called as users when i click that it should display me the list of all users, then for every user i want to provide a link, when i click i should go and get the specific data and then display it is same as as on amazon when i click a specific product it takes me to the product showpage and also displays the releated items

//We will be providing dynamic links i.e for every product there should be a new link.

//package.json contains all the packages that has been used in our project.When we install a new package it will be added under the dependencies 

//just bcoz you have started the project it does not mean that API call is executed, the API call will only get executed when we call that component and the component has finished mounting on the page

//for every user i will generate a link and the link must be unique. We will be generating dynamic links.We created links for each users but we want all should be a unique link.The url should be different for every user.

//Here we have diffeent user ids so we will take user id to generate unique links.Now we have generated dynamic links.Now when the user clicks on it i want another component to be shown, lets say user show component.

//The route path is the tricky one
//<Route path="/users/..." component={UserShow} /> here after users it could be 1,2,3, any other value, we will not create routes forevery user but instead we know that /users is common , but somethinf=g after that is like a variable.

//Any value in the url which is gonna be changing i can represent it using a colon id users/:id. The id values we are seeing in the address bar.We can actually extract it and make use of it in our component

//if we want to get the id it is there in {this.props.match.params.id}, props is the props for that component, there is something called as match property which is added by react-router-dom, inside that there is params and inside that there is id. How do i know this is id bcoz we have specified id if this was  users/:userId , i've to use {this.props.match.params.userId},  this is how we know which user was clicked.

//Here my server is gonna respond for an id, so we will pass id, we canpass name if we are maintaining our backend