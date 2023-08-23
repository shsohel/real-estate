import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import React, { useRef } from 'react';

function Media() {
  const inputFile = useRef(null);
  const handleClickFile = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
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
                  />
                  <p className="text-sm text-mute-200 my-3">
                    Photos must be JPEG or PNG format and least 1024x768
                  </p>
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
            <h2 className="text-2xl font-medium">Property Price</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 my-2">
              <div>
                <Select label="Video from" />
              </div>
              <div>
                <Input label="Embed Video id" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 border rounded mt-3">
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
        </div>
      </div>
    </div>
  );
}

export default Media;
