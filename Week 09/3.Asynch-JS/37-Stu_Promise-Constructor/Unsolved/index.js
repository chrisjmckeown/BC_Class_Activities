// function waitFor(seconds, cb) {
//   if (isNaN(seconds) || seconds < 1) {
//     return cb(Error("Parameter 'seconds' must be a positive number!"));
//   }
//   setTimeout(function() {
//     cb(null, "Success!");
//   }, seconds * 1000);
// }


// waitFor(2, function(err, msg) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(msg);
// })
function waitFor(seconds) {
  return new Promise(function (resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      return reject("Parameter 'seconds' must be a positive number!");
    }

    setTimeout(function () {
      resolve("Success!");
    }, seconds * 1000);
  });
}


// waitFor(2)
//   .then(function (msg) {
//     console.log(msg); // msg is printed since seconds is more than 0
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
waitFor(-5)
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log(err); // error is printed since 'seconds' is less than 1
  });