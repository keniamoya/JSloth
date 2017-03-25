////////////////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)                                                                  //
//                                                                                        //
// Copyright (C) 2016  Chriss Mejía - me@chrissmejia.com - chrissmejia.com                //
//                                                                                        //
// Permission is hereby granted, free of charge, to any person obtaining a copy           //
// of this software and associated documentation files (the "Software"), to deal          //
// in the Software without restriction, including without limitation the rights           //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell              //
// copies of the Software, and to permit persons to whom the Software is                  //
// furnished to do so, subject to the following conditions:                               //
//                                                                                        //
// The above copyright notice and this permission notice shall be included in all         //
// copies or substantial portions of the Software.                                        //
//                                                                                        //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR             //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,               //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE            //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                 //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,          //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE          //
// SOFTWARE.                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////

import * as fs from "fs";
import Config from "../interfaces/Config";

/**
 * JSloth Files
 * File related functions.
 */
export class Files {

    /*** Configuration methods */
    constructor(config?: Config) {
    }

    /**
     * Check if file exists.
     *
     * @param path {string} The specific path.
     * @param next {Function} Callback.
     * @return void
     */
    public exists(path: string, next: Function): void {
        fs.access(path, fs.constants.F_OK, (err) => {
             if (!err) {
                 next(true);
             } else {
                 next(false);
             }
        });
    };

    /**
     * Call the Callback if file exists.
     *
     * @param path {string} The specific path.
     * @param next {Function} Callback.
     * @return void
     */
    public ifExists(path: string, next: Function): void {
        fs.access(path, fs.constants.F_OK, (err) => {
             if (!err) {
                 next();
             }
        });
    };

}