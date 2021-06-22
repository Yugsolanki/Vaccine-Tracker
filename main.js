var submit = document.getElementById('submit');

window.onload = (event) => {
  submit.click();
};

submit.addEventListener('click', ()=> {
  while (sectionElement.firstChild) {
    sectionElement.removeChild(sectionElement.lastChild);
  }
  localStorage.clear()
  main()
})

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;

  if (!date) {
    date = today
  }
}
getDate();

function main() {

var sessionsCount = {};
var sessions = {};


fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${locationNode.value}&date=${date}`)
  .then(response => {return response.json()})
  .then(res => {
    sessionsCount = res.sessions;
  })
  setTimeout(()=>{
    if (sessionsCount.length>0) {
      sessions = sessionsCount
    } else {
      alert('Sorry no vaccine slots are available on this pincode, age limit and date.')
    }
  }, 1000)
  
//sessions[i]

setTimeout(()=>{
  
  for (var i = 0; i < sessions.length; i++) {
    let {name, address, min_age_limit: age, fee, available_capacity_dose1: dose1, available_capacity_dose2: dose2, pincode} = sessions[i];
    
    if (age==ageSelectNode.value && (dose1>0 || dose2>0)) {
      
      class data {
        constructor(name, address, age, fee, dose1, dose2, pincode) {
          
          let cloneDiv = containerNode.cloneNode(true)
          
          sectionElement.appendChild(cloneDiv);
          containerNode.style.display = 'grid'
          
          this.container = containerNode;
          
          this.container.querySelector('.name').innerText = name;
          this.container.querySelector('.address').innerText = address+' '+pincode;
          this.container.querySelector('.age').innerText = `Age: ${ageSelectNode.value}`;
          this.container.querySelector('.fee').innerText = `Fee: ${fee}`;
          this.container.querySelector('.dose1').innerText = `Dose 1: ${dose1}`;
          this.container.querySelector('.dose2').innerText = `Dose 2: ${dose2}`;
        }
      }
      
      var node = new data(name, address, age, fee, dose1, dose2, pincode)
    }
  }
}, 1000)

}

