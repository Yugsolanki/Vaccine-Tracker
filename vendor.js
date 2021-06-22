var locationNode, /*dateNode ,*/ sectionElement, containerNode, nameNode, addressNode, ageNode, feeNode, dose1Node, dose2Node, date;

function vendor() {
  
locationNode = document.querySelector('#location')

ageSelectNode = document.querySelector('#age')

//dateNode = document.querySelector('#date').value;

sectionElement = document.querySelector("section");

containerNode = document.querySelector('.mainbox');

nameNode = document.querySelector('.name')

addressNode = document.querySelector('.address')

ageNode = document.querySelector('.age')

feeNode = document.querySelector('.fee')

dose1Node = document.querySelector('.dose1')

dose2Node = document.querySelector('.dose2')

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

/*
State :- 21
District :- 395

Vikhroli 400079
Ghatkopar West 400086
Ghatkopar East 400077
Pantnagar 400075
*/