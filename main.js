const stream = require('getstream');
const client = stream.connect('hsbfpcyf6354', 'bu9d4a487hsvte5qt365m4ybpfsjr37yv2syc6rmu8x6p9z9gb82bcbfvx7ngmmw', '68720');

const user1 = client.feed('user', '1');

// user1.addActivity({
//     actor: '1',
//     verb: 'add',
//     object: 'picture:10',
//     foreign_id: 'picture:10',
//     message: `Beautiful bird!`
//     }).then(
//     null,
//     function(err) {
//         console.log('error in adding activity', err);
//     }
// );


user1.get({ limit: 100 }).then(function(feeds) {
    
    let count = 0;
    feeds.results.forEach(element => {
        count++;
    });

    console.log('lenght', count);
    console.log('next', feeds.next);
    console.log('time', feeds.duration);
},function(err) {
    console.log('error in getting feed', err);
});
