# smoto-processor
Tool to manipulate a given directory of pictures (resizing, renaming) and Upload them to Google Drive


# Commands
* upload - Resizes every image in given -folder (Default: $BASE_FOLDER) to 800x600 and Uploads them to the configured Google Drive

## Configuration of Google Drive
TODO

```
smoto --help 
```
For more info

# Requirements
* Nodejs must be installed

# Install
Execute in the Root Directory of this Project the following command
```
npm install -g --force ./
```
You should be able to use the "smoto" Commands from every Terminal now.


# Development
* Create .env and set the following Environment Variables
  * BASE_FOLDER