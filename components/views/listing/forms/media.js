'use client';

import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import { appUrl } from '@/config';
import { photoUpload } from '@/store/file/actions';
import { bindPropertyBasic } from '@/store/property/actions';
import SelectBox from "@/utils/custom/SelectBox";
import { videoTypes } from "@/utils/enum";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { Cross } from "lucide-react";
import Image from "next/image";
import React, { useId, useRef } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Media() {
  const dispatch = useDispatch();
  const mediaId = useId();
  const { propertyInfo } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );

  const {
    title,
    description,
    category,
    propertyType,
    propertyStatus,
    averageRating,
    price,
    unit,
    homeOwnerAssociationFee,
    afterPriceLabel,
    beforePriceLabel,
    images,
    videos,
    amenities,
    size,
    lotSize,
    rooms,
    bedRooms,
    customID,
    garages,
    garageSize,
    yearBuilt,
    availableForm, //Date
    basement,
    roofing,
    extraDetails,
    exteriorMaterial,
    structureType,
    floorsNo,
    address,
  } = propertyInfo;
  const inputFile = useRef(null);
  const handleClickFile = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const bindAfterUpload = (fileUrl) => {
    const updatedImage = [...images, fileUrl];
    const updatedObject = {
      ...propertyInfo,
      images: updatedImage,
    };

    dispatch(bindPropertyBasic(updatedObject));
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    const file = files[0];
    let formData = new FormData();
    formData.append("file", file);

    dispatch(photoUpload(formData, bindAfterUpload));
    //const images = [...product.images];
  };

  const handleDropdownOnChange = (data, e) => {
    const { name } = e;

    const updatedProperty = {
      ...propertyInfo,
      [name]: data,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };
  const handleDropdownVideoOnChange = (data, e, id) => {
    const { name } = e;
    const updateVideos = videos.map((video) => {
      if (video.id === id) {
        video[name] = data;
      }
      return video;
    });
    const updatedProperty = {
      ...propertyInfo,
      videos: updateVideos,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };

  const handleOnVideoChange = (e, id) => {
    const { name, value, checked, type } = e.target;
    const updateVideos = videos.map((video) => {
      if (video.id === id) {
        video[name] = value;
      }
      return video;
    });
    const updatedProperty = {
      ...propertyInfo,
      videos: updateVideos,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };
  const handleRemove = (id) => {
    const updateVideos = videos.filter((video) => video.id !== id);
    const updatedProperty = {
      ...propertyInfo,
      videos: updateVideos,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };

  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedProperty = {
      ...propertyInfo,
      [name]:
        type === "number"
          ? Number(value)
          : type === "checkbox"
          ? checked
          : value,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };
  const addNewVideoObj = () => {
    const obj = {
      id: videos.length + 1,
      type: null,
      url: "",
    };
    const updatedVideos = [...videos, obj];
    const updatedObject = {
      ...propertyInfo,
      videos: updatedVideos,
    };

    dispatch(bindPropertyBasic(updatedObject));
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="bg-white p-5 border rounded">
          <div>
            <h2 className="text-2xl font-medium">
              Upload photos of your property
            </h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-2 my-2">
              <div
                onClick={() => {
                  handleClickFile();
                }}
                className="border-2 border-dashed min-h-[300px] min-w-full flex flex-col justify-center items-center py-10"
              >
                <div>
                  <div className="flex justify-center">
                    <CloudArrowUpIcon
                      className="text-gray-200 text-center"
                      width={160}
                    />
                  </div>
                  <p className="text-xl text-center">Drag and drop image or</p>

                  <div className="flex justify-center">
                    <button className="border py-2 px-10  text-lg font-medium rounded mt-2 bg-primary">
                      Browse File
                    </button>
                  </div>
                  <input
                    id="fileUpload"
                    ref={inputFile}
                    hidden
                    type="file"
                    onChange={handleFileChange}
                    onDrag={handleFileChange}
                    accept="image/png, image/jpeg"
                  />
                  <p className="text-sm text-mute-200 my-3">
                    Photos must be JPEG or PNG format and least 1024x768
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-sm text-txt-mute italic font-medium mb-1">
                  Uploaded Images
                </h2>
                <div className="border rounded grid grid-cols-2 gap-3 p-1">
                  {images.map((image, index) => {
                    return (
                      <div key={index} className="border">
                        <Image
                          className="h-20 lg:h-48 w-full object-cover"
                          src={`${appUrl}/uploads/${image}`}
                          height={200}
                          width={200}
                          alt="image"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section  */}
      <div>
        <div className="bg-white p-5 border rounded">
          <div>
            <h2 className="text-2xl font-medium">Videos</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            {videos.map((video, videoIndex) => {
              return (
                <div
                  key={videoIndex}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2"
                >
                  <div className="col-span-1">
                    <SelectBox
                      id={`type-${videoIndex}`}
                      label="Video From"
                      name="type"
                      options={videoTypes}
                      value={video.type}
                      onChange={(data, e) => {
                        handleDropdownVideoOnChange(data, e, video.id);
                      }}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      label="Embed Video id"
                      id={`value${videoIndex + 1}`}
                      name="url"
                      value={video.url}
                      onChange={(e) => {
                        handleOnVideoChange(e, video.id);
                      }}
                    />
                  </div>
                  <div className="flex justify-end col-span-1 md:col-span-2  text-right">
                    <div
                      onClick={() => {
                        handleRemove(video.id);
                      }}
                      className="text-danger hover:text-secondary cursor-pointer "
                    >
                      <FaMinusSquare />
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              onClick={() => {
                addNewVideoObj();
              }}
              className="text-primary hover:text-secondary cursor-pointer"
            >
              <FaPlusSquare />
            </div>
          </div>
        </div>
        {/* <div className="bg-white p-5 border rounded mt-3">
          <div>
            <h2 className="text-2xl font-medium">Virtual Tour</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <Input label="Virtual Tour" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Media;
