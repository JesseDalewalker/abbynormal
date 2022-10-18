# Abby Normal

Here is a video from my personal project from 5:09-14:47 if you are interested called, Abby Normal: https://youtu.be/N_isbF5obA0?t=307

This is my first project which encompasses the full stack with React.js, Django, PostgreSQL, SASS, HTML, CSS, Javascript, Python, CRUD, and API's. I hope you enjoy this project as much as it was fun making it.

## Table of Contents
* [Backend Setup](https://github.com/JesseDalewalker/abbynormal#backend-setup)
* [Frontend Setup](https://github.com/JesseDalewalker/abbynormal#frontend-setup)
* [Git Workflow](https://github.com/JesseDalewalker/abbynormal#git-workflow)

## Getting Started: Installing The Project

### **Backend Setup**

1. Make sure to clone this repo into your local machine! (No need to fork)
```
$ git clone https://github.com/JesseDalewalker/abbynormal.git
```

2. Create a virtual environment
```
$ python -m venv .venv
```

3. Activate the virtual environment
```
$ source .venv/bin/activate
```

4. Install requirements.txt
- #### Windows/Linux
```
$ cd abbynormal/
$ pip install -r requirements.txt
```
## Be advised, ensure Python and PiP are updated
- #### Mac
```
$ pip3 install -r requirements.txt
```
5. Create a .env file then generate a new SECRET_KEY for Django settings.py.
```
$ touch .env
$ python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
- Note: You might need to run it with `python3` instead
- Insert this inside the .env file: `SECRET_KEY = "Paste secret key here"`

6. Create the database (Postgresql)
```
- Ensure you have PostgreSQL downloaded-- if not download the installer here: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
and pick the approprriate one for your device.

- Then install the common client
$ sudo apt install postgresql-client-common

#Using WSL and getting an error? 
Go to this link: https://www.codegrepper.com/code-examples/shell/Error%3A+You+must+install+at+least+one+postgresql-client-%3Cversion%3E+package
AND 
Go to this link to setup your postgres user: https://www.postgresql.org/docs/13/tutorial-createdb.html

- You should now be able to create a database
$ createdb abbynormal_db
```
- If you get an error like this: `Is the server running locally and accepting connections on that socket?` Run this command:
```
$ sudo service postgresql start
```
7. Move into `Back-end` directory and migrate the models into your database.
```
$ python manage.py makemigrations
```
Or
```
$ python3 manage.py makemigrations
```
8. Run migrate command
```
$ python manage.py migrate
```
Or 
```
$ python3 manage.py migrate
```
9. Finally, start up the backend server to ensure it's set up successfully.
```
cd Back-end
$ python manage.py runserver
```
Or
```
$ python3 manage.py runserver
```

### **Frontend Setup**
1. Move into `frontend/abbynormal` directory and install packages.
```
$ npm install
```
2. Start up the frontend server
```
$ npm start
```
## Git Workflow
### **Important note:** Make sure you are committing your changes on your own branch before merging onto the main branch!
1. Ensure you're in the main branch by checking with: `$ git branch -a`
2. Pull from the main branch with this command to get the most up to date version (unless you had just cloned the repo): `$ git pull origin main`
3. Create a new branch and name it after the feature you will be working on. Running the following command will switch you to the branch after specifying the name.
```
$ git checkout -b <new-branch>
```
#### (Example: landing page -> `$ git checkout -b landing`)
4. Start coding!
5. Run commit commands to **your** branch
```
$ git add .
$ git commit -m "Your message here"
$ git push origin <branch-name>
```
6. To avoid running into conflicts when creating a pull request, checkout into the local main branch and merge it with your custom branch:
```
$ git checkout main
$ git merge <branch-name>
```
7. Submit a pull request. GitHub will notify you if there are any conflicts you need to resolve within the files before being able to merge the changes.
- If there are any issues, run `$ git status` to pinpoint their location.

[Back to top](https://github.com/JesseDalewalker/abbynormal#abbynormal)
