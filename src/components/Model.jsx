import React from 'react'

const Model = props => {

  const getStockValueColor = (stock) => {
    if(stock.current_value < stock.history.slice(-2)[0].value){
      return '0';
    }
    else if(stock.current_value > stock.history.slice(-2)[0].value){
      return '1';
    }
    else{
      return "-";
    }
  }

  return (
    <div className='card-content model'>
      <div>
        <strong><p className="is-size-10">Modelo SVM de Clasificación SVC:</p></strong>
        <br />
        <div>
          <table className='table is-bordered'>
            <thead>
              <th>Nombre</th>
              <th>Señal de variación</th>
            </thead>
            <tbody>
              {Object.keys(props.stocks).map((val, index) => {
                return (
                  // <td key={index}>{`${val}: ${getStockValueColor(props.stocks[val])}`}</td>
                  <tr>
                    <td key={index}>{`${val.toUpperCase()}`}</td>
                    <td key={index}>{`${getStockValueColor(props.stocks[val])}`}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <strong><p className="is-size-10">Modelo SVM de Regresión SVR:</p></strong>
        <br />
        <div>
        <table className='table is-bordered'>
            <thead>
              <th>Nombre</th>
              <th>Precio pronosticado</th>
            </thead>
            <tbody>
              {Object.keys(props.stocks).map((val, index) => {
                return (
                  // <p key={index}>{`${val}: ${(Math.round(props.stocks[val].current_value * 100) / 100) + 1}`}</p>
                  <tr>
                    <td key={index}>{`${val.toUpperCase()}`}</td>
                    <td key={index}>{`${(Math.round(props.stocks[val].current_value * 100) / 100) + 1}`}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div>
        <strong><p className="is-size-10">Modelo Random Forest:</p></strong>
        <br />
        <div>
          <p className="is-size-8">Precio pronosticado:</p>
        </div>
      </div> */}
    </div>
  )
}

export default Model;