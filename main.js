document.getElementById("location").onchange = function(){
  hello()
  whole()
}

function whole() {
  
var sessions = {};

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;

if (!dateNode) {
  dateNode = today
}

fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${locationNode}&date=${dateNode}`)
  .then(response => {return response.json()})
  .then(res => {
    sessions = res.sessions;
  })
  
//sessions[i]

setTimeout(()=>{
  for (var i = 0; i < sessions.length; i++) {
    
    let {name, address, min_age_limit: age, fee, available_capacity_dose1: dose1, available_capacity_dose2: dose2} = sessions[i];
    
    if (age==ageSelectNode && (dose1>0 || dose2>0)) {
      
      class data {
        constructor(name, address, age, fee, dose1, dose2) {
          let cloneDiv = containerNode.cloneNode(true)
          containerNode.after(cloneDiv);
          containerNode.style.display = 'grid'
          
          this.container = containerNode;
          
          this.container.querySelector('.name').innerText = name;
          this.container.querySelector('.address').innerText = address;
          this.container.querySelector('.age').innerText = `Age: ${age}`;
          this.container.querySelector('.fee').innerText = `Fee: ${fee}`;
          this.container.querySelector('.dose1').innerText = `Dose 1: ${dose1}`;
          this.container.querySelector('.dose2').innerText = `Dose 2: ${dose2}`;
        }
      }

      console.log(sessions[i]);
      var node = new data(name, address, age, fee, dose1, dose2)
    }
  }
}, 1000)

} 