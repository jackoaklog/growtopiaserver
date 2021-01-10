const http = require('http')
const config = require('../../config.json')

const info = (req, res) => {
  const response = `
server|${config.server.ip}
port|${config.server.port}
type|1
${(config.maintenance.now ? '#' : '')}maint|${config.maintenance.message}

beta_server|${config.server.beta.ip}
beta_port|${config.server.beta.port}

beta_type|1
meta|${config.meta}
RTENDMARKERBS1001`

  res.writeHead(200)
  res.end(response)
}

const serv = http.createServer(info)
serv.listen(80)