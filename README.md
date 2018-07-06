# Stashpoints

### Description: 
Stashpoints is a react web app that helps users to find places where they can store their belongings. This is achieved by querying the [CityStasher API](https://shapelabs-uk.github.io/citystasher-api-docs/#introduction)

#### **View the project here:** [https://stashpointsearch.netlify.com/](https://stashpointsearch.netlify.com/)

---
### Running the project locally 

1.  Clone this repo - `https://github.com/jennah2121/stashpoints.git`
2.  Install the required dependencies with `npm i`
3.  Run the project with `npm run start`

    To run tests `npm run test`
---
### File Structure 
```
StashPoint Search
├── Public
│       ├── index.html
│       ├── styles.css
│── Src
│  ├── Components
│       ├── App
|       |   ├── App.js
│       │   └── App.test.js
│       ├── Card
│       │   ├── Card.js
│       ├── CardContainer
│       │   ├── CardContainer.js
│       ├── Form
│       │   ├── Form.js
│       ├── Utils
│       │   ├── getStashpoints.js
│       ├── index.js
├── .babelrc
├── .eslintrc
├── .gitignore
├── README.md
├── package-lock.json
├── package.json

```


---
### Tech Stack and Tools
The project uses: 

| Front End         | Testing       | Tools   |
| -------------     |:-------------:| -----:  |
| React             | Jest          | Netlify |
| Styled Components |               | Figma   |
| JSX               |               | Babel   |
| Javascript(ES6)   |               | Eslint  |
| HTML5             |               | Parcel  |
| CSS3              |               |         |
___

### User Stories

- [x] Users can view places where they can store their belongings
- [x] Users results are filtered
- [ ] Users results are sorted

___
### Design 
A **rough** design of the project: 

#### *All views:*
![Results Page](https://user-images.githubusercontent.com/25872585/42390381-96032fc4-8143-11e8-8784-fe0a44bc9ba9.png)

#### *Main Page:*
![Main Page](https://user-images.githubusercontent.com/25872585/42390153-f52c036e-8142-11e8-8977-012a03382730.png)


#### *Results Page:*
![Results Page](https://user-images.githubusercontent.com/25872585/42390157-f8900384-8142-11e8-9ae2-ef7ee9630adc.png)

#### *Detailed view page:*
![Results Page](https://user-images.githubusercontent.com/25872585/42390160-fac2954a-8142-11e8-99fc-45ab1978c91f.png)

___

### If I had more time...
- [ ] I would write **tests** starting with a fetch-mock to check the response from the API call 
- [ ] Add more **filtering** options  
- [ ] **Sort** the data
- [ ] Accessibility and Semantics
- [ ] Finish the **styling**
- [ ] Use a **styled components theme** given that the same colours are used everywhere 
- [ ] Make sure all 'pages' have a **back button** 
- [ ] Possibly re-evaluate the file structure
- [ ] Maybe use JSDoc

#### I'd like to learn more about 
- [ ] Error boundaries - When writing the code, I had a react error and the error suggested I look at error boundaries. I didn't have time to look at this in detail. 
- [ ] React Router - It would be nice if the user could use the back/forward buttons on the browser to navigate the site

#### Challenges 
- Thinking about where to keep state
    - Initially the state relating to the form was kept inside the form component, as was its on submit function. 
    - The problem was that even though I could make the request to the API from the form component, I had no way to update the state of the App (form's parent component)
    - In order to maintain a unidirectional flow of information, I moved the the forms on submit and its state into App. This allowed App's state to be updated directly. 
