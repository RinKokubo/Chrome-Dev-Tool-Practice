function fetchData() {
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          document.getElementById('data').innerHTML = JSON.stringify(data, null, 2);
          document.getElementById('image').style.display = 'block';
      })
      .catch(error => console.error('Error:', error));
}

function changeColor() {
  const pTags = document.querySelectorAll('.paragraph');
  pTags.forEach(tag => {
      tag.style.color = tag.style.color == 'green' ? 'red' : 'green';
  });
}
