import React, { useRef } from "react"
import styled from "styled-components"
import Slider from "react-slick"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import PreviewCard from "../PreviewCard"

import mri from "../../images/mri.png"
import nfl from "../../images/nfl.png"
import explosion from "../../images/explosion.png"
import atp from "../../images/atp.png"
import liver from "../../images/liver.png"
import bspec from "../../images/bspec.gif"
import glioma from "../../images/glioma.png"
import pku from "../../images/pku.png"
import alz from "../../images/alz.png"
import schizo from "../../images/schizo.png"

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
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  }

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
          title="Physiology of the Body"
          detail="Intrahepatic Triglyceride Content"
          image={liver}
        />
        <PreviewCard
          title="Brain Cancer"
          detail="2-Hydroxyglutarate as an Indictor for Brain Cancer"
          image={glioma}
        />
        <PreviewCard title="Innovation" detail="BrainSpec" image={bspec} />
        <PreviewCard
          title="Metabolic Disorders"
          detail="Phenylketonuria"
          image={pku}
        />
        <PreviewCard
          title="Psychological Health"
          detail="Alzheimer's Disease"
          image={alz}
        />
        <PreviewCard
          title="Psychological Health"
          detail="Schizophrenia"
          image={schizo}
        />
      </Slider>
    </Container>
  )
}

export default Carousel
