const formCalculator = document.querySelector("form");
const btnCalculate = document.querySelector(".btn--calculate");
const calcResultsDiv = document.querySelector(".calculator__results");

const removeClass = (mainEl, selectEl, className) => {
    mainEl.querySelector(selectEl).classList.remove(className)
}

const updateResults = () => {
    const h1 = calcResultsDiv.querySelector("h1");
    const description = calcResultsDiv.querySelector("p");

    // Remove "empty" illustration
    calcResultsDiv.querySelector("img").remove();

    // Update results content
    h1.innerText = "Your results";
    description.innerText = `Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.`;

    // Remove center class from results content
    calcResultsDiv.classList.remove("flex-center");
    removeClass(calcResultsDiv, ".calculator__results-content", "text-center");
    removeClass(calcResultsDiv, ".calculator__results-breakdown", "hidden");
}