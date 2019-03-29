# Sprint Challenge: RDBMS and SQL - Projects & Actions

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project.

This Sprint explored Adding Data Persistence to Web APIs and you were taught the following modules: Introduction to Relational Databases and SQL, Inserting and Modifying Data, Querying Data; Migrations and Seeding and Introduction to Data Modeling.

In your challenge for this Sprint, you will demonstrate proficiency by creating an API that persist data to SQLite3.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Adding Data Persistence to Web APIs and your command of the concepts and techniques in the Introduction to Relational Databases and SQL, Inserting and Modifying Data, Querying Data; Migrations and Seeding and Introduction to Data Modeling modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you **design** and build an application for managing `Projects` and `Actions` in the spirit of David Allen's _Getting Things Done (GTD)_ methodology.

Use _Node.js_, _Express.js_ and _Knex_ to build a RESTful API for a `Project Tracker` application that persists data to a _SQLite_ database.

This will be akin to the Web API that you built in the last sprint, only this time, you'll be writing the persistence layer.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. Explain the difference between RDBMS and SQL

   An RDBMS is a relational database management system: software designed to, well, help manage relational databases. An RDBMS can help with creating and managing tables and columns, enforcing data types and relationships between different data, and selecting the data requested by the client. So far we’ve been using SQLite3 as our RDBMS, but I’ve heard we switch to PostgresSQL later to avoid compatibility issues between SQLite and Heroku.

   SQL, or Structured Query Language, is a “plain-English”-style coding language we use to write instructions to (most) RDBMSs. SQL is used to create the structure of the database (tables, columns, relationships), as well as to perform CRUD ops on the data. SQL can be abstracted away (written for us) by a desktop app like SQLite Studio, or a JS library like knex.js.

2. Why do tables need a primary key?

   The primary key (PK) is the one column in a record (often an integer called ‘id’) that is guaranteed to to uniquely identify the record. A PK has at least two main purposes. First, it guarantees that no two records can be identical because at the very least their PKs will be different. While one _could_ use any unique column as a PK (‘username’, for example), this is a bad idea because it assumes that no one will ever come along later and change the unique property of that column (not to mention that the ‘username’ would have to be stored as a foreign key in other tables).

   The second main purpose of PKs is to create links between records in different tables. In a one-to-many relationship, for example, a PK is used to link a single record in one table and multiple records in another. Let’s say there’s a students tables and a grades table. The grades table would reference the PK of the students table with a column that might be called ‘student_id’ - this is called a foreign key (FK). If student ‘Christopher Foster’ had a PK of 02334, then each grade record for that student would have a ‘student_id’ (FK) of 02334. Using a JOIN based on the number they have in common, an SQL SELECT could return the student ‘Christopher Foster’ and all that student’s grades.

3. What is the name given to a table column that references the primary key on another table.

   foreign key

4. What do we need in order to have a many-to-many relationship between two tables.

   It probably has different names, but we need a **junction table**: a table that contains a foreign key column for each of the two tables (though it may contain other columns as well). For example, most video games have multiple characters, and at least some characters appear in multiple video games. A game table and characters table would thus have a many-to-many relationship. A junction table might be called game_characters. The character Mario appears in Super Mario Bros. and Super Mario Bros. 2. Our game_characters table would contain one record for each game, like so:

   |  id | character_id | game_id |
   | --: | -----------: | ------: |
   |   8 |           12 |       6 |
   |  29 |           12 |      18 |

   id is the PK for this table (not required, but I feel more comfortable with a PK in every table). character_id is an FK for the characters table, and game_id is an FK for the games table. With these three tables we can select Mario (pulling additional data from the characters table if needed) while also selecting the games he has appeared in (again, pulling additional data from the games table as needed).

## Project Set Up

Follow these steps for starting your project.

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

**NOTE** There is no boilerplate for you for this project. You will need to take the steps necessary for creating this project from scratch. Start by initializing your project with a `package.json` file and go from there.

- [ ] A `project` can contain multiple actions and has:
  - [ ] a unique Id.
  - [ ] a name.
  - [ ] a description.
  - [ ] a flag that indicates if the project is complete or not.
- [ ] An `action` belongs to only one project. An action has:
  - [ ] a unique id.
  - [ ] a description of what needs to be done.
  - [ ] a notes column to add additional information.
  - [ ] a flag that indicates if the action has been completed.

Feel free to name the tables and fields anything you want. **Add relationships** as you see fit.

### Tasks

- [ ] Build the database and tables using knex migrations. **Seeding is not needed**.
- [ ] Build the API with the following endpoints:

  - [ ] POST for adding projects.
  - [ ] POST for adding actions.
  - [ ] GET for retrieving a `project` by its `id` that returns an object with the following structure:

    ```js
    {
      id: 1,
      name: 'project name here',
      description: 'the project description',
      completed: false, // or true, the database will return 1 for true and 0 for false
      actions: [
        {
          id: 1,
          description: 'action description',
          notes: 'the action notes',
          completed: false // or true
        },
        {
          id: 7,
          description: 'another action description',
          notes: 'the action notes',
          completed: false // or true
        }
      ]
    }
    ```

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

Add the remaining CRUD operations for projects and actions.

Use `knex` to add _data seeding_ scripts for projects and actions.

Add support for the concept of `contexts`. A context is something like _at home_, _at work_ or _at computer_. The idea is that some actions require one or more `contexts` in order to be worked on. For example, the action of _file income taxes_ may require that you are _at home_, _at computer_ and _online_ so if you are _at work_ and look at the list of pending actions you could do in your current context, filing your taxes will not be one of them.

A `context` can be applied to more than one `action`. An action can be tied to more than one context, like in the example above.

When retrieving an `action` by _id_, add a property that lists all the `contexts` related to that action.

**Remember to run `npm init -y` to generate a _package.json_ before adding your dependencies.**

_Good luck and have fun!_
