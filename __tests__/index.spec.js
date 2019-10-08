/* global expect, beforeAll, get_stash_credentials, jest, afterAll, beforeEach, afterEach */
"use strict"

import { handler } from "../index.js"

describe(`Test the handler`, () => {

    test(`returns true`, () => {

        let response = handler()
        expect(response).toBe(true)
    })

})
