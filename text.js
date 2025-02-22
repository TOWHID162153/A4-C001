// Todays Task : Programming Hero

function todaysTask(totalItems){
    const Module = "Module 22_7- Simple introduction JS Date & Time";
    console.log(Module);
    // Module info
    if(typeof totalItems === "number"){
        let textfile = 1;
        let quiz = 1;
        let video = totalItems - (textfile + quiz);
        console.log("Today I have to watch total:",video )
        // // Total Watchable Video
        let AverageVd = 12; // 12 minutes
        let minute = video * AverageVd;
        let totalTime = minute/60;
        console.log("Total time :", totalTime);
    }
    else if(!typeof totalItems === "number"){
        console.log("Abe BOKA CONDRO Input vul disos")
    }
    else{
        console.log("Latthi na khaite caile callu input thik kor")
    }
    
}

todaysTask(10)