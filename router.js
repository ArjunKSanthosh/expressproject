import { Router } from "express";
import { Home,getDonors } from "./requesthandler.js";

const router=Router();
router.route("/adddonor").post(Home)
router.route("/getdonors").get(getDonors)
export default router;