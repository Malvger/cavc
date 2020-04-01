const express = require('express');
let app = express();

let Menu = require('../models/menu');
let SubMenu = require('../models/submenu');

app.get('/service/menu/:id', async(req, res) => {
    let id = req.params.id;

    try {
        let menu = await Menu.findById(id);

        let submenus = await SubMenu.find({ menu: id });
        menu.submenus = submenus;
        res.json({
            ok: true,
            menu
        });
    } catch (err) {
        res.json({
            ok: false,
            err
        });
    }

});
module.exports = app;