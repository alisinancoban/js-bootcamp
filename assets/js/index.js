/* const first = () => {
    console.log("Hey there");
    second();
    console.log("the end");
}

const second = () => {
    setTimeout(() => {
        console.log("Async there");
    }, 2000);
}

first(); */

/* function getRecipe(){
    setTimeout(() => {
        const recepeID = [53,46,12,467];
        console.log(recepeID);

        setTimeout((id) => {
            console.log(id);
            const recepi = {title: "Fresh tomato",
                            publisher:"jonas"};
            console.log(`${id}: ${recepi.title}`);

            setTimeout((publisher) => {
                const recepi = {title: "pizza",
                            publisher:"jonas"};
                console.log(recepi);
            }, 1500, recepi.publisher);
        }, 1500, recepeID[2]);
    },2000)
}   
getRecipe(); */

const getIDs = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve([53,46,12,467]);
        //reject("error!!!");
    }, 1500);
});

console.log(getIDs);

const getRecipe = function(recID){
    return new Promise(function(resolve, reject){
        setTimeout(function(id){
            const recipe = {title:"fresh tomato", publisher: "Jonas"};
            resolve(`${id}: ${recipe.title}`); 
        }, 1500, recID);
        
    }); 
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe2 = {title: "Italian Pizza", publisher: "Sinan"};
            resolve(recipe2);
        }, 1500, publisher);
    });
}

getIDs
.then(function(IDs){
    console.log(IDs);
    return getRecipe(IDs[2])
})
.then(recipe => {
    console.log(recipe);
    return getRelated("");
})
.then(recipe => {
    console.log(recipe.publisher);
})
.catch(error => {
    console.log("error" + " " + error);
});