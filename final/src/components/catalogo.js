import { useState } from "react";
import Data from "../json/datos.json";
import "../styles/catalogo.css";
import { getCarrito, setCarrito } from "../store/local";

const Catalogo = () => {
  const [filteredData, setFilteredData] = useState(Data);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroSubCategoria, setFiltroSubCategoria] = useState("");
  const [toggleFilter, setTogglefilter] = useState(false);

  const handleClick = (e) => {
    const currentCarrito = getCarrito();
    setCarrito([...currentCarrito, e]);
}

  const filterData = (e) => {
    let filtered = Data;
    setTogglefilter(!toggleFilter);
    if (filtroCategoria === "" && filtroSubCategoria === "") {
      console.log("AMBOS NEGADOS");
      return setFilteredData(Data);
    }

    if (filtroCategoria !== "") {
      filtered = filtered.filter((item) => item.categoria === filtroCategoria);
    }

    if (filtroCategoria !== "" && filtroSubCategoria !== "") {
      filtered = filtered.filter(
        (item) => item["sub-categoria"] === filtroSubCategoria
      );
    }

    console.log("Filtered Data:", filtered);
    setFilteredData(filtered);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className={`col-lg-2 col-md-4 custom-behaviour ${ toggleFilter ? "closed" : "" }`}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i data-feather="filter"></i>
                Filtrar
              </h5>
              <hr></hr>

              <h6>Categorías</h6>
              <div>
                <select
                  defaultValue=""
                  className="form-select"
                  onChange={(e) => setFiltroCategoria(e.target.value)}
                >
                  {[
                    { label: "Tipo de Producto", value: "" },
                    { label: "Cortina", value: "cortina" },
                    { label: "Roller", value: "rollers" },
                    { label: "Persiana", value: "persiana" },
                    { label: "Forro", value: "forro" },
                  ].map((it, idx) => (
                    <option key={idx} value={it.value}>
                      {it.label}
                    </option>
                  ))}
                </select>

                <h6 className="mt-2">Sub Categorias</h6>
                <select
                  defaultValue=""
                  className="form-select"
                  onChange={(e) => setFiltroSubCategoria(e.target.value)}
                >
                  {[
                    { label: "Todos", value: "" },
                    { label: "Cortina con Tubo", value: "tubo" },
                    { label: "Cortina con Riel", value: "riel" },
                    { label: "Persiana Horizontal", value: "horizontal" },
                    { label: "Persiana Vertical", value: "vertical" },
                    { label: "Forros para Sillas", value: "sillas" },
                    { label: "Forros para muebles", value: "muebles" },
                  ].map((it, idx) => (
                    <option key={idx} value={it.value}>
                      {it.label}
                    </option>
                  ))}
                </select>

                <div className="d-grid gap-2 mt-4">
                  <button onClick={filterData} className="btn btn-dark text-white fw-bold">
                    Filtrar
                  </button>
                </div>

                <div>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <div>  
                      </div>
                    ))) : (<p>No se encontraron resultados</p>)
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-8">
          <div className="row g-3 d-flex justify-content-center">
          <div className='col-md-12 d-block d-sm-none'>
                        <div class="d-grid gap-2">
                            <button onClick={(e) => setTogglefilter(!toggleFilter)} className="btn btn-dark text-white fw-bold">
                                Filtrar
                            </button>
                        </div>
                    </div>
            {filteredData.map((element) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 w-a">
                    <div class="card">
                      <div className="row c3">
                        <img
                          height={180}
                          src={element.url}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          {element.nombre}
                          <span class="badge text-bg-light">
                            {element["sub-categoria"]}
                          </span>
                        </h5>
                        <div class="d-grid gap-2">
                          <button
                            onClick={(e) => handleClick(element)}
                            className="btn btn-vino text-white fw-bold"
                          >
                            <span className="ms-2">Añadir a consulta</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
