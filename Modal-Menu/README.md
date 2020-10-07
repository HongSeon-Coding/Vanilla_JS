# 1. Modal-Menu Project
    1. Making Sidebar And Modal-login
    2. Need a Hard CSS

# 2. Product
[Main]

<img src="images/modal_1.png" alt="modal_1" width="500"/>

[Menu]

<img src="images/modal_2.png" alt="modal_2" width="500"/>

[Modal]

<img src="images/modal_3.png" alt="modal_3" width="500"/>

# 3. Functions

```Javascript
// Toggle nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

//show modal
open.addEventListener('click', ()=> {
    modal.classList.add('show-modal');
})

//Hide modal
close.addEventListener('click', ()=>{
    modal.classList.remove('show-modal');
})
//Hide modal outside window
window.addEventListener('click', (e)=> {
    e.target == modal ? modal.classList.remove('show-modal') : false
})
```