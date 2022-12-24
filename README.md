# Project: FlashCards Application 

## Authentication:
Creating log in and sign up page using Firebase.
<img width="1435" alt="Screenshot 2022-12-24 at 10 17 44 AM" src="https://user-images.githubusercontent.com/91344736/209442600-70846225-54e1-4673-9b1e-53d8324ae68a.png">

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz
<img width="1333" alt="Screenshot 2022-12-24 at 10 29 53 AM" src="https://user-images.githubusercontent.com/91344736/209442624-09ba0436-e5db-4da9-b3d6-11c9c8ed2534.png">

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over
