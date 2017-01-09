import * as express from "express";
// import * as somethingController from "./controllers/somethingController";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Centralized Controller Routes Loader
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Routes {

    // ---------------------------------------------------------------------------------------------------------------
    // Run configuration methods on the Loader.
    // ---------------------------------------------------------------------------------------------------------------
    public router: express.Router = express.Router();

    // ---------------------------------------------------------------------------------------------------------------
    // Run configuration methods on the Loader.
    // ---------------------------------------------------------------------------------------------------------------
    constructor() {
        this.routes();
    }

    // ---------------------------------------------------------------------------------------------------------------
    // Configure API endpoints.
    // ---------------------------------------------------------------------------------------------------------------
    private routes(): void {
        // this.router.use("/", somethingController.default);
    }

}

export default new Routes().router;