function addText() {
    const inputBox = document.getElementById('inputBox');
    const inputValue = inputBox.value;
    const output = document.getElementById('output');
    
    if (inputValue.trim() !== '') {
      const p = document.createElement('p');
      p.textContent = inputValue;
      output.appendChild(p);
      inputBox.value = '';
    }
  }
  