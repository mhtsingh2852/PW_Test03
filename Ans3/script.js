document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const dataContainer = document.getElementById('data');
  
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        loader.style.display = 'none';
        data.forEach(item => {
          const p = document.createElement('p');
          p.textContent = item.title;
          dataContainer.appendChild(p);
        });
      })
      .catch(error => {
        loader.style.display = 'none';
        console.error('Error:', error);
      });
  });
  