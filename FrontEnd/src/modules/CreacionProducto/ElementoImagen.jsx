import React from 'react'

const ElementoImagen = ({ imagen, eliminar }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div className="elem-img" style={{ display: 'flex', alignItems: 'center' }}>
        <form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, width: '100%' }}>
          <input type="text" style={{ width: '85%' }} className="input bordes" disabled={true} placeholder={imagen} />
          <button onClick={eliminar} className="boton off" >
            <h1 style={{backgroundColor: '#545776'}}>
              <i className="fa-sharp fa-solid fa-xmark" style={{color: 'white'}} />
            </h1>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ElementoImagen
