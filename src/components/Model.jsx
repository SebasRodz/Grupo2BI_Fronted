import React from 'react'

class Model extends React.Component {

    models = {

    }

    render(){
        return (
            <div className='card-content'>
                <div>
                    <strong><p className="is-size-10">Modelo SVM de Clasificación SVC:</p></strong>
                    <br/>
                    <div>
                        <p className="is-size-8">Señal de variación:</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <strong><p className="is-size-10">Modelo SVM de Regresión SVR:</p></strong>
                    <br/>
                    <div>
                        <p className="is-size-8">Precio pronosticado:</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <strong><p className="is-size-10">Modelo Random Forest:</p></strong>
                    <br/>
                    <div>
                        <p className="is-size-8">Precio pronosticado:</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <strong><p className="is-size-10">Modelo LSTM:</p></strong>
                    <br/>
                    <div>
                        <p className="is-size-8">Precio pronosticado:</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Model;