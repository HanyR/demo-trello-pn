//var newman = require('newman'); // require Newman in your project
import newman from 'newman';

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/Trello Dev Env.postman_collection.json'),
    reporters: 'junit' || 'progress'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});