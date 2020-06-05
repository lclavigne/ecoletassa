const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
db.serialize(() => {
    // Criar a tabela se não existir
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // Inserir dados
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?, ?, ?, ?, ?, ?, ?);
    // `
    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log('Cadastrado com sucesso!')
    //     console.log(this)
    // }

    // const values = [
    //     'Papersider',
    //     'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    //     'Guilherme Gemballa, Jardim América',
    //     'Nº 260',
    //     'Santa Catarina',
    //     'Rio do Sul',
    //     'Papéis e Papelão'
    // ]
    // db.run(query, values, afterInsertData)

    // // Consultar dados
    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log(rows)
    // })

    // Deletar dados
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log('Registro deletado com sucesso!')
    // })
})