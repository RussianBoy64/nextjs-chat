import Image, { StaticImageData } from "next/image";

import styles from "./photoGrid.module.scss";

interface photoGridProps {
  images: StaticImageData[];
}

type getPhotoGridLayoutType = (imagesCount: number) => string;

const getPhotoGridLayout: getPhotoGridLayoutType = (imagesCount) => {
  const photoGridLayout = [styles.photoGrid];

  switch (imagesCount) {
    case 1:
      photoGridLayout.push(styles.photoGrid_layout1);
      break;

    case 1:
      photoGridLayout.push(styles.photoGrid_layout1);
      break;

    case 2:
      photoGridLayout.push(styles.photoGrid_layout2);
      break;

    case 3:
      photoGridLayout.push(styles.photoGrid_layout3);
      break;

    case 4:
      photoGridLayout.push(styles.photoGrid_layout4);
      break;

    case 5:
      photoGridLayout.push(styles.photoGrid_layout5);
      break;

    default:
      photoGridLayout.push(styles.photoGrid_layout1);
      break;
  }

  return photoGridLayout.join(" ");
};

const PhotoGrid: React.FC<photoGridProps> = ({ images }) => {
  const photoGridStyles = getPhotoGridLayout(images.length);

  return (
    <div className={photoGridStyles}>
      {images.map((image, index) => (
        <Image
          className={styles.photoGrid__image}
          src={image.src}
          alt={`photo-${index}`}
          width={image.width}
          height={image.height}
          key={index}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
