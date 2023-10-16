document.addEventListener('DOMContentLoaded', () => {
    addingEventListener()
})

function addingEventListener() {
input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});   
}

let input;
