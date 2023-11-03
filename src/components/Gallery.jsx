import { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";
import TabBar from "./TabBar";
import GalleryItem from "./GalleryItem";

//initialize the image data
let initData = [
  { id: 1, src: "image-1.webp" },
  { id: 2, src: "image-2.webp" },
  { id: 3, src: "image-3.webp" },
  { id: 4, src: "image-4.webp" },
  { id: 5, src: "image-5.webp" },
  { id: 6, src: "image-6.webp" },
  { id: 7, src: "image-7.webp" },
  { id: 8, src: "image-8.webp" },
  { id: 9, src: "image-9.webp" },
  { id: 10, src: "image-10.jpeg" },
  { id: 11, src: "image-11.jpeg" },
];

//Main gallery component
export default function Gallery() {
  const gridRef = useRef(null); //used to select the grid element created from the DOM
  const sortableRef = useRef(null); // used to store the sortable grid created from the original grid
  const images = useRef(initData); // image list to update and render
  const [deleteImages, setDeletedImages] = useState([]); //state for selecting images to delete
  const [count, setCount] = useState(0); //state to keep track of the number of images selected

  // the sorting happen in useEffect hook because it is an external effect outside of react dom
  //that requires rerender

  useEffect(() => {
    //used sortable js for handling the sorting
    //passed the reference of the current grid DOM element
    sortableRef.current = new Sortable(gridRef.current, {
      animation: 500,

      //this is used to create the sillouhete where the image is being dropped
      onStart: (e) => {
        e.item.children[1].classList.add("opacity-0");
      },

      onEnd: (e) => {
        e.item.children[1].classList.remove("opacity-0");
      },
    });

    //the selected image count is set here since i wanted the selected count to update
    //after state is updated and the count goes up
    setCount(deleteImages.length);
  }, [deleteImages]);

  return (
    <div className="w-full border border-2 border-slate-800 flex flex-col justify-center align-center rounded-lg">
      <TabBar
        count={count}
        setCount={setCount}
        deleteImages={deleteImages}
        setDeletedImages={setDeletedImages}
        images={images}
      />
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-white w-full rounded-lg p-5"
        ref={gridRef}
      >
        {images.current.map((img) => (
          <GalleryItem
            key={img.id}
            data-id={img.id}
            img={img}
            setDeletedImages={setDeletedImages}
            deleteImages={deleteImages}
          />
        ))}
      </div>
    </div>
  );
}
