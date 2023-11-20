import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function useTilt(animationDuration = '150ms') { 
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // used to unify the touch and click cases
    const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleEnterEvent = () => {
      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMoveEvent = (e) => {
      e.preventDefault();

      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = unify(e).clientX;
      state.mouseY = unify(e).clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px.toFixed(2));
      el.style.setProperty('--py', py.toFixed(2));
    };

    const handleEndEvent = () => {
      el.style.setProperty('--px', 0.5);
      el.style.setProperty('--py', 0.5);
      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener('mouseenter', handleEnterEvent);
    el.addEventListener('mousemove', handleMoveEvent);
    el.addEventListener('mouseleave', handleEndEvent);
    el.addEventListener('touchstart', handleEnterEvent);
    el.addEventListener('touchmove', handleMoveEvent);
    el.addEventListener('touchend', handleEndEvent);

    return () => {
      el.removeEventListener('mouseenter', handleEnterEvent);
      el.removeEventListener('mousemove', handleMoveEvent);
      el.removeEventListener('mouseleave', handleEndEvent);
      el.removeEventListener('touchstart', handleEnterEvent);
      el.removeEventListener('touchmove', handleMoveEvent);
      el.removeEventListener('touchend', handleEndEvent);
    };
  }, [animationDuration]);

  return ref;
}

const Slide = ({ link, image, title, offset, isPageBackground }) => {
  const active = offset === 0 ? true : null,
    ref = useTilt(active);

  return (
    <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
            '--offset': offset,
            '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
    >
        {isPageBackground && (
            <div 
                className="slideBackground"
                style={{ backgroundImage: `url('${image}')`, }}
            />
        )}
        <a href={link} target='_blank' rel="noreferrer"
            className="slideContent"
            style={{ backgroundImage: `url('${image}')`, }}
        >
            <div className="slideContentInner">
                {title && (
                    <h3 className="slideTitle" dir="auto">
                        {title}
                    </h3>
                )}
            </div>
        </a>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  link: PropTypes.string,
  offset: PropTypes.number.isRequired,
  isPageBackground: PropTypes.bool,
};

const Carousel = ({ slides, isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="slidesWrapper">
      <div className="slides" loading="lazy">
        <button className="prevSlideBtn" onClick={handlePrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (slideIndex - i);

          if (typeof slide === 'string') {
            return (
              <Slide href={slide} image={slide} offset={offset} isPageBackground={isPageBackground} key={i} />
            );
          } else {
            return (
              <Slide
                link={slide.link}
                image={slide.image}
                title={slide.title}
                offset={offset}
                isPageBackground={isPageBackground}
                key={i}
              />
            );
          }
        })}
        <button className="nextSlideBtn" onClick={handleNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  isPageBackground: PropTypes.bool,
};

const slides = [
  {
    id: 1,
    title: 'eCare Infoway',
    link: 'http://ecareinfoway.com/',
    image: process.env.PUBLIC_URL + '/assets/images/eCareInfoway.png',
  },
  {
    id: 2,
    title: 'Incredible Man',
    link: 'https://www.incredibleman.in/',
    image: process.env.PUBLIC_URL + '/assets/images/IncredibleMen.png',
  },
  {
    id: 3,
    title: 'Llanmoor Homes',
    link: 'https://www.llanmoor-homes.com/',
    image: process.env.PUBLIC_URL + '/assets/images/LlanmoorHomes.png',
  },
  {
    id: 4,
    title: 'Legal Compliance Services',
    link: 'https://www.legalcomplianceservices.co.uk/',
    image: process.env.PUBLIC_URL + '/assets/images/LegalComplianceServices.png',
  },
  {
    id: 5,
    title: 'React Support Services',
    link: 'https://www.reactsupportservices.co.uk/',
    image: process.env.PUBLIC_URL + '/assets/images/ReactSupportServices.png',
  },
  {
    id: 6,
    title: 'Mark Luck Ltd',
    link: 'https://www.markluckltd.co.uk/',
    image: process.env.PUBLIC_URL + '/assets/images/MarkLuckLtd.png',
  }, 
  {
    id: 7,
    title: 'Kala Tech',
    link: 'http://www.kalatech.co.in/',
    image: process.env.PUBLIC_URL + '/assets/images/KalaTech.png',
  }, 
  {
    id: 8,
    title: 'Maruti Caterers',
    link: 'http://www.maruticaterers.in/',
    image: process.env.PUBLIC_URL + '/assets/images/MarutiCaterers.png',
  },
  {
    id: 9,
    title: 'K G R',
    link: 'http://www.kgroadlines.com/',
    image: process.env.PUBLIC_URL + '/assets/images/KGR.png',
  },
  {
    id: 10,
    title: 'Parth Enterprise',
    link: 'https://www.parthent.co.in/',
    image: process.env.PUBLIC_URL + '/assets/images/ParthEnterprise.png',
  },
  {
    id: 11,
    title: 'CISS',
    link: 'https://www.ciss.co.in/',
    image: process.env.PUBLIC_URL + '/assets/images/CISS.png',
  },
];

const Slider = () => <Carousel slides={slides} isPageBackground />;

export default Slider;