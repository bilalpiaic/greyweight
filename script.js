// script.js
document.getElementById("calculateButton").addEventListener("click", function () {
    // Get input values
    const epi = parseFloat(document.getElementById("epi").value);
    const ppi = parseFloat(document.getElementById("ppi").value);
    const width = parseFloat(document.getElementById("width").value);
    const length = parseFloat(document.getElementById("length").value);
    const warpCount = parseFloat(document.getElementById("warpCount").value);
    const weftCount = parseFloat(document.getElementById("weftCount").value);
  
    // Validate inputs
    if (isNaN(epi) || isNaN(ppi) || isNaN(width) || isNaN(length) || isNaN(warpCount) || isNaN(weftCount)) {
      alert("Please fill in all fields with valid numbers.");
      return;
    }
  
    // Constants
    const yardToMeter = 0.9144;
    const adjustmentFactor = 0.54;
  
    // Calculate warp and weft yarn weight
    const warpYarnWeight = (epi * width * length * yardToMeter) / warpCount * adjustmentFactor;
    const weftYarnWeight = (ppi * width * length * yardToMeter) / weftCount * adjustmentFactor;
  
    // Calculate total weight
    const totalWeightGrams = warpYarnWeight + weftYarnWeight;
    const totalWeightKg = totalWeightGrams / 1000;
  
    // Display result
    document.getElementById("weight").innerText = totalWeightKg.toFixed(2);
  });
  