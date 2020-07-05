![enter image description here](https://i.imgur.com/yEhpcus.png)
<h2> Innovaccer Task </h2>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea80bd57-198d-4fa5-9aec-8181c3ac870f/deploy-status)](https://app.netlify.com/sites/portfoliotask/deploys)
  [![UI ](https://img.shields.io/badge/User%20Interface-Link%20to%20UI-orange?style=for-the-badge&logo=appveyor)](https://portfoliotask.netlify.app)


## Instructions to run

* Directions to setup backend
```bash
$ cd backend
$ virtualenv venv
$ soucrce venv/Scripts/activate
$ pip install -r requirements.txt
$ python manage.py runserver
```

Open `settings.py` and check the below code

![enter image description here](https://i.imgur.com/PH0B4yD.png)

You can either add the `EMAIL_HOST_USER` and `EMAIL_HOST_PASSWOD` in your environment variables or simply replace `os.environ.get('EMAIL_HOST_USER')` with your email id and `os.environ.get('EMAIL_HOST_PASSWORD')` with the password to get started.

* Directions to setup frontend
```bash
$ cd client-innovaccer-task
$ `yarn` or `npm install`
$ `yarn start` or `npm start`
```
## Endpoints

1. <code>/api/v/portfolio</code> **`GET`** Fetch the portfolio data.
2. <code>/api/v/portfolio/email</code> **`POST`** Sends user comments to the portfolio creator.

## Directory Structure

1. Frontend
![enter image description here](https://i.imgur.com/MuHmUEa.png)

2. Backend
![enter image description here](https://i.imgur.com/NSPYNbD.png)

## UI Screenshot
<img src="https://i.imgur.com/XNY6cEI.png"/>


<br>
<br>

Made during 🌙 