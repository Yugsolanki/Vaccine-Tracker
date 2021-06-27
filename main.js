/* 
submit.addEventListener('click', ()=> {
  
})
*/
locationNode.addEventListener('change', start)
ageNode.addEventListener('change', start)


function start() {
  while (sectionElement.firstChild) {
    sectionElement.removeChild(sectionElement.lastChild);
  }
  localStorage.clear()
  main()
}

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
      errorNode.classList.remove('is-info')
        errorNode.classList.add('is-danger');
      errorMsg('No vaccination slots available.');
    }
  }, 1000)
  
  setTimeout(()=>{
    
    for (var i = 0; i < sessions.length; i++) {
      
      let {name, address, min_age_limit: age, fee, available_capacity_dose1: dose1, available_capacity_dose2: dose2, pincode, vaccine} = sessions[i];
      
      class data {
          constructor(name, address, pincode, age, fee, dose1, dose2, vaccine) {
            
            this.container = containerNode;
            
            this.container.querySelector('.name').innerText = name;
            this.container.querySelector('.address').innerText = address+' '+pincode;
            this.container.querySelector('.age').innerText = `Age: ${age}`;
            this.container.querySelector('.fee').innerText = `Fee: ${fee}`;
            this.container.querySelector('.dose1').innerText = `Dose 1: ${dose1}`;
            this.container.querySelector('.dose2').innerText = `Dose 2: ${dose2}`;
            this.container.querySelector('.vaccine').innerText = `${vaccine}`;
            
            let cloneDiv = containerNode.cloneNode(true)
            
            sectionElement.appendChild(cloneDiv);
            containerNode.style.display = 'grid'
            
          }//constructor
        }//class
      
      if (age==ageSelectNode.value && (dose1>0 || dose2>0)) {
        errorNode.style.display = 'none'
        let print = new data(name, address, pincode, age, fee, dose1, dose2, vaccine);
        
      } else {
        errorNode.classList.remove('is-danger')
        errorNode.classList.add('is-link');
        errorMsg('No more vaccination slots available. On the given pincode and age limit.')
      }
    }//for
  }, 1000)//setTimeout
}//main