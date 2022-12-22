require('dotenv').config()
const fs = require("fs")
const isDEV = Number(process.env.isDEV)
const TOKEN: string = isDEV?process.env.TOKEN_DEV:process.env.TOKEN
const GROUP: number = Number(isDEV?process.env.GP_ID_DEV:process.env.GP_ID)
const HOST: string = (isDEV?process.env.HOST_DEV:process.env.HOST)

function getSettings(): settingInterface {
    return JSON.parse(fs.readFileSync("./settings.json", "utf-8"))
}
function updateSettings(settings_now: settingInterface) {
    fs.writeFileSync("./settings.json", JSON.stringify(settings_now, null, "\t"), "utf-8")
}

function getQuestion(): questionInterface {
    return JSON.parse(fs.readFileSync("./question.json", "utf-8"))
}
function updateQuestion(question: questionInterface) {
    fs.writeFileSync("./question.json", JSON.stringify(question, null, "\t"), "utf-8")
}

interface questionInterface {
    [index: string]: string
}

interface settingInterface {
    "mailing_list": {
        "block_user": Array<Number>,
        "post_forwards": boolean,
        "enabled": boolean
    }
}

module.exports = {
    TOKEN,
    GROUP,
    HOST,
    getSettings,
    updateSettings,
    isDEV,
    getQuestion,
    updateQuestion
}