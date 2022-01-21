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
      return null;
    }
  }

  return (
    <div className='card-content model'>
      <div>
        <strong><p className="is-size-10">Modelo SVM de Clasificación SVC:</p></strong>
        <br />
        <div>
          <p className="is-size-8">Señal de variación:</p>
          {Object.keys(props.stocks).map((val, index) => {
            return (
              <p key={index}>{`${val}: ${getStockValueColor(props.stocks[val])}`}</p>
            )
          })}
        </div>
      </div>
      <div>
        <strong><p className="is-size-10">Modelo SVM de Regresión SVR:</p></strong>
        <br />
        <div>
          <p className="is-size-8">Precio pronosticado:</p>
          {Object.keys(props.stocks).map((val, index) => {
            return (
              <p key={index}>{`${val}: ${(Math.round(props.stocks[val].current_value * 100) / 100) + 1}`}</p>
            )
          })}
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