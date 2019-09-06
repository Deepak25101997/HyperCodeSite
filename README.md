# Hyper Code Site
This is the main website of Hyper Code. The website is developed using expressJs and the MVC architecture.

# Keywords info in the file structure of the website
'gen' means general and contains all general things like home page, aboutus, contact us etc. <br>
So add these pages in the gen subfolder in the views folder.

# How to add new ejs pages 
Just go to views -> gen -> PAGENAME.ejs

# Adding CSS and Js for the ejs pages
Go to the public folder and add your files in the CSS and Js subfolders

# Linking the CSS and Js from ejs
Just add the href in the link tag in the following format:<br>
-> link rel="stylesheet" href="css/FILENAME.css" <br>
-> link type="text/javascript" href="js/FILENAME.js"

# NOTE: 
Please keep the FILENAME same for both CSS and JS if possible. (to provide clarity)<br>
Do not forget to add the routes (in routes folder) and corresponding controllers (in controllers folder) to render the ejs you add.
