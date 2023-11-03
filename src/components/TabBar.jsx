export default function TabBar({
  count,
  setCount,
  deleteImages,
  setDeletedImages,
  images,
}) {
  //callback for deleting the images
  const handleDelete = () => {
    if (count > 0) {
      //filtering by checking whether the image id is in the deleted image list
      let filtered_list = images.current.filter(
        (img) => deleteImages.indexOf(img.id) === -1
      );

      //updating the image list and resetting other states
      images.current = filtered_list;
      setCount(0);
      setDeletedImages([]);
    }
  };

  return (
    <div className="w-full  flex flex-row justify-between items-center gap-x-10 p-5">
      <p className="text-xl text-slate-800">{count} selected</p>
      {count > 0 ? (
        <button
          className="text-xl text-white bg-red-500 rounded-lg p-3"
          onClick={handleDelete}
        >
          Delete
        </button>
      ) : (
        <button
          className="text-xl text-white bg-red-500 rounded-lg disabled:bg-red-300  p-3"
          disabled
        >
          Delete
        </button>
      )}
    </div>
  );
}
