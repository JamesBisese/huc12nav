# ESRI Web AppBuilder Custom Widgets
____
This repo contains a customized Web AppBuilder
map/framework, and 1 Web AppBuilder Custom Widget
- [HUC12Nav](https://github.com/JamesBisese/huc12nav/blob/master/widgets/ttHUC12Nav/README.md)

## HUC12Nav :bar_chart: [live demo](https://insdev1.tetratech.com/huc12nav/)
The HUC12Nav is a custom widget to navigate upstream and downstream on the 
Watershed Boundary Dataset (Subwatersheds) and summarize attributes.

![.](images/HUC12Nav_wab.PNG)


### Deploy the app

The entire repo can be deployed in a web server.  It contains all the 
libraries necessary to render the map and run the widget.

The data server used by the widget for navigation IS NOT in this repo -
it is housed in the repo https://github.com/JamesBisese/wbd

Do the following to deploy the app on your server:

1.  Unzip the downloaded app.
1.  Deploy it on your web server.
1.  Browse to the directory where the widget 'ttHUC12Nav' locally hosted 
         and open the app **config.json** file.
1.  Edit the `navigation_url` to point to the `wbd` navigation API.
               `"navigator_url": "/wbd",`
1.  Save the **config.json** file.
1.  View the locally hosted app in your browser.

### Deploy the widget to another WAB instance 

The widget `ttHUC12Nav` can be installed in another WAB instance by 
copying just the folder
    `https://github.com/JamesBisese/huc12nav/tree/master/widgets/ttHUC12Nav`
and configuring the WAB instance to load the widget and provide
access via a map button.

The data server used by the widget for navigation IS NOT in this repo -
it is housed in the repo https://github.com/JamesBisese/wbd

Do the following to deploy the widget in another WAB instance on your server:

1.  Download a copy of the app.
1.  Copy the folder  
    `widgets/ttHUC12Nav`
    to  
    `new_app/widgets/ttHUC12Nav`
1.  Edit the new_app config.json file  
    `config.json` and add the ttHUC12Nav widget.
    ~~~~
    ...
      "widgetOnScreen": {
        "widgets": [
        ...
          {
            "uri": "widgets/ttHUC12Nav/Widget",
            "openAtStart": true,
            "position": {
              "left": 55,
              "top": 45,
              "relativeTo": "map",
              "widget_bottom": 8,
              "widget_left": 5
            },
            "placeholderIndex": 1,
            "id": "widgets_HUC12Nav",
            "name": "ttHUC12Nav",
            "version": "2.5",
            "closeable": true
          },
        ...
        ],
    ...
    ~~~~

4.  Browse to the directory where the widget 'ttHUC12Nav' locally hosted 
         and open the app **config.json** file.
1.  Edit the `navigation_url` to point to the `wbd` navigation API.
               `"navigator_url": "/wbd",`
1.  Save the **config.json** file.
1.  View the locally hosted app in your browser.

### Update the app using GitHub

The application is delivered as a GitHub repository.  This allows sharing
updates based on user input or the chance to add new functionality.

To update follow the following steps:

~~~~

user.name@MACHINE C:\inetpub\wwwroot\huc12nav
$ dir
...
11/03/2019  01:42 PM            20,654 3rd-party-license.txt
11/03/2019  01:42 PM               212 appinfo.json
11/03/2019  01:42 PM            15,926 config-readme.txt
11/03/2019  01:42 PM            23,152 config.json
11/03/2019  01:42 PM    <DIR>          configs
11/03/2019  01:42 PM    <DIR>          dynamic-modules
11/03/2019  01:42 PM            11,095 env.js
11/03/2019  01:42 PM    <DIR>          images
11/03/2019  01:42 PM             4,000 index.html
11/03/2019  01:42 PM             7,471 init.js
11/03/2019  01:42 PM    <DIR>          jimu.js
11/03/2019  01:42 PM    <DIR>          libs
11/03/2019  01:42 PM             3,854 readme.html
11/03/2019  01:42 PM             2,752 README.md
11/03/2019  01:42 PM             5,008 simpleLoader.js
11/03/2019  01:42 PM    <DIR>          themes
11/03/2019  01:42 PM               521 web.config
11/03/2019  01:43 PM    <DIR>          widgets

user.name@MACHINE C:\inetpub\wwwroot\huc12nav\widgets\ttHUC12Nav
$ dir Widget.js
11/03/2019  01:41 PM           224,242 Widget.js
...

user.name@MACHINE C:\inetpub\wwwroot\huc12nav
$ git pull
remote: Enumerating objects: 13, done.
remote: Counting objects: 100% (13/13), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 7 (delta 5), reused 7 (delta 5), pack-reused 0
Unpacking objects: 100% (7/7), done.
From https://github.com/JamesBisese/huc12nav
   71d2227..ffbd3aa  master     -> origin/master
Updating 71d2227..ffbd3aa
Fast-forward
 .gitignore                   |  59 ++++++-
 README.md                    |  35 +++-
 widgets/ttHUC12Nav/Widget.js | 383 +++++++++++++++++++++++++++++--------------  3 files changed, 351 insertions(+), 126 deletions(-)
 ~~~~
After the last update
 ~~~~
user.name@MACHINE C:\inetpub\wwwroot\huc12nav\widgets\ttHUC12Nav
$ dir Widget.js
11/03/2019  05:31 PM           224,271 Widget.js
 ~~~~
if there are no updates
~~~~
user.name@MACHINE C:\inetpub\wwwroot\huc12nav
$ git pull
Already up to date.

~~~~
