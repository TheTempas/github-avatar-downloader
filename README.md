# GitHub Avatar Downloader

## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.

## Expected Usage

This program should be executed from the command line, in the following manner:

`node download_avatars.js jquery jquery`

### Additional Dependencies

Create a secrets.js file which includes:

module.exports {
  GITHUB_USER: "YOUR_USERNAME",
  GITHUB_TOKEN: "YOUR_ACCESSTOKEN"
}