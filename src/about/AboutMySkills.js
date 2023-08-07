import { React, useEffect } from 'react';

const mySkills = [
  { href: '#', title: 'HTML5' },
  { href: '#', title: 'CSS3' },
  { href: '#', title: 'SCSS' },
  { href: '#', title: 'jQuery' },
  { href: '#', title: 'JavaScript' },
  { href: '#', title: 'Bootstrap' },
  { href: '#', title: 'Material UI' },
  { href: '#', title: 'Tailwind' },
  { href: '#', title: 'Foundation' },
  { href: '#', title: 'WordPress' },
  { href: '#', title: 'Drupal' },
  { href: '#', title: 'React' },
  { href: '#', title: 'Angular' },
  { href: '#', title: 'Git' },
  { href: '#', title: 'Jira' },
  { href: '#', title: 'Photoshop' },
  { href: '#', title: 'Illustration' },
  { href: '#', title: 'XD' },
  { href: '#', title: 'Figma' },
];

const AboutMySkills = ({ ...rest }) => {
  useEffect(() => {
		console.log('Loading TagCanvas...');
		const TagCanvas = window.TagCanvas;
		const tagCanvasOptions = {
      textColour: '#3ab773',
      outlineThickness: 0.5,
      outlineColour: '#71c59c',
      maxSpeed: 0.05,
      reverse: true,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
      <div className='container'>
        <canvas
          id='tagcanvas'
          width='500'
          height='500'
          style={{
            maxWidth: '1000px',
            width: '100%',
            zIndex: '99',
            position: 'relative',
            margin: '0 auto',
          }}
          className='to-fade-in fast-anim'
        ></canvas>
        <div id='taglist' style={{ display: 'none' }}>
          <ul>
            {mySkills.map((skill) => (
              <li key={skill.title}>
                <a href={skill.href}>{skill.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default AboutMySkills;