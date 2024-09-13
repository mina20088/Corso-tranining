const { watch } = require('rollup');

const FiveServer = require('five-server').default


const server = new FiveServer()

const options = {
    port: 5000,
    ignore : ['sass/**/*', 'js/**/*'],
    open :false
};

const start = server.start(options);
