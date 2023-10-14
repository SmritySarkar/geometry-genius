function calculateTriangleArea(){
    // Get Triangle Base Value
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    // Calculate Area 
    const area = 0.5 * base * height;
    // Show Calculated Value
    setElementInnerText('triangle-area', area);
    addToCalculationEntry('Triangle', area);
}


function calculateRectangleArea(){
    // Get Rectangle Width Value
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    // Calculate Area of Rectangle
    const area = width * length;
    // Show the calculated Rectangle Area
    setElementInnerText('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('Parallelogram', area);
}

function calculateRhombusArea(){
    const d1 = getInputValue('diagonal-1');
    const d2 = getInputValue('diagonal-2');
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('perimeter');
    const apothem = getInputValue('apothem');
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area', area);
    addToCalculationEntry('Pentagon', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('first-radius');
    const minorRadius = getInputValue('second-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('Ellipse', area);
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

// Add to calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm" >Convert</button>`;
    calculationEntry.appendChild(p);

}