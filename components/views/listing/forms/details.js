import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import React from 'react';

function Details() {
  return (
    <div className="grid  grid-cols-1 gap-6">
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">Listing Detail</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Size in ft (only numbers)</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">
                Lot size in ft (only numbers)
              </label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Rooms</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Bedrooms</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Bathrooms</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Custom ID (text)</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Garages</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Garage size</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Year built (numeric)</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Available from (date)</label>
              <input
                type="date"
                className="rounded bg-gray-200 border-0 w-full"
              />
            </div>
            <div>
              <label className="text-sm mb-2">Basement</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Extra details</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Roofing</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Exterior Material</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <Select label="Structure type" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div>
              <Select label="Floors no" />
            </div>
            <div className="col-span-2">
              <label className="text-sm mb-2">
                Owner/ Agent nots (not visible on front end)
              </label>
              <textarea className="rounded bg-gray-200 border-0 w-full min-h-[10px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">Select Energy Class</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <Select label="Energy Class" />
            </div>
            <div>
              <Select label="Energy index in kWh/m2a" />
            </div>
          </div>
        </div>
      </div>
      {/* Map Section  */}
    </div>
  );
}

export default Details;
