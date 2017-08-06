'use strict';

import configValues from './config';

export default () => `mongodb://${configValues.uname}:${configValues.pwd}@${configValues.database}`;
