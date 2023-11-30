# Frontend Assignment

## Your role

You are a frontend developer working within a cross-functional team. Your team
has picked up an epic from the backlog about predicting the nationality of a
user, given their name.

The backend engineer has already delivered required API endpoints and
documentation for the purpose of this task.

Due to the designer being on holidays, you're stepping in and have freedom to
improvise with what you see fit, as long as it's simple to use and has an
appealing appearance.

Due to time constraints, you and your team agreed that the 4th and 5th user
stories are nice to have but not a must to complete in this iteration.

## Guidelines

⚠️ For privacy reasons, please don't clone or fork this repository directly.
Instead, use this template:
https://github.com/smallclaims/sc-frontend-assignment/generate to create private
repository on your account.

There are no strict contribution guidelines for this assignment, instead you are
expected to showcase your expertise in whatever way you see fit.

Ok, maybe just one: no linting or TypeScript errors (`npm run lint`) :)

Feel free to track your work in the README using markdown checkboxes, or using
`todo` comments in your code.

Good luck!

## Epic

```
Title: User Nationality Prediction

Description:

A UI for admin to view and add new users

APIs
- User: https://jsonplaceholder.typicode.com/users
- Nationality (free for 1000 requests a day): https://nationalize.io/

Useful links:
- Country flags package: https://github.com/hampusborgos/country-flags
- Country API: https://restcountries.com/

Acceptance criteria:
- user list is rendered alphabetically
- name input field submits on "Enter" key
- validation: input field only accepts letters, no spaces
- the list should not look broken on various screen sizes

Example list item:
- Ann: UK (60%), DK (30%), DE (10%)
```

## User Stories

As an admin user (let's assume you are already logged in):

1. View a list of user first names (JSON Placeholder API)
2. Add a new name to the list using an input field
3. See nationality with probability percentage (sorted by highest to lowest)
   next to each name (see nationality api in acceptance criteria)
4. Either a) See full country name next to the name instead of country code (
   i.e. Denmark instead of DK) or b) See country flags next to each name instead
   of country code
5. Able to view the list with added names after page reload

## Getting started

Make sure you run Node 18+ with npm

Run development server
`npm run dev`

## Contributing

1. Create a Pull Request to your private repository's main branch and invite to
   review.
2. Add us as external contributors to your own private repo, so we can review
   your Pull Request.
