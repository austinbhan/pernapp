# pernapp
Following along with freecodecamp's PERN tutorial 

11/16/23
Bug: SQL table exists in postgres, SQL commands in beekeeper will update data. VSCode post commands not fetching correctly. Syntax matches tutorial.
Hypothesis: Is this is a port issue?
Reference: https://www.youtube.com/watch?v=ldYcgPKEZC8&t=1118s, 20:24

11/29/23
Setup Information
- Backend
- 1: Open blank template
- 2:  mkdir server
- 3: cd server
- 4: npm init
- 5: npm i express pg cors
- 6: touch index.js
- 7: db.js
Note: Use nodemon index to monitorbackend

About Backend Files
1: index.js: sets up middleware and routes, initiates server listening, import express and cors
2: db.js. Sets up listening link to backend, import to index.js

- FrontEnd -
- 1: To initiate, create-react-app [app name here]
cd [app name here]
npm start
  
