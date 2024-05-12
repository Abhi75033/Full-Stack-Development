const bcrypt = require('bcryptjs')

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const compare = await bcrypt.compare(password, hash)
    console.log(hash)
    console.log('123456', compare);
    }

hashPassword('123456')

