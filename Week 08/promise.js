const promise = new Promise(function(resolve, reject){
    resolve(true);
    reject(false);
});

promise.then(function(){
    return res;
}).then(function(res){
    console.log(res)
}).catch(function(err){
    console.log(err)
})

const promise1 = new Promise(function(resolve, reject){
    reject(false);
    resolve(true);
});

promise1.then(function(){
    console.log(res)
}).catch(function(err){
    console.log(err)
    return {name: "Sam", kids: false}
}).then(function(res){
    console.log(res)
})