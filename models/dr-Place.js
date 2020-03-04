// Darius Place Schema
/*
(Reference) Instructions: 
    create the file Place.js in model
    create a model that takes State, City, Street
    city and state should be required
    this should be done on a branch NOT on master
    push this branch to github 'git push -u <remote> <branch>' 
    this branch needs to be merged to master. I can't stop you from using git merge however this excersise is to practice pull requests. To complete this correctly merge the branch to master using the pull request system on your own repo
    Lastly figure out how to submit a pull request of your master to my master on github
*/
const mongoose = require('mongoose'),
    PlaceSchema = mongoose.Schema({
        city: {
            type: String,
            required: true,
            maxlength: 100
        },
        state: {
            type: String,
            required: true,
            maxlength: 2
        },
        streetname: {
            type: String,

            maxlength: 300
        }
    });


    module.exports = mongoose.model('Place', PlaceSchema)
