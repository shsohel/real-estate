import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs(props) {
  const { tabComponent } = props;
  const [tabs, setTabs] = useState(tabComponent);

  const handleTableControl = (selectedTab) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.name === selectedTab.name) {
        tab['current'] = true;
      } else {
        tab['current'] = false;
      }
      return tab;
    });
    setTabs(updatedTabs);
  };
  const handleTableControlOnChange = (e) => {
    const { value } = e.target;
    const updatedTabs = tabs.map((tab) => {
      if (tab.name === value) {
        tab['current'] = true;
      } else {
        tab['current'] = false;
      }
      return tab;
    });
    setTabs(updatedTabs);
  };
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-primary focus:border-primary border-gray-300 rounded"
          value={tabs.find((tab) => tab.current)?.name}
          onChange={(e) => {
            handleTableControlOnChange(e);
          }}
        >
          {tabs.map((tab) => (
            <option value={tab.name} key={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
        <div className="mt-10">
          {tabs.find((tab) => tab.current === true)?.component}
        </div>
      </div>
      <div className="hidden sm:block ">
        <nav
          className="flex justify-between border px-5 py-2 space-x-4"
          aria-label="Tabs"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                handleTableControl(tab);
              }}
              className={classNames(
                tab.current
                  ? 'bg-white py-3 text-primary  border '
                  : 'text-gray-500 hover:text-gray-700',
                'px-3 py-2 font-medium text-sm rounded w-full'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
        <div className="mt-10">
          {tabs.find((tab) => tab.current === true)?.component}
        </div>
      </div>
    </div>
  );
}
