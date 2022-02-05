READ THIS CAREFULLY TO RUN MY PROJECT.

PART 1:

1.Open project in VS CODE.

2.Open terminal (Ctr+Shift+`) and run below command in main project directory e.g. in my case react_infinite_scroll_bar is main folder.

>npm install (for creating node_modules folder)

3.Then in terminal go to fakeapi folder using command

>cd fakeapi

4.Then run command

>npm run json:server

5.Open http://localhost:3000/Questions You will see already added 44 Questions in fake api.

PART 2:

1.Open new terminal (Ctr+Shift+`) but do not close previous terminal.

Run command

>npm start

It will ask you to run the server on port 3001 press "y" key on keyboard.(because json server is running on port 3000)

2.Open http://localhost:3001  then you will see 10 Questions on screen and if you scroll down next 10 Question will appear on the Screen after 1.4 sec along with previous Questions and so on .....


Thank You ! :)