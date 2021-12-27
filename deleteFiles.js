const fs = require('fs');

if (fs.existsSync('./filesDir/deleteme.txt'))
{
    fs.unlink('./filesDir/deleteme.txt', (err) => {

        if (err) {
            console.log(err);
        }
        console.log('File Deleted Successfully');
    });
}
else
{
    fs.writeFile('./filesDir/deleteme.txt', "" , (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File Created ');
    })
}