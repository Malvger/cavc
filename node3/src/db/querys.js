module.exports = {
    getUsuarios: 'SELECT * FROM usuarios',
    addUsuario: 'INSERT INTO usuarios (nombre,perfil,rrhh) Values(@nombre,@perfil,@rrhh)',
    getLogin: 'select nombre, perfil, rrhh from usuarios where nombre = @email and dbo.descryp(clave) =@password;',
    getMenus: 'Select  menus.id,menus.nombre,menus.descripcion,menus.class,menus.style,menus.url,menus.perfil,submenus.id sub_id,submenus.nombre sub_nombre, submenus.descripcion sub_descripcion,submenus.class sub_class,submenus.style sub_estilo,submenus.url sub_url,submenus.contener sub_contener from menus left join submenus on menus.id=submenus.menu where menus.perfil =@perfil;',
    getSubMenus: 'Select * from submenus where menu=@menu;',
    //sql db
    //trrhh
    getTrrhh: 'select * from tb_pl_trrhh where st=1',
    getTrrhhE: 'select * from tb_pl_trrhh where id = @id',
    //putTrrhhE: 'UPDATE tb_pl_trrhh SET dpi = @dpi,nombres = @nombres,apellidos = @apellidos,comunidad = @comunidad where id= @id',
    putTrrhhE: "tb_trrhh_newupdate  @id,@dpi, @nombre,@apellido,@comunidad,@jornal,@planta,@area",
    delTrrhhE: "UPDATE tb_pl_trrhh SET st=0 where id= @id",

}