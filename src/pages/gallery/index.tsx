import React from 'react';
import styles from './Gallery.module.css';

const images = [
  {
    src: '/gallery1.jpeg',
    alt: 'Image 1',
  },
  {
    src: '/gallery2.jpeg',
    alt: 'Image 2',
  },
  {
    src: '/gallery3.jpeg',
    alt: 'Image 3',
  },
  {
    src: '/gallery4.jpeg',
    alt: 'Image 4',
  },
  {
    src: '/gallery5.jpeg',
    alt: 'Image 5',
  },
  {
    src: '/gallery6.jpeg',
    alt: 'Image 6',
  },
];

function GalleryPage() {
  return (
    <div className={styles.container} id="gallery">
      <h3>Galeria</h3>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
