# next-prev-hotkeys
A simple page navigation extension for firefox based on unique class identifiers

This was mainly made to assign hotkeys to Next and Previous buttons on pages but it can work on any two buttons

# How to install as a debug extension

1- Put the manifst.json and content.js in a folder

2- open firefox manage your extensions





-> click on the cog wheel in the top right -> Debug addons 



-> Load temporary addons and select only the json file




3- open the site that has a previous and next buttons 

make sure it always runs on this website for convenience 




# how to use

inspect element the next button by right clicking on the button and selecting inspect
it should look like this 



right click on it and copy the css selector





CTRL + Right arrow key for next 

CTRL + Left arrow key for previous 

it will prompt you to enter the css selector for the current website




if you used a wrong css selector you can clear the history by 
CTRL + H to clear history for css selectors

i can't use the right or left arrow keys alone because it is not allowed by firefox
 
