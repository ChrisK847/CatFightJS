alert(fetch('./Characters.txt')
.then(response => {
   return response.json();
})
.then(data => console.log(data)));