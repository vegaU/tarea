

const fs = require('fs');

let listadoPorhacer = [];

const guardarBD = () => {

    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err)=> {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {
    listadoPorhacer = require('../db/data.json');
  
}

const crear = (descripcion) => {
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push( porHacer);

        guardarBD();
        return porHacer;
}

module.exports = {
    crear
}