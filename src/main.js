module['exports'] = function myService (hook) {
    var faker = require('faker');
    var params = hook.params;
    
    var parts = params.property.split('.');
    faker.locale = hook.params.locale;

    var result = faker[parts[0]][parts[1]]();

    hook.res.json(result);
};
