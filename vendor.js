let locationNode, /*dateNode ,*/ sectionElement, containerNode, nameNode, addressNode, ageNode, feeNode, dose1Node, dose2Node, vaccineNode, date, submit, errorNode;

function vendor() {
  submit = document.getElementById('submit');
  
  locationNode = document.querySelector('#location');
  
  ageSelectNode = document.querySelector('#age');
  
  //dateNode = document.querySelector('#date').value;
  
  sectionElement = document.querySelector("section");
  
  containerNode = document.querySelector('.mainbox');
  
  nameNode = document.querySelector('.name');
  
  addressNode = document.querySelector('.address');
  
  ageNode = document.querySelector('.age');
  
  feeNode = document.querySelector('.fee');
  
  dose1Node = document.querySelector('.dose1');
  
  dose2Node = document.querySelector('.dose2');
  
  vaccineNode = document.querySelector('.vaccine')
  
  errorNode = document.querySelector('.error')

} 
vendor();

document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
});

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

function errorMsg(msg) {
  errorNode.textContent = msg;
  errorNode.style.display = 'block'
}

/*
State :- 21
District :- 395

Vikhroli 400079
Ghatkopar West 400086
Ghatkopar East 400077
Pantnagar 400075
*/