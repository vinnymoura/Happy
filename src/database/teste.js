const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js');


Database.then(async function(db) {

    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos ",
        about: "Presta assitência a criança de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: 51982618807,
        images: [
            "https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visita das 8h até 18h",
        open_on_weekends: "0"
    })

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    // consultar somente 1 orphanato, pelo id
    //  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //   console.log(orphanage)


    // deletar dados da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))

});