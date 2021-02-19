import 'reflect-metadata'
import { createServer, RequestListener } from 'http'

const requestListener: RequestListener = (req, res) => {
	res.writeHead(200)
	res.end('Hello, World!')
}

const httpServer = createServer(requestListener)

httpServer.listen(3000, () =>
	console.log('Server started at http://localhost:3000'),
)
