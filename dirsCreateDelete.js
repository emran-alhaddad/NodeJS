const fs = require('fs');

if(!fs.existsSync('./newDirectory'))
{
fs.mkdir('./newDirectory', (err) => {
    if (err)
    {
        console.log(err);
    }
    console.log('Directory Created Successfully');
});
}
else{

    fs.rmdir('./newDirectory', (err) => {
        if (err)
        {
            console.log(err);
        }
        console.log('Directory Removed Successfully');
    });
}