function calculateTriangleArea(){
    // Get Triangle Base Value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);

    // Get Triangle height Value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);

    // Calculate Area 
    const TriangleArea = 0.5 * baseValue * heightValue;

    // Show Calculated Value
    const calculatedTriangleArea = document.getElementById('triangle-area');
    calculatedTriangleArea.innerText = TriangleArea;
}

function calculateRectangleArea(){
    // Get Rectangle Width Value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const widthValue = parseFloat(widthValueText);

    // Get Rectangle Length Value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const lengthValue = parseFloat(lengthValueText);

    // Calculate Area of Rectangle
    const rectangleArea = widthValue * lengthValue;

    // Show the calculated Rectangle Area
    const calculatedRectangleArea = document.getElementById('rectangle-area');
    calculatedRectangleArea.innerText = rectangleArea;

}