const dictionary = new Map();
dictionary.set("question", "How are you");
dictionary.set(1,"js");
dictionary.set(2,"react");
dictionary.set(3,"vue");
dictionary.set(true, "Correct");

console.log(dictionary.get(1));
confirm.log(dictionary.size);

if(dictionary.has(3)){
    dictionary.delete(3);
}

dictionary.forEach((value, key) => console.log(`${key} ${value}`));

for(let [key, value] of dictionary.entries()){
    if(typeof(key) === 'number'){
        console.log(`${key} : ${value}`);
    }
}