const puppeteer = require('puppeteer');

async function asyncCall() {

    var currentdate = new Date(); 
    var datetime = "Last Sync-" + currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + "@"  
                + currentdate.getHours() + "-"  
                + currentdate.getMinutes() + "-" 
                + currentdate.getSeconds();

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.techseries.dev/');
  
    await page.screenshot({path: datetime+'.png'});
  
    await browser.close();
}

setInterval(()=>{
    try {
        asyncCall();
    } catch (error) {
        console.log(error)
    }
}, 15000);

