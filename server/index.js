import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from '../src/client/Routes';

import renderer from '../src/helpers/renderer';
import createStore from '../src/helpers/createStore';
import config from '../config/config.js';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
	proxyReqOptDecorator(opts){
		opts.headers['x-forwarded-host'] = 'localhost:3000';
		return opts;
	}
}));
app.use(express.static('public'));


app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});


// Set  port
console.log('PROCESS_PORT', process.env.PORT);
app.set('port', process.env.PORT || config.serverPort);

app.listen(app.get('port'), () => {
	console.log('Listen on port '+app.get('port'));
});
