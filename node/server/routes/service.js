const express = require('express');
let app = express();

let Menu = require('../models/menu');
let Perfil = require('../models/perfil');
let SubMenu = require('../models/submenu');

async function subMenus(m) {
    let data = [];
    try {
        let menu = await Menu.findById(m);

        if (!menu.submenus) {
            console.log('No tiene elementos');
        } else {
            let submenus = await SubMenu.find({ menu: m });
            menu.submenus = submenus;
            console.log(menu);
        }
        return menu;
    } catch (error) {
        console.log(error);

    }
    return data;
}

async function mostrarMenus(idPerfil) {
    try {
        let data = [];
        let perfil = await Perfil.findById(idPerfil);
        for (const e in perfil.menus) {
            if (perfil.menus.hasOwnProperty(e)) {
                const element = perfil.menus[e];
                let sub = await subMenus(element);
                data.push(sub);
            }
        }
        return (data);
    } catch (error) {
        console.log(error);
    }
}

app.get('/service/menu/:id', async(req, res) => {
    let id = req.params.id;
    try {
        let menu = await mostrarMenus(id);
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