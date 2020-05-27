import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import Slider from "react-slick"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import PreviewCard from "../PreviewCard"

import mri from "../../images/mri.png"
import nfl from "../../images/nfl.png"
import explosion from "../../images/explosion.png"
import atp from "../../images/atp.png"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container = styled.div`
  .slick-list {
    margin: 1rem;
  }

  .page-button-container {
    width: 2rem;
    height: 2rem;

    ::before {
      display: none;
    }
  }

  .page-button {
    height: 2rem;
    width: 2rem;
    transition: transform 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    svg {
      height: 2rem;
      width: 2rem;
      color: black;
    }
  }
`

const NextArrow = props => {
  const { className, style, onClick } = props

  return (
    <div className={`${className} page-button-container`} style={style}>
      <button className="page-button" onClick={onClick}>
        <FaAngleRight />
      </button>
    </div>
  )
}

const PrevArrow = props => {
  const { className, style, onClick } = props

  return (
    <div className={`${className} page-button-container`} style={style}>
      <button className="page-button" onClick={onClick}>
        <FaAngleLeft />
      </button>
    </div>
  )
}

const Carousel = () => {
  const [numSlides, setNumSlides] = useState(
    Math.round(window.innerWidth / 500)
  )

  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numSlides,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  const onResize = window.addEventListener("resize", () => {
    setNumSlides(Math.round(window.innerWidth / 500))
  })

  useEffect(() => () => {
    window.removeEventListener("resize", onResize)
  })

  return (
    <Container>
      <Slider {...settings} ref={sliderRef}>
        <PreviewCard
          title="Traumatic Brain Injury"
          detail="Sports-Related Concussion in Children"
          image={mri}
        />
        <PreviewCard
          title="Traumatic Brain Injury"
          detail="Repetetive Head Injury in NFL Players"
          image={nfl}
        />
        <PreviewCard
          title="Traumatic Brain Injury"
          detail="Mild Traumatic Brain Injury and Post-Traumatic Stress Disorder in Soldiers"
          image={explosion}
        />
        <PreviewCard
          title="Physiology of the Body"
          detail="Muscle Energetics"
          image={atp}
        />
        <PreviewCard
          title="Traumatic Brain Injury"
          detail="Sports-Related Concussion in Children"
          image={mri}
        />
        <PreviewCard
          title="Traumatic Brain Injury"
          detail="Repetetive Head Injury in NFL Players"
          image={nfl}
        />
        <PreviewCard
          title="Traumatic Brain Injury"
          detail="Mild Traumatic Brain Injury and Post-Traumatic Stress Disorder in Soldiers"
          image={explosion}
        />
        <PreviewCard
          title="Physiology of the Body"
          detail="Muscle Energetics"
          image={atp}
        />
      </Slider>
    </Container>
  )
}

export default Carousel
