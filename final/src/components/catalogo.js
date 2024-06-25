import { useState } from "react";
import Data from "../json/datos.json"
const Catalogo = () =>{
    const [filterData, setFilteredData] = useState(Data);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroSubCategoria, setFiltroSubCategoria] = useState('');
    const [toggleFilter, setTogglefilter] = useState(false);

}

const filterData = (e) => {
    setTogglefilter(!toggleFilter);

    console.log(!!filtroCategoria && !!filtroSubCategoria, filtroCategoria, filtroSubCategoria)

    if(!filtroCategoria && !filtroSubCategoria){
        return setFilteredData(Data);
    }

    if(!!filtroCategoria && !!filtroSubCategoria){
        const filterData = Data.filter(it =>{
            if (it.categoria === filtroCategoria)
                return true;
            return false;
        })
        console.log('categoria')
        setFilteredData(filterData);
        return;
    } else{
        const filterData = Data.filter(it =>{
            if(it.sub-categoria === filtroSubCategoria)
                return true;
            return false
        })
        console.log('sub-categoria')
        setFilteredData(filterData);
        return;
    }
}

return <>



</>;
