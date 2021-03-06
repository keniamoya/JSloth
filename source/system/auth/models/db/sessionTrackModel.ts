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

import Model from "../../../../abstract/models/model";
import { field, secret } from "../../../../abstract/models/decorators/db";
import * as fields from "../../../../interfaces/db/fields";
import * as defaults from "../../../../interfaces/db/defaults";
import * as datatypes from "../../../../lib/db/datatypes";
import * as timezones from "../static/timezoneModel";

export interface Row {
    id?: number;
    created?: number;
    ip: string;
    user: number;
}

/**
 * User Model
 */
export class Session_Track extends Model {

    @field()
    public id: fields.DataType = new datatypes.Datatypes().ID();    

    @field()
    public created: fields.DataTimestampType = new datatypes.Datatypes().TIMESTAMP({
        notNull: true,
        default: defaults.Timestamp.CURRENT_TIMESTAMP
    });

    @field()
    public ip: fields.DataType = new datatypes.Datatypes().VARCHAR({
        size: 39,
        notNull : true
    });

    @field()
    public user: fields.DataType = new datatypes.Datatypes().INT({
        notNull: true,
        unique: true
    });



}