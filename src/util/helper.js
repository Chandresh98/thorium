function datePrint() {
    const d = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    console.log("current date " + d.getDate())
    console.log("current month " + monthNames[d.getMonth()])
    console.log("‘Thorium, W3D1, the topic for today is Nodejs module system’")
}

module.exports.datePrint = datePrint