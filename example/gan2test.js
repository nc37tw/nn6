const nn6 = require('../lib/nn6')

// const gan2 = new nn6.gan.Gan2([/*[0, 0], */ [0.1, 0.1], [0.2, 0.2], [0.3, 0.3], [0.4, 0.4], [0.5, 0.5], [0.6, 0.6], [0.7, 0.7], [0.8, 0.8], [0.9, 0.9] /*, [1, 1]*/])
const gan2 = new nn6.gan.Gan2([[0, 1], [0.1, 0.9], [0.2, 0.8], [0.3, 0.7], [0.4, 0.6], [0.5, 0.5], [0.6, 0.4], [0.7, 0.3], [0.8, 0.2], [0.9, 0.1] , [1, 0] ])
gan2.learn(1000)
