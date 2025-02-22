function calculateWatchTime(arr) {
    // Check if all elements are numbers
    if (!arr.every(item => typeof item === 'number')) {
        return "Invalid";
    }
    
    // Calculate total seconds
    let totalSeconds = arr.reduce((sum, curr) => sum + curr, 0);
    
    // Convert to hours, minutes, and seconds
    let hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minute = Math.floor(totalSeconds / 60);
    let second = totalSeconds % 60;
    
    return { hour, minute, second };
}

// Example Test Cases
console.log(calculateWatchTime([100, 99, 119, 300])); // { hour: 0, minute: 10, second: 18 }
console.log(calculateWatchTime([1000, 2000, 725])); // { hour: 1, minute: 2, second: 5 }
console.log(calculateWatchTime([100, 3800])); // { hour: 1, minute: 5, second: 0 }
console.log(calculateWatchTime([])); // { hour: 0, minute: 0, second: 0 }
console.log(calculateWatchTime([5600])); // { hour: 1, minute: 33, second: 20 }
console.log(calculateWatchTime([100, 3800, "90"])); // "Invalid"
