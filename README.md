<h1 align="center">
  Fusilli - Project CatWalk 😺
  <br><br>
  <img src="./client/src/assets/site-overview.gif" width="800" alt="site overview gif">
  <br>
</h1>

<p align="center" style="font-size: 1.4rem;">A 21st century solution to all your shopping needs.</p>

<hr />

## The problem

An outdated client-facing retail web-portal has become significantly outdated and is hurting sales. Project Catwalk is a complete redesign of the retail portal designed to address this concern and modernize the site. This document outlines the features to be implemented as part of Project Catwalk.

## This solution

A client facing product detail page with a product overview, related products image slider, questions and answers, and a reviews and rating.

## Table of Contents

- [The problem](#the-problem)
- [This solution](#this-solution)
- [Table of Contents](#table-of-contents)
- [Overview](#Overview)
- [Installation](#installation)
- [Components](#Components)
- [Contributors](#contributors)

## Overview

- E-commerce site built with React hooks, React Context API, Node.js and Express
- Light and dark theme mode utilizing CSS modules
- Deploy with AWS EC2 instance (t2.micro), with 0.6 sec First Content Paint
- 4 distinct components with their own unique challenges

## Installation

```
npm install

npm start

npm run build
```

## Components

Each team member was responsible for a component with its own set of unique business requirements. A brief introduction and component highlights are available below.

---

### Product Overview by Diego Coronel

### Intro

Fill out here

### Product Overview Breakdown

Fill out here

![Product Overview](client/src/assets/Product-Overview.png 'product overview component')

---

### Related Products by Tristan Lerisse

### Intro

Based on the current product being viewed, this component will suggest related items that share similar characteristics to help the user with more options.

### Related Products Breakdown

The information needed to gather these relations were buit by many sub-queries to return the proper results. JSONB aggrate functions were utilized within Postgres to return the data in an optimal format that met client expectations. To further increase efficiency, b-tree index tables were created to facilitate related product lookup. This led to a 10x fold decrease in response time.

![Related Products](client/src/assets/Related-Products.png 'related products component')

---

### Questions & Answers by Warren Wong

### Intro

The questions and answer component allows the users to ask and answer questions for the product selected. This component utilized central state provided by React Context API and custom React hooks, coupled with CSS modules.

### Questions & Answers Breakdown

Per the business requirements this component includes 4 distinct sub components:

- Questions & Answers List View:
  - List will have the ability to expand and collapse with scroll ability
  - Questions will appear in order of 'helpfulness', corresponding to the how many users have indicated that the question was helpful
  - Questions list can be filtered through the search bar component
- Search Bar Capable:
  - Search terms entered will filter the list view for matching results
  - Search is dynamic and works with any filters
- Add a Question or Answer Forms:
  - On click a form modal will appear with an overlay
  - Mandatory inputs are labeled as such and will prevent missing or incomplete submissions
  - Submitted questions will be stored on external API and appear in either Questions or Answers list

<img src="./client/src/assets/questions-answers.gif" width="800" alt="questions and answers overview gif">

---

### Ratings & Reviews by Mark P. Vale

### Intro

Customers have the ability to write a personalized review, give an overall rating or rate 
specific attributes of a product.

### Ratings & Reviews Breakdown

- Customer Reviews List View:
  - Products that have been rated by customers will display a list of the top two reviews sorted by the chosen parameter in the accompanied dropdown menu
- Average Ratings:
  - A Product's rateable characteristics will be displayed as an average value on the sliding scale
- Add a Review:
  - Customers have the ability to add a review for admin review

![Ratings and Reviews](client/src/assets/Ratings-And-Reviews.png 'ratings and reviews component')

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/WarrenWongCodes"><img src="https://avatars.githubusercontent.com/u/8570718?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Warren Wong</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/diegochamilton"><img src="https://avatars0.githubusercontent.com/u/80371371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Diego Coronel</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/lerisse"><img src="https://avatars3.githubusercontent.com/u/10137509?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tristan Lerisse</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/markPVale"><img src="https://avatars1.githubusercontent.com/u/64980975?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mark Vale</b></sub></td>
  </tr>
</table>
