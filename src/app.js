// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.sass'

// This is the projects title, change to fit needs
const projectTitle = 'Form Submitter'


// This will hold the client details and display to the console at end when filled in
let clientDetails = []; 


// visibility set for each stage. Will update using function to display each stage
let visibilityStageOne = true;
let visibilityStageTwo = false;
let visibilityStageThree = false;


// Functions that toggle each stage visibility
const visibilityStageOneToggle = () => { visibilityStageOne = !visibilityStageOne, renderStage()};
const visibilityStageTwoToggle = () => { visibilityStageTwo = !visibilityStageTwo, renderStage()};
const visibilityStageThreeToggle = () => { visibilityStageThree = !visibilityStageThree, renderStage()};


// Function to check to see if the client details are updating
const checkDetails = () => { 

    // Function that converts arrays into objects
    const convertToObject = (item) => {
        const amendObject = {};
        for (let i = 0; i < item.length; ++i)
            amendObject[i] = item[i];
        return amendObject;
    }
    // Convert clientDetails array into an object
    const clientObject = convertToObject(clientDetails);
    
    // Converted JSON file using stringify
    let clientObjectJSON = JSON.stringify(clientObject);
    console.log('This is the string JSON object ' + clientObjectJSON)
};


// Function formOne submisson
const onFormOneSubmit = (event) => {

    // don't refresh the entire page
    event.preventDefault(); 

    // send form values to client details array
    clientDetails.push(event.target.elements.clientTitle.value)
    clientDetails.push(event.target.elements.clientName.value)
    clientDetails.push(event.target.elements.clientDoB.value)

    // toggle visibility of stage one and two
    visibilityStageOneToggle();
    visibilityStageTwoToggle();
}


// formOne
const formOne = (
    <form id="formOne" onSubmit={onFormOneSubmit}>
        <select id="clientTitle" name="clientTitle" required >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Mx">Mx</option>
            <option value="Miss">Miss</option>
            <option value="Master">Master</option>
        </select>
        <input id="clientName" type="text" name="clientName" required ></input>
        <br></br>
        <input id="clientDoB" type="date" name="clientDoB" required ></input>
        <br></br>
        <button id="buttonFormOne">Next</button>
        <br></br>
    </form>
)


// function formTwo submission
const onFormTwoSubmit = (event) => {

    // don't refresh the entire page
    event.preventDefault();

    // send form values to client details array
    clientDetails.push(event.target.elements.clientLocation.value)
    clientDetails.push(event.target.elements.clientDoT.value)
    clientDetails.push(event.target.elements.clientFeedback.value)

    // send client details array to the console
    checkDetails();

    // toggle visibility of stage two and three
    visibilityStageTwoToggle();
    visibilityStageThreeToggle();
}


// formTwo
const formTwo = (
    <form id="formTwo" onSubmit={onFormTwoSubmit}>
        <input id="clientLocation" type="text" name="clientLocation" required ></input>
        <br></br>
        <input id="clientDoT" type="date" name="clientDoT" required ></input>
        <br></br>
        <br></br>
        <textarea  id="clientFeedback" type="text" name="clientFeedback" cols="50" rows="10" defaultValue="Any feedback would be great!"></textarea>
        <br></br>
        <button id="buttonFormTwo">Submit</button>
    </form>
)


// thankYou note
const thankYou = (
    <div>
        <p>Thanks for all the help</p>
        <p>Hope to see you soon</p>
    </div>
)

const renderHeader = () => {
    const jsxHeader = (
        <div id="headerArea">
            <h1>{projectTitle.toUpperCase()}</h1>
        </div>
    );
    ReactDOM.render(jsxHeader, document.getElementById('header'))
}

// Function renders the stage. It can be called again to refresh elements to the DOM
const renderStage = () => {
    const jsx = (
        <div id='stageArea'>

            {visibilityStageOne && (
                <div>
                    {formOne}  
                </div>
            )}
            
            {visibilityStageTwo && (
                <div>
                    {formTwo}
                </div>
            )}

            {visibilityStageThree && (
                <div>
                    {thankYou}
                </div>
            )}

        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

// Function renders an item to the footer
const renderFooter = () => {
    const jsxFooter = (
        <div>
            <p>I read the instructions</p>
        </div>
    );
    ReactDOM.render(jsxFooter, document.getElementById('footer'))
}


// Call render for the first time
renderHeader();
renderStage();
renderFooter();
  