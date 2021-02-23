function updateForm () {
  document.getElementById('id-inputs-area').hidden = true
  document.getElementById('id-inputs-circumference').hidden = true
  document.getElementById('id-inputs-both').hidden = true
  document.getElementById('id-output-area').hidden = true
  document.getElementById('id-output-circumference').hidden = true
  let const = document.getElementById('id-shapes').value
  switch (shape) {
    case "area":
      document.getElementById('id-inputs-area').hidden = false
    break
    case "circumference":
      document.getElementById('id-inputs-circumference').hidden = false
    break
    case "both":
      document.getElementById('id-inputs-both').hidden = false
    break
  }
}  
function calculateAreacalculateCircumfrance () {
  let shape = document.getElementById('id-shapes').value
  let area = 0
  let circumference = 0
  let diameter = document.getElementById('id-diameter').value
  switch (shape) {
    case "area":
      document.getElementById('id-output-area').hidden = false
      area = Math.PI * 1/4 * diameter * diameter
      document.getElementById('id-output-area').innerHTML = "Area = " + area
      break
    case "circumference":
        document.getElementById('id-output-circumference').hidden = false
        circumference = Math.PI * diameter        document.getElementById('id-output-circumference').innerHTML = "Circumference = " + circumference
        break
        case "both":
        document.getElementById('id-output-circumference').hidden = false
        document.getElementById('id-output-area').hidden = false
        area = Math.PI * 1/4 * diameter * diameter
        circumference = Math.PI * diameter
        document.getElementById('id-output-circumference').innerHTML = "Circumference = " + circumference
        document.getElementById('id-output-area').innerHTML = "Area = " + area
        break
  }
}
