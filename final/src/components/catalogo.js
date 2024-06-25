import { useState } from "react";
import Data from "../json/datos.json";

const Catalogo = () => {
    const [filteredData, setFilteredData] = useState(Data);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroSubCategoria, setFiltroSubCategoria] = useState('');
    const [toggleFilter, setTogglefilter] = useState(false);

    const filterData = (e) => {
        setTogglefilter(!toggleFilter);

        console.log(!!filtroCategoria && !!filtroSubCategoria, filtroCategoria, filtroSubCategoria)

        if (!filtroCategoria && !filtroSubCategoria) {
            return setFilteredData(Data);
        }

        if (!!filtroCategoria && !!filtroSubCategoria) {
            const filteredData = Data.filter(it => {
                if (it.categoria === filtroCategoria)
                    return true;
                return false;
            })
            console.log('categoria')
            setFilteredData(filteredData);
            return;
        } else {
            const filteredData = Data.filter(it => {
                if (it['sub-categoria'] === filtroSubCategoria)
                    return true;
                return false
            })
            console.log('sub-categoria')
            setFilteredData(filteredData);
            return;
        }
    }

    return (
        <>
            <div className="row">
                <div className={`col-lg-2 col-md-4 custom-behaviour ${toggleFilter ? 'closed' : ''}`}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i data-feather="filter"></i>
                                Filtrar
                            </h5>
                            <hr></hr>

                            <h6>Categorías</h6>
                            <select defaultValue='' className="form-select" onChange={(e) => setFiltroCategoria(e.target.value)}>
                                {[
                                    { label: 'Tipo de Producto', value: '' },
                                    { label: 'Cortina', value: 'cortina' },
                                    { label: 'Roller', value: 'rollers' },
                                    { label: 'Persiana', value: 'persiana' },
                                ].map((it, idx) => <option key={idx} value={it.value}>{it.label}</option>)}
                            </select>

                            <h6 className='mt-2'>Más especifico</h6>
                            <select defaultValue='' className="form-select" onChange={(e) => setFiltroSubCategoria(e.target.value)}>
                                {[
                                    { label: 'Cortina con Tubo', value: 'tubo' },
                                    { label: 'Cortina con Riel', value: 'riel' },
                                    { label: 'Persiana Horizontal', value: 'horizontal' },
                                    { label: 'Persiana Vertical', value: 'vertical' },
                                ].map((it, idx) => <option key={idx} value={it.value}>{it.label}</option>)}
                            </select>

                            <div className="d-grid gap-2 mt-4">
                                <button onClick={filterData} className="btn btn-dark text-white fw-bold">
                                    Filtrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-10 col-md-8">
                    <div className='row g-3'>
                        <div className='col-md-12 d-block d-sm-none'>
                            <div className="d-grid gap-2">
                                <button onClick={() => setToggleFilter(!toggleFilter)} className="btn btn-dark text-white fw-bold">
                                    Filtrar
                                </button>
                            </div>
                        </div>
                        {filteredData.map((e, idx) =>
                            <div key={idx} className="col-lg-3">
                                <div className="card">
                                    <div className="img-holder">
                                        <img src={e.src} className="img-fluid" alt="Product" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalogo;
