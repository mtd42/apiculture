import * as api from '../../bin/controller';
import * as services from './services';

const allExamples = (app) => {
    app.route('/examples').get(
        services.examples,
        api.controller,
    );
};

const examplesRoutes = (app) => {
    allExamples(app);
};

export {
    examplesRoutes,
};
