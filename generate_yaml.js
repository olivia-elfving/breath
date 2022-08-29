var fs = require('fs')
var templateFile = './template_swagger.yaml';
var generatedFile = './swagger.yaml'

const args = process.argv;
const api_url = args[2] === 'env=dev' ? 'http://127.0.0.1:4010' : 'https://api.example.com';

fs.readFile(templateFile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/{API_URL}/g, api_url);

    fs.writeFile(generatedFile, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});