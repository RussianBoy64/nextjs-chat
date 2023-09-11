type getNewPhotosType = (files: FileList) => string[];

const getNewPhotos: getNewPhotosType = (files) => {
  const filesArr = Object.values(files);

  const photoToAdd = filesArr.map((photoFile) => URL.createObjectURL(photoFile));

  return photoToAdd;
};

export default getNewPhotos;
