# next-prev-hotkeys
A simple page navigation extension for firefox based on unique class identifiers

This was mainly made to assign hotkeys to Next and Previous buttons on pages but it can work on any two buttons

# How to install as a debug extension

1- Put the manifst.json and content.js in a folder

2- open firefox manage your extensions


![Screenshot 2023-09-10 081434](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/07f99d61-182b-4384-a30f-d5cf622f6c6e)



-> click on the cog wheel in the top right -> Debug addons 

![image](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/caa93c6e-0abf-41d0-966f-d948fbd1af97)


-> Load temporary addons and select only the json file

![image](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/78825a10-9bc7-4db5-9c74-05ce923af34c)



3- open the site that has a previous and next buttons 

make sure it always runs on this website for convenience 

![image](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/25eb66a3-92c9-4b6b-a2f8-83910b893f67)



# how to use

inspect element the next button by right clicking on the button and selecting inspect
it should look like this 

![image](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/05c2da9c-2a65-4d86-9bdf-d9f6348ce759)


right click on it and copy the css selector

![image](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/a454b8b2-b8dc-488b-be6e-1b3d16defe3d)


CTRL + Right arrow key for next 

CTRL + Left arrow key for previous 

it will prompt you to enter the css selector for the current website

![image](https://github.com/NabilKhattab37/Next-Prev-Nav-Hotkeys/assets/138429293/9bb3762d-1e13-4fc4-af11-ae155775b4de)


if you used a wrong css selector you can clear the history by using

CTRL + H to clear history for css selectors

i can't use the right or left arrow keys alone because it is not allowed by firefox
 
