const fs = require('fs').promises


const readFile = async (path) => {
    try {
        const data = await fs.readFile(path,'utf-8')
        return [JSON.parse(data)]
    }
    catch(err) {
        console.error(`Erro: ${err.message}`)
        return null
    }
    
} 


module.exports = {
    readFile
}

