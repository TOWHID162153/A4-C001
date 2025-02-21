/*function signature/sample */
function  isBestFriend( f1 , f2 ) {
    if(typeof f1 && f2 ==="object" && f1 && f2 ==="object" && f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
        return true;
    }
    else if(typeof f1 && f2!=="object"){
        return "Invalid";
    }
    else{
        return false;
    }
}

isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 },
    { name: "kashem", roll: 2, bestFriend: 1 }
    );

