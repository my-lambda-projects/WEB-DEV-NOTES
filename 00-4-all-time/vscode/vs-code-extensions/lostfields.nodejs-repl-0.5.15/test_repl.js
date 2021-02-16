import * as url from 'url'
import * as uuid from 'uuid'
import { v4 } from 'uuid'

import { test } from './test.js'

url.parse('redis://:passwd@host')

uuid.v1()
v4()

test()

