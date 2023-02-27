localStorage.setItem('FirstName','vishwajeet');
localStorage.setItem('Location','delhi');

// console.log(localStorage.getItem('Location'));
localStorage.removeItem('Location');
// console.log((2===3) && (4>0) ||('1'!==1));
sessionStorage.setItem('FirstName','vishwajeet');
sessionStorage.setItem('Location','delhi');

console.log(sessionStorage.getItem('Location'));
sessionStorage.removeItem('Location');