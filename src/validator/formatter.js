function trimName() {
    const a = '   chandresh   '
    console.log(a.trim())
}

function changeCase(){
    const b = 'CHaNdResH ShaKya'
    console.log("change to lower case " +b.toLowerCase())
    console.log("change to upper case " +b.toUpperCase())
}

module.exports.trimName = trimName
module.exports.changeCase = changeCase