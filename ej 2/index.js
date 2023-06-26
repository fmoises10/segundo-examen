/* let nombre = []
    function crear(){
    let dato = prompt("ingrese nombre: ")
        nombre.push(dato)

    }
    function mostrar (){
        nombre.forEach(nombre => {
            console.log(nombre);
        });
    }
    function eliminar(){
        nombre.pop()
    }
    crear()
    crear()
    crear()
    mostrar()
    eliminar()
    eliminar()
    mostrar(dgh) */
    function calcularCRUD(){
        const Nombres=[];
        let op=0;
        do{
            console.log("Menu Crud");
            console.log("1- crear");
            console.log("2- leer");
            console.log("3- actualizar");
            console.log("4- eliminar");
            console.log("5- salir");
            op=prompt("Eliga una opcion: ");
            if (op==1) {
                let lim=prompt("ingrese la cantidad de nombres que desea ingresar: ");
                for (let i=0; i<lim; i++) {
                    let name=prompt("Nombre"+(i+1));
                    Nombres.push(name);
                }
            }
            if (op==2) {
                for (let i=0; i<Nombres.length; i++) {
                    console.log(Nombres[i]);
                }
            }
            if (op==3) {
                let up=prompt("elija la posicion que desea actualizar");
                ac=Nombres[up];
                console.log(ac);
                let nu=prompt("ingrese nuevo nombre");
                Nombres[up]=nu;
            }
            if (op==4) {
                Nombres.pop();
                for (let i=0; i<Nombres.length; i++) {
                console.log(Nombres);
                }
            }
            
        } while (op!=5);
    }