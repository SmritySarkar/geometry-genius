function calculateTriangleArea(){
    // Get Triangle Base Value
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    // Calculate Area 
    const area = 0.5 * base * height;
    // Show Calculated Value
    setElementInnerText('triangle-area', area);
}

function calculateRectangleArea(){
    // Get Rectangle Width Value
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    // Calculate Area of Rectangle
    const area = width * length;
    // Show the calculated Rectangle Area
    setElementInnerText('rectangle-area', area);

}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

function calculateRhombusArea(){
    const d1 = getInputValue('diagonal-1');
    const d2 = getInputValue('diagonal-2');
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);

}

function calculatePentagonArea(){
    const perimeter = getInputValue('perimeter');
    const apothem = getInputValue('apothem');
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('first-radius');
    const minorRadius = getInputValue('second-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}

// Reusable function --> reduce duplicate code

// Reusable Get Input Value function
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// Reusable set text function
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

