import React from 'react';
import styles from './Gallery.module.css'

function GalleryPage() { 
    return (
      <div className={styles.gallery}>
      <div className={styles.galleryItem}>
        <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
         alt="Image 1"  
         width="160"
         height="106"/>
        <div className="caption">Image 1</div>
      </div>
      <div className={styles.galleryItem}>
        <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
         alt="Image 2" 
         width="160"
         height="106"/>
        <div className="caption">Image 2</div>
      </div>
      <div className={styles.galleryItem}>
        <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" 
        alt="Image 3" 
        width="160"
        height="106"/>
        <div className="caption">Image 3</div>
      </div>
    </div>
    
    )
}

export default GalleryPage;