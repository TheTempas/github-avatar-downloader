var request = require('request');
var env = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ env.GITHUB_USER + ':' + env.GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  // console.log(requestURL);

  request.get(requestURL)
    .on('error', function (err) {
      throw err;
    })
    .on('response', function(response) {
      response.toJSON;
    })

}

function getAvatars (arr) {
  console.log(arr);
  var myArray = arr.map(function(obj) {
    var newObj = {};
    newObj["avatar_url"] = obj.avatar_url;
    return newObj;
  });
}

getRepoContributors("jquery", "jquery", getAvatars);
// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });