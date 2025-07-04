# Daily Spender

Application for following spending levels and habits. Users register their daily expenses as they occur. For every expense an amount spent and category is required. The data is summarized in three tables:
1) Total expenses per category
2) Total expenses per day
3) All expenses listed from oldest to newest

## Installation and starting
* Clone the repository to your computer
* In your main project folder enter command: npm install
* Install react-scripts with command: npm install react-scripts
* Create .env file and enter the following 4 items:
1) NODE_ENV = development
2) PORT = 5000
3) MONGO_URI = <your mongo address>
4) JWT_SECRET = <your secret key>
* Install react-router-dom in the frontend folder with command: npm install react-router-dom
* In the frontend folder enter command: npm install
* Start the application in the main folder with command: npm run dev

## Using the application
* Start backend and frontend with command: npm run dev
* The application will automatically start in your browser
* Create a user account by giving your email, name, and password
* Log in if not logged in after registration
* Enter new expenses as they occur via the Expense form
