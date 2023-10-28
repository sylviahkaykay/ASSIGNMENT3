console.log("My favorite Programming Languages")
const programmingLanguages = ['C++', 'Python', 'C', 'JavaScript', 'Ruby', 'Java'];

const ul = document.querySelector('ul');

for(let i=0; i<6;i++){
    const li = document.createElement('li');
    li.textContent = programmingLanguages[i];
    ul.appendChild(li);
  }
