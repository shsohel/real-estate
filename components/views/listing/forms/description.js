import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import React from 'react';

function Descriptions() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
      <div>
        <div className="bg-white p-5 border rounded">
          <div>
            <h2 className="text-2xl font-medium">Property Description</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-2 my-2">
              <div>
                <label className="text-sm mb-2">Title (mandatory)</label>
                <input className="rounded bg-gray-200 border-0 w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 my-2">
              <div>
                <label className="text-sm mb-2">Description</label>
                <textarea className="rounded bg-gray-200 border-0 w-full min-h-[107px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 border rounded my-3">
          <div>
            <h2 className="text-2xl font-medium">Select Category</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-2 my-2">
              <div>
                <Select label="Category" />
              </div>
              <div>
                <Select label="Listed in" />
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
                <Input label="Price in $ (only numbers)" />
              </div>
              <div>
                <Input label="Yearly Tax Rate" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 my-2">
              <div>
                <Input label="Homeowners Asso. Fee (monthly)" />
              </div>
              <div>
                <Input label="After Price Label ( ex: /month)" />
              </div>
              <div>
                <Input label={`Before Price label (ex: "from")`} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 border rounded my-3">
          <div>
            <h2 className="text-2xl font-medium">Select Poperty Status</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="  my-2">
              <Select label="Property Status" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
