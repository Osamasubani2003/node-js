const express = require('express');
const app = express();

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return parseInt(n) * factorial(n - 1);
}
function coumulitiveSum(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 0 ) {
        return 0;
    }
    return parseInt(n) + coumulitiveSum(n - 1);
}
function multiply(n) {
    const tabel = [];
    for(var i=0;i<=10;i++){
        tabel[i]=i+"×"+n+"="+parseInt(i*n);
    }
    return tabel;
}
function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    return reverseArray.join(""); 
}
app.get('/', function(req, res) {
    res.send("start server")
});
app.get('/fibonacci/:n', function(req, res) {
    var result=fibonacci(req.params.n)
    res.json("fibonacci "+req.params.n+":="+result);
});
app.get('/factorial/:n', function(req, res) {
    var result=factorial(req.params.n)
    res.json("factorial "+req.params.n+":="+result);
});
app.get('/coumulitiveSum/:n', function(req, res) {
    var result=coumulitiveSum(req.params.n)
    res.json("coumulitiveSum "+req.params.n+":="+result);
});
app.get('/multiply/:n', function(req, res) {
    const result=multiply(req.params.n)
    res.json(result);
});
app.get('/reverseString/:n', function(req, res) {
    const result=reverseString(req.params.n)
    res.json(result);
})
var server= app.listen(7000, function()
{
    var host = server.address().address   
    var port = server.address().port 
})