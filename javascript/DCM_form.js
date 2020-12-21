const countEl = document.getElementById('counter');

updateVisitCount()

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/deerhoundgenetic/deerhoundnumber/?amount=-850')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}
