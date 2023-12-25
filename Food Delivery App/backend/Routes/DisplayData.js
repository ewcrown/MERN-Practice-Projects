import express from "express";

const router = express.Router();

router.post("/foodData", async (req, res) => {
    res.send(global.food_items)
});

export default router;
