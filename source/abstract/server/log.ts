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

import * as clc from "cli-color";

/**
 * Log in the terminal.
 */
class Log {

    /**
     * JSloth welcome message
     */
    public hello = (): void => {
        console.log("");
        console.log("**********************************************************");
        console.log("*                                                        *");
        console.log("*        ██╗███████╗██╗      ██████╗ ████████╗██╗  ██╗   *");
        console.log("*        ██║██╔════╝██║     ██╔═══██╗╚══██╔══╝██║  ██║   *");
        console.log("*        ██║███████╗██║     ██║   ██║   ██║   ███████║   *");
        console.log("*   ██   ██║╚════██║██║     ██║   ██║   ██║   ██╔══██║   *");
        console.log("*   ╚█████╔╝███████║███████╗╚██████╔╝   ██║   ██║  ██║   *");
        console.log("*    ╚════╝ ╚══════╝╚══════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝   *");
        console.log("*                                      by Chriss Mejía   *");
        console.log("*                                                        *");
        console.log("**********************************************************");
        console.log("*                                                        *");
        console.log("*                        Welcome                         *");
        console.log("*                                                        *");
        console.log("**********************************************************");
        console.log("");
        console.log(clc.bgBlackBright("                          Core                            "));
        console.log("");
    }

    /**
     * Log an error
     */
    public error = (text: string): void => {
        console.error(clc.red(text));
    }

    /**
     * Log a warning
     */
    public moduleWarning = (text: string): void => {
        console.error(clc.yellow(text));
    }

    /**
     * Log a module
     */
    public module = (text: string, fail?: string, number?: number): void => {
        let log: string = "  ✔ ";

        if (number) {
            log = log + text + " (" + number + ")";
        } else if (number === 0) {
            log = log + fail;
        } else {
            log = log + text;
        }
        console.log(clc.green(log));
    }

    /**
     * Log apps section
     */
    public appTitle = (): void => {
        console.log("");
        console.log(clc.bgBlackBright("                          Apps                            "));
    }


    /**
     * Log an app
     */
    public app = (text: string): void => {
        console.log("");
        console.log(clc.yellow(" ⚝  ") + text.toUpperCase().charAt(0) + text.substring(1) + " app...");
        console.log("");
    }

    /**
     * Log app steps
     */
    public appModule = (text: string, fail: string, success: boolean): void => {
        let log: string = "";

        if (success) {
            log = "    ✔ " + text;
            console.log(clc.green(log));
        } else {
            log = "    ✘ " + fail;
            console.error(clc.blackBright(log));
        }
    }

    /**
     * Log system run
     */
    public run = (port: number): void => {
        console.log("");
        console.log(clc.bgBlackBright("                          Run                             "));
        console.log("");
        console.log(" The magic happens on port " + port + " ☆ﾟ.*･｡ﾟ");
        console.log("");
    }

}

export default new Log();