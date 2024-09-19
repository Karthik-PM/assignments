// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

async function Timer1() {
    setInterval(()=>{
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        console.log(hours + ":" + minutes + ":" + seconds); 
    }, 1000);
}

async function Timer2() { 
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;
    if(hours < 12) time = time + " AM";
    else time = toString(parseInt(hours) / 12) + ":" + minutes + ":" + seconds + "\n";

    console.log(time);
    setTimeout(Timer2, 1000);
    
}
Timer1();
Timer2();
