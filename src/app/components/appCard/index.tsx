
import { Card, Dropdown, DropdownItem } from "flowbite-react";

const customTheme = {
    "root": {
      "base": "w-full m-4 shadow-md flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 mx-auto",
      "children": "flex h-full flex-col justify-center gap-4 p-2",
      "horizontal": {
        "off": "flex-col",
        "on": "flex-col md:max-w-xl md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    "img": {
      "base": "",
      "horizontal": {
        "off": "rounded-t-lg",
        "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  }

export function AppCard() {
  return (
    <Card theme={customTheme}  className="max-w-sm ">
      <div className="flex justify-end px-2 pt-2">
      </div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">TASK TITLE</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">descroption</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <button
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Done
          </button>
          <button
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-red-500 dark:text-white dark:hover:border-gray-700 dark:hover:bg-red-700 dark:focus:ring-gray-700"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
}

export default AppCard;
