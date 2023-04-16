import React, { useState, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconLocation } from '../svg/Location.svg'
import './CustomSelect.css'

const CustomSelect = ({ placeholder, options, setSelectedOption }) => {
  const [value, setValue] = useState(placeholder)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const selectRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchTerm('')
        if (value === '') {
          setValue(placeholder)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectRef])

  const toggleSelect = () => {
    setIsOpen(prevState => !prevState)
  }

  const handleSelect = newValue => {
    inputRef.current.value = `${newValue.nombre}, ${newValue.pais.nombre}.`
    setValue(newValue)
    setSelectedOption(previousValue => {
      return {
        ...previousValue,
        ciudadID: newValue.ciudadID,
        ciudadNombre: newValue.nombre
      }
    })
    setIsOpen(false)
    if (newValue === '') {
      setValue(placeholder)
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      setIsOpen(prevState => !prevState)
    } else {
      setValue(value + event.key)
    }
  }

  const handleSearch = event => {
    setSelectedOption(previousValue => {
      return {
        ...previousValue,
        ciudadID: undefined,
        ciudadNombre: undefined
      }
    })
    setSearchTerm(event.target.value)
  }

  const filteredOptions = useMemo(
    () =>
      options?.filter(
        ({ nombre, pais }) =>
          nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pais.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [options]
  )

  return (
    <div className="custom-select-container" ref={selectRef} onClick={() => inputRef.current.focus()}>
      <div className="custom-select" onClick={toggleSelect} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
        <IconLocation />
        <div className="placeholder">
          <input type="text" onChange={handleSearch} placeholder={placeholder} ref={inputRef} />
        </div>
      </div>
      {isOpen && (
        <div className="options-container">
          {filteredOptions.length === 0 ? (
            <div className="option disabled">Ciudad no encontrada</div>
          ) : (
            filteredOptions.map(ciudad => {
              return (
                <div
                  key={ciudad.ciudadID}
                  className={`option ${ciudad.nombre === value ? 'selected' : ''}`}
                  onClick={() => handleSelect(ciudad)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      handleSelect(ciudad.nombre)
                      setSearchTerm('')
                      setIsOpen(false)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <IconLocation />
                  <div className="nameDisplay">
                    <span className="ciudad">{`${ciudad.nombre}`}</span>
                    <span className="pais">{`${ciudad.pais.nombre}`}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nombre: PropTypes.string
    })
  ),
  setSelectedOption: PropTypes.func.isRequired
}

CustomSelect.defaultProps = {
  placeholder: '¿A donde vamos?'
}

export default CustomSelect
