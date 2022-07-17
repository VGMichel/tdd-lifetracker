# Week 3 Assignment: Life Tracker

Submitted by: **Valerie Michel**

Deployed Application: [Lifetracker Deployed Site](http://lifetracker-vm.surge.sh/)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button.
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page.
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves.
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge.

**Detailed Activity Page:**

- [ ] The detailed activity page should display a feed of all previous tracked activities.
- [ ] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.)
- [ ] The activity tracked should be given a unique id for easy lookup.
      `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (🚫 Remove this paragraph after adding schema link)
  - [Table Schema](📝ADD LINK TO TABLE SCHEMA.sql HERE!)

### Stretch Features

Implement any of the following features to improve the application:

- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

New Gifs:
![](https://github.com/VGMichel/tdd-lifetracker/blob/main/6-1.gif)
![](https://github.com/VGMichel/tdd-lifetracker/blob/main/6-2.gif)


Old Gifs:
![](https://github.com/VGMichel/tdd-lifetracker/blob/main/4.gif)
![](https://github.com/VGMichel/tdd-lifetracker/blob/main/5.gif)

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, I feel like the labs provide good preparation for the weekly project. Everything that I was able to learn was understandable and made sense. Had I had more time this week to study and immerse myself ineach lab, I would feel like I would have an even better understanding of the material. I felt confident to complete some parts of the weekly project with what I was able to learn through the labs.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time, I would like to play with and implement the back-end/database and complete some stretch features. The content for this week was easily digestable and easy to practice/replicate. This is one project out of many that I will go back to work on after this program.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Page access/permissions on the front-end, forms and form error handling worked well. I haven't yet come across something that hasn't gone as planned for now, but I had some issues with page acess and laying out a ternary operator to handle it. I noticed one of my peers added a 'Log In' button to the 'Access Denied' page, which is good for user experience. I will definitely implement that.

### Open-source libraries used

- Add any links to open-source libraries used in your project.
  https://eslint.org/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I'd like to give a shoutout to my mentor Andrew for showing up to our pod sync and really helping us out passed the time he was supposed to, and offering up great tips and suggestions for our capstone project and for looking through my project to help me fix any errors. I'd also like to give a big shout out to Amaar and Amantina for helping me get my functions working properly.
