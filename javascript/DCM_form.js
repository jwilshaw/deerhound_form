const countEl = document.getElementById('counter');

updateVisitCount()

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/deerhoundgenetics.com/deerhoundcount/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}
