const { getConnection, sql } = require('../connection');
const querys = require('../querys');
const jwt = require('jsonwebtoken');
//const { Menu, subMenu } = require('../../interface/menu.interface');


module.exports = {

    getMenus: async(req, res) => {
        const { perfil } = req.body;

        // t_menu = [];
        // t_id = -1;
        // t_m = 0;
        // t_sb = 0;


        try {
            const pool = await getConnection();
            const result = await pool.request()
                .input("perfil", sql.Char, perfil)
                .query(querys.getMenus);

            // result.recordset.forEach(element => {

            //     if (element.id != t_id) {
            //         t_menu[t_m] = [];
            //         t_menu[t_m].id = element.id;
            //         t_menu[t_m].nombre = element.nombre;
            //         t_menu[t_m].descripcion = element.descripcion;
            //         t_menu[t_m].class = element.class;
            //         t_menu[t_m].style = element.style;
            //         t_menu[t_m].url = element.url;
            //         t_menu[t_m].perfil = element.perfil;
            //         t_sb = 0;
            //         t_menu[t_m].submenu = [];
            //         t_menu[t_m].submenu[t_sb] = [];
            //         t_menu[t_m].submenu[t_sb].id = element.sub_id;
            //         t_menu[t_m].submenu[t_sb].nombre = element.sub_nombre;
            //         t_menu[t_m].submenu[t_sb].descripcion = element.sub_descripcion;
            //         t_menu[t_m].submenu[t_sb].class = element.sub_class;
            //         t_menu[t_m].submenu[t_sb].style = element.sub_style;
            //         t_menu[t_m].submenu[t_sb].url = element.sub_url;
            //         t_menu[t_m].submenu[t_sb].contener = element.sub_contener;
            //         t_m++;
            //         t_id = element.id;
            //     } else {
            //         t_sb++;
            //         t_menu[t_m - 1].submenu = [];
            //         t_menu[t_m - 1].submenu[t_sb] = [];
            //         t_menu[t_m - 1].submenu[t_sb].id = element.sub_id;
            //         t_menu[t_m - 1].submenu[t_sb].nombre = element.sub_nombre;
            //         t_menu[t_m - 1].submenu[t_sb].descripcion = element.sub_descripcion;
            //         t_menu[t_m - 1].submenu[t_sb].class = element.sub_class;
            //         t_menu[t_m - 1].submenu[t_sb].style = element.sub_style;
            //         t_menu[t_m - 1].submenu[t_sb].url = element.sub_url;
            //         t_menu[t_m - 1].submenu[t_sb].contener = element.sub_contener;

            //     }
            //     console.log(element.perfil);
            //     console.log(t_menu);
            // });
            // console.log(JSON.stringify(t_menu));
            res.json(result.recordset);

        } catch (error) {
            res.status(500);
            res.send(error.messge);
            console.log(error);
        }
    }



};