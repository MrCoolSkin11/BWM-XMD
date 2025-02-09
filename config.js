const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUzY6jRhh8lVVf7Vn+jbE0UjD2GGxjY+Nfoj000ECbX0NjG4982lUU7SXvkEuOUbQvM36OvEDE/GjmkN1Mbq2mqa6u+qruQZLiAo1QBTr3IMvxARJUL0mVIdAB3dLzUA6awIUEgg44Gg6dWMeFmo7oUwQ1lUhL7lCRNoVN7tAW+xSLcKNt9Wj5FlyaICvtCDs/AKS3vAKNIyXnVb9Bz3R2RI6OfrAgvzHaKaVOKf90NvHWC+hbcKkRIc5x4vezAMUoh9EIVQbE+fvom5qzGorBuGwcT8c7p9Uo24lA26Le1STqbM69Pb+xzLMYbmbvo6+mvWWvmHLaMmycjhqrjSptW61OE/lw3hqhIVhqyi/9ybpaPtEvsJ8gV3NRQjCp3q07K1uJ42TeAt815DEOh1ujyFdjVQlEua9O2ARq0kqswiXnvJP4biqzR5ptqcVhm0ZogVWpx3qxPnW0ZbazkljerQileCf6LXEjf5mV8P/ofpQnEO+zQ7+MXHua6WNBHwvGuTU9nSuay7oqZhjKcgYWq7+PflCsZ7Rxt9iseWd4ELbxjN7IcM302bA92S8n6pKEwprp5av+K31IyvxHLP2NEMeO6KXYSu4Me3zaFXtmrgfFVtbHRtvvqWaLOStnncwUCW0FnxoqSUQRrdvNFro0RN45tCnJEpWSV+7yUsdBGMi3jy8KUaW5oMNcmiBHPi5IDglOk3qPFdgmgO7BRE6OyKO8QJ+ZwkGZG4yws+LBet0YLQaNnHZmNLUrpriQ9inDeeK6yGe3oAmyPHVQUSBXxQVJ80pHRQF9VIDOz5+aIEEn8mRcfR3HNIGH84IskzKLUui+uPryETpOWibErBJHqRcoBx36dRsRghO/qHUsE5g7AT4gJYCkAB0PRgW6NIGLDthBNR4YZ3xgrshwLo20zTZHTtTntseacpAmT0cc1EYCL8Eb6AqtG57hmBubsfkbkWY4yYHQ5ngRNAF+zkz9z3ctvJMUhp1aIdRUl5/oaGidW8uBkmL4FOgn7VGOXNAheYmawIZOWGaLNETJD3BD1xuvFIM5z0M4sO3dPmkFmx2OxEb4BvfJU9C5f+0pJXVrPG7REteC2QZNED+OIK5fzvKc1KZbPMOKfIdhfio+HmshYZZ9TBABTZDA+jR4+OP65eHb9evDnx+un6+/Xr98ePh2/Xz9ev3l779+/439yNcUnv2pwV1EII4K0AGKbo9a1FHtGz01FenBQJ75suLL4NXPl2A8DR7stbOBjLf8vlr28pXbiNjcdN22XU6Fs0/EBl0wibll7cS//ReQumOZcLxJCzdYopzTu43oTpvHgts2pt25mp3EdbArnF1emRI1P8m7YNbr7jy3wkhT4uFCW8+DYHTiW/aodExsOmdneG736hS9zNXby8RFcFpN9EF34SlGTCk+u7PSRjxpNY7qdFJuNK19h7uLYYNOT5t57I4Fpt9D89lYjDhjuZVDdjQ00NBktYmfpvAkcSPoP0f2sTKi56rGj2G6f55CD6PH5nv25z99fA0EfWm+wXju0u8MXXftU6O5r8XTURHJLWbjZe6eTjbeQNyVDj9GFBlPLDqexAIPLpdPTZBFkHhpHoMOKGIbgiaIYEHk10AvcIwKAuMMdBiRkxiWabXYyz9yFcrIBggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

