const statuss=document.querySelector('#card h5');
const add_button=document.querySelector('#bt1');
const remove=document.querySelector('#bt2');

add_button.addEventListener('click',function(){
    statuss.innerHTML="ADDED";
    add_button.style.backgroundColor="purple";
    remove.style.backgroundColor="green";

});
remove.addEventListener('click',function(){
    statuss.innerHTML="Removed";
    add_button.style.backgroundColor="red";
    remove.style.backgroundColor="red";
});
console.log(statuss);
console.log(add_button);
console.log(remove);