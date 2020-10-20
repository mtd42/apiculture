import * as models from './models.js';
import * as api from '../../bin/library.js';

const examples = async (req, res, next) => {
    try {
        const result = await models.findAllExamples();
        req.state = 'ok';
        req.resource = result;
    } catch (err) {
        api.handle_errors(req, err);
    }
    next();
};

export {
    examples,
};
