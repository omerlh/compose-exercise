const appProvider = require('./app');

async function main()
{
    const app = await appProvider();
    app.listen(3000, () => {
        console.log('Example app listening on port 5678!');
    }); 
}

main();

   