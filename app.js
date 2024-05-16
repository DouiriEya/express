const express = require('express'); 
const Myapp=express(); 
Myapp.listen(3000); 
function verifyTime(req, res, next) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // numbers ml 0 lel 6 
    const currentHour = currentDate.getHours(); // bch taatik ra9m ln 0 lel 23 

  // bch ntestiw l condition 
    const isWeekday = currentDay >= 1 && currentDay <= 5; // kima 9olna ml thnin lel jem3a yaani ml 1 lel 5 
    const isWorkingHours = currentHour >= 9 && currentHour < 17; // kima 9olna ml 9 lel 17 h 

    // Iken weekend wla hors l workinghours n9olou sorry
    if (!isWeekday || !isWorkingHours) {
        return res.status(403).send( "arja3 8odoi sakarna 404 Page Not Found !  " );
        
    }
    next();
}
Myapp.use(verifyTime);

Myapp.get('/',(req,res)=>{
    res.sendFile('HomePage.html',{root:__dirname});
}) ; 
Myapp.get('/services',(req,res)=>{
    res.sendFile('Services.html',{root:__dirname});
}) ; 
Myapp.get('/contact',(req,res)=>{
    res.sendFile('contact.html',{root:__dirname});
}) ; 
Myapp.get('/founder',(req,res)=>{
    res.sendFile('founder.html',{root:__dirname});
}) ; 
