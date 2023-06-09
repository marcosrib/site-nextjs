import React from 'react';
import styles from './Gallery.module.css'

function GalleryPage() { 
    return (
      <div className={styles.container} id="gallery">
        <h3>Galeria</h3>
        <div className={styles.gallery}>
          <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
          alt="Image 1"  
          />
          <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
          alt="Image 2"
          
          />

          <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
          alt="Image 3" 
          />
    
          <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
          alt="Image 3" 
        />
      
      </div>
    </div>
    
    )
}

export default GalleryPage;