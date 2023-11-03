export default function GalleryItem({ img, deleteImages, setDeletedImages }) {
  //callback function for selecting the images
  const handleSelect = (e) => {
    const id = e.currentTarget.id;

    if (deleteImages.includes(parseInt(id))) {
      setDeletedImages(deleteImages.filter((item) => item !== parseInt(id)));
    } else {
      setDeletedImages([...deleteImages, parseInt(id)]);
    }
  };

  return (
    <div className="rounded-lg  border border-2 relative first:row-span-2 first:col-span-2 group">
      <input
        type="checkbox"
        name="isSelected"
        className="focus:ring-0 focus:ring-offset-0 w-4 h-4 peer absolute top-2 left-2 cursor-pointer bg-red-50 checked:block rounded-sm z-20 hidden group-hover:block"
        id={img.id}
        onClick={handleSelect}
      />
      <div
        className="rounded-lg  transition-all bg-white group-hover:bg-gray-500 peer-checked:bg-gray-400 peer-checked:bg-blend-overlay group-hover:bg-blend-multiply hover:cursor-pointer "
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={img.src}
          alt="image"
          className="rounded-lg w-full opacity-0"
        />
      </div>
    </div>
  );
}
