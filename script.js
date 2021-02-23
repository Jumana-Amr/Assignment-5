   function updateForm() {
     document.getElementById("id_inputs_area").hidden = true;
     document.getElementById("id_inputs_circumference").hidden = true;
     document.getElementById("id_inputs_both").hidden = true;
     document.getElementById("id_output_area").hidden = true;
     document.getElementById("id_output_circumference").hidden = true;
     
     let shape = document.getElementById("id_shapes") .value;
     switch (shape) {
       case "area":
       document.getElementById("id_inputs_area").hidden = false;
       break;
       case "circumference":
       document.getElementById("id_inputs_circumference").hidden = false;
       break;
       case "both":
       document.getElementById("id_inputs_both").hidden = false;
       break;
        }
    }
    
    function calculateAreacalculateCircumfrance() {
      let shape = document.getElementById("id_shapes").value;
      let area = 0;
      let circumference = 0
      let diameter = document.getElementById("id_diameter").value;
      switch (shape) {
        case "area":
        document.getElementById("id_output_area").hidden = false;
        area = Math.PI * 1/4 * diameter * diameter;
        document.getElementById("id_output_area").innerHTML = "Area = " + area;
        break;
        case "circumference":
        document.getElementById("id_output_circumference").hidden = false;
        circumference = Math.PI * diameter;
        document.getElementById("id_output_circumference").innerHTML = "Circumference = " + circumference;
        break;
        case "both":
        document.getElementById("id_output_circumference").hidden = false;
        document.getElementById("id_output_area").hidden = false;
        area = Math.PI * 1/4 * diameter * diameter;
        circumference = Math.PI * diameter;
        document.getElementById("id_output_circumference").innerHTML = "Circumference = " + circumference;
        document.getElementById("id_output_area").innerHTML = "Area = " + area;
        break;
      }
    }