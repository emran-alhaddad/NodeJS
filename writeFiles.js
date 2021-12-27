const fs = require('fs');


fs.writeFile('./filesDir/data2.txt','I am Engineer ', () => {
console.log('File Created and Written Successfully');
});

fs.readFile('./filesDir/data.txt',(err,data) => {
if (err)
{
    console.log(err);
}
else
{
    fs.writeFile('./filesDir/data2.txt',data.toString(),() => {
        console.log('File Has been Copied Successfully');
    });
}
});