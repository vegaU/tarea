const argv = require('yargs')
            .command('crear','Crear por hacer',{
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de tarea'
                }
            })
            .command('actualizar','Actualiza tarea completado', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de tarea'
              },
              completado: {
                demand: true,
                alias: 'd',
                desc: 'Marca como completado la tarea'
              }
            })
            .help()
            .argv;

            module.exports = {
                argv
            }