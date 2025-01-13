function getMonthName(dateString) {
    const months = [
        "January", "February", "March", "April", "May", 
        "June", "July", "August", "September", "October", 
        "November", "December"
    ];
    const monthIndex = parseInt(dateString.split("-")[1], 10) - 1;
    return months[monthIndex];
}

console.log(getMonthName("2025-01-13")); 
