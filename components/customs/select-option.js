import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectOption() {
  return (
    <Select defaultValue="en">
      <SelectTrigger className="w-[70px] border-0 ring-0 outline-none focus:ring-offset-0 focus:outline-none focus:ring-0">
        <SelectValue placeholder="ENG" />
      </SelectTrigger>
      <SelectContent className="bg-white rounded  ">
        <SelectGroup className="p-0 m-0">
          <SelectItem className="bg-primary text-white " value="en">
            EN
          </SelectItem>
          <SelectItem value="bn">BN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
