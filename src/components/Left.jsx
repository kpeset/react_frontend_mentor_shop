import { useState, useRef } from "react";

const images = [
  {
    id: 1,
    image: "/image-product-1.jpg",
    thumbmail: "/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    image: "/image-product-2.jpg",
    thumbmail: "/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    image: "/image-product-3.jpg",
    thumbmail: "/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    image: "/image-product-4.jpg",
    thumbmail: "/image-product-4-thumbnail.jpg",
  },
];

export default function Left() {
  const [selectedPicture, setSelectedPicture] = useState(0);
  const [selectedPictureGallery, setSelectedPictureGallery] =
    useState(selectedPicture);

  const dialogRef = useRef(null);

  const handleChangePicture = (event) => {
    setSelectedPicture(event.target.getAttribute("value") - 1);
  };

  const handleChangePictureGallery = (event) => {
    setSelectedPictureGallery(event.target.getAttribute("value") - 1);
  };

  const handleChangePreviousPicture = () => {
    setSelectedPictureGallery((previousPicture) =>
      previousPicture > 0 ? previousPicture - 1 : previousPicture
    );
  };

  const handleChangeNextPicture = () => {
    setSelectedPictureGallery((previousPicture) =>
      previousPicture < 3 ? previousPicture + 1 : previousPicture
    );
  };

  const openModal = () => {
    setSelectedPictureGallery(selectedPicture);
    dialogRef.current.showModal();
  };

  // const closeModal = () => {
  //   dialogRef.current.close();
  // };

  console.info(dialogRef);

  return (
    <section className="left">
      <img src={images[selectedPicture].image} alt="" onClick={openModal} />
      <div className="thumbnail">
        {images.map((image) => (
          <img
            onClick={handleChangePicture}
            key={image.id}
            src={image.thumbmail}
            alt="shoes"
            value={image.id}
          />
        ))}
      </div>
      <dialog ref={dialogRef}>
        <button onClick={handleChangePreviousPicture}>{`<`}</button>
        <img src={images[selectedPictureGallery].image} alt="" />
        <button onClick={handleChangeNextPicture}>{`>`}</button>
        <div className="thumbnail">
          {images.map((image) => (
            <img
              onClick={handleChangePictureGallery}
              key={image.id}
              src={image.thumbmail}
              alt="shoes"
              value={image.id}
            />
          ))}
        </div>
      </dialog>
    </section>
  );
}
