# 1. DOM-Array
    1. This Project is Leaning DOM-Array-Methods
    2. Using 


# 2. Function

## 1. Get Random Money and User-Name

```Javascript
async function getRandomUser(){
    const res =  await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    console.log(newUser)
}
getRandomUser();
```