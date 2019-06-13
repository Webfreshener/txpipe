/* ############################################################################
The MIT License (MIT)

Copyright (c) 2019 Van Schroeder
Copyright (c) 2019 Webfreshener, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

############################################################################ */
const {TxPipe} = require("txpipe");
describe.skip("Pipe Node Event Output Schema Test Suite", () => {
    let _txPipe;
    beforeEach(() => {
        _txPipe = new TxPipe(require("./pipe-node-event-output"));
    });

    it("should reject invalid values", (done) => {
        _txPipe.subscribe({
            next: (d) => {
                done(`should have errored. got this instead:\n${d}`);
            },
            error: () => {
                done();
            }
        });
        _txPipe.txWrite( {bad: "no good"});

    });

    it("should accept valid values", () => {
        _txPipe.subscribe({
            next: () => {
                done();
            },
            error: (e) => {
                done(e);
            }
        });
        // _txPipe.txWrite({events: ["test"], subscribe: {}});
        _txPipe.txWrite({ subscribe: () => {}, events: () => {}});
    });
});
