import CheckBox from '@/components/customs/CheckBox';
import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import React from 'react';

function Amenities() {
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
            <CheckBox id="attic" label="Attic" />
            <CheckBox id="attic" label="Basketball court" />
            <CheckBox id="attic" label="Doorman" />
            <CheckBox id="attic" label="Front yard" />
            <CheckBox id="attic" label="Lake view" />
            <CheckBox id="attic" label="Ocean view" />
            <CheckBox id="attic" label="Private space" />
            <CheckBox id="attic" label="Sprinklers" />
            <CheckBox id="attic" label="Wine cellar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
