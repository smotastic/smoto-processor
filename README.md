# smoto-processor
Tool to manipulate a given directory of pictures (resizing, renaming) and Upload them to Google Drive


# Commands
* upload - Copy and Resize every image (800x600) in given -source (Default: $BASE_SOURCE_FOLDER), place them in -target and Upload them to the configured Google Drive
 * -source Source Folder from where the Pictures will be copied and resized 
 * -target Target Folder where to place the resized and copied pictures

```
smoto --help 
```

## Configuration of Google Drive
In the modules Folder, there has to be a ```oauth2.keys.json``` File.
This must contain the ClientID (OAuth2), ClientSecret(OAuth2) and ProjectId(Service).
```
{
    "web" : {
      "redirect_uris": ["http://localhost:3000/oauth2callback"],
      "client_id": "{clientId}",
      "client_secret": "{clientSecret}",
      "project_id": "{projectId}"
    }
  }
```

The uploaded Files will be placed in either the configured FolderID ```$UPLOAD_TARGET_FOLDER_ID```, or default in ```root```

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
 * BASE_SOURCE_FOLDER
 * BASE_TARGET_FOLDER
 * UPLOAD_TARGET_FOLDER_ID