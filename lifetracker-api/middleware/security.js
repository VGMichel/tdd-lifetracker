const bcrypt = require("bcrypt")

const pw = "lifetrackerkey"

bcrypt.hash(pw, 6, (err, hashedPw) => {
    console.log(`Password is ${pw}`)
    console.log(`Password is ${hashedPw}`)
})