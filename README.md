# Pluralsight Coding Challenge - Front End

Angular application that consumes the questions back end API.

https://damer-pluralsight-www.herokuapp.com

This application provides a front end to manage questions, answers, and distractors. The following operations are supported:

- View all questions
- Create a new question
- Edit an existing question
- Delete an existing question

While the REST service supports pagination, I did not have time to implement it in the Angular application.

The service is hosted on Heroku using the free hobby tier, which means it will be shut down after a period of no activity. It may take several seconds for a response on the first request while this instance and the back end service are started. If you experience issues with data not loading, making a request to https://dame-pluralsight.herokuapp.com/questions should resolve it.
