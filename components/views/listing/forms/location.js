import React from 'react';

function Location() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">Listing Location</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Address</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Country / State</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">City</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Neighborhood</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Zip</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Country</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Map Section  */}
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">
            Place the listing pin on the map
          </h2>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-2 my-2">
            <div className="min-h-[200px]  bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Latitude</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Longitude</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
