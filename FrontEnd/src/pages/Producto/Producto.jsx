import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { getData } from '../../utils/getData'
import { useEstadosGlobalesContext } from '../../context/global.context'

import '@scss/Producto/product.scss'

import ProdHeader from '../../modules/producto/Prod-header/prod-header'
import ProductDescription from '../../modules/producto/ProductDescription'
import ProductLocation from '../../modules/producto/ProductLocation'
import ProductFeatures from '../../modules/producto/ProductFeatures'
import ProductCalendar from '../../modules/producto/ProductCalendar'
import ProductPolicies from '../../modules/producto/ProductPolicies'
import Carousel from '../../modules/producto/ProductGallery/Carousel'
import GeoLocation from '../../modules/producto/GeoLocation/GeoLocation'
import CarouselMobile from '../../modules/producto/CarouselMobile/CarouselMobile'

const Product = () => {
  const { id } = useParams()
  const { setIsLoading, setIniciateReserva } = useEstadosGlobalesContext()

  const [productInfo, setProductInfo] = useState(null)
  // const [selectedDates, setSelectedDates] = useState(null)
  const [width, setWidth] =useState(window.innerWidth)

  window.addEventListener('resize', function() {
    setWidth(window.innerWidth)
  });

  useEffect(() => {
    if (productInfo) {
      setIniciateReserva(prevState => ({
        ...prevState,
        producto: productInfo
      }))
    }
  }, [productInfo])

  useEffect(() => {
    getData(undefined, `/productos/${id}`, setIsLoading, undefined, setProductInfo, undefined)
  }, [])

  return (
    <div>
      {productInfo && (
        <div className="product-container" data-testid="product-container">
          <ProdHeader categoria={productInfo.categoria} titulo={productInfo.titulo} />
          <ProductLocation ciudad={productInfo.ciudad} puntajePromedio={productInfo.puntajePromedio} />
          <div className="details-container">
            <div className="row details-container-icons">
              <FontAwesomeIcon icon={faHeart} className="icon-heart" />
              <FontAwesomeIcon icon={faShareAlt} className="icon-share" />
            </div>
            {/* cambié acá abajo para mostrar el carrusel según el tamaño */}
            { width >= 480 ? <Carousel images={productInfo.imagenes} /> : <CarouselMobile images={productInfo.imagenes} />}
            <ProductDescription frase={productInfo.frase} descripcion={productInfo.descripcion} />
            <ProductFeatures caracteristicas={productInfo.caracteristicas} />
            <ProductCalendar reservas={productInfo.reservas} />
            <GeoLocation
              latitud={productInfo.latitud}
              longitud={productInfo.longitud}
              ciudad={`${productInfo.ciudad.nombre}, ${productInfo.ciudad.pais.nombre}`}
            />
            <ProductPolicies politicas={productInfo.politicasAgrupadasPorTipo} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
