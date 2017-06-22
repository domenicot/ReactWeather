// function getTempCallBack (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallBack('Philadelphia', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         resolve(79);
//         reject('City Not Found');
//     });
// }

// getTempPromise('Philadelphia').then

function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number' ) {
            resolve(a+b);
        } else {
            reject ('a & b need to be numbers');
        }
    });
}

addPromise(2, 3).then(function (sum) {
    console.log('success', sum);
}, function (err) {
    console.log('error, err');
});

addPromise('andrew', 9).then(function (sum) {
    console.log('this should not show up');
}, function (err) {
    console.log('this should show up', err);
});
