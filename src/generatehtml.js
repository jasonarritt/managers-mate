
const generateHTML = (allEngineers, allInterns, allManagers) => (
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Mate</title>
</head>
<body>
    <h1>Team Mate</h1>

    <h3>Managers</h3>
    <ul>
        ${allManagers.map(manager => (`<li>${manager.teammateName}</li>\n`))}
    </ul>
    
    <h3>Engineers</h3>
    <ul>
        ${allEngineers.map(engineer => (`<li>${engineer.teammateName}</li>\n`))}
    </ul>

    <h3>Interns</h3>
    <ul>
        ${allInterns.map(intern => (`<li>${intern.teammateName}</li>\n`))}
    </ul>

</body>
</html>

    `
)

module.exports = generateHTML;