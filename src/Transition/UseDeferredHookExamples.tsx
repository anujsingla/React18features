import faker from "@faker-js/faker";
import { filter, includes, isEmpty, lowerCase, map } from "lodash";
import { ChangeEvent, useDeferredValue, useMemo, useState } from "react";

const getMockBicycleName = () => {
  return Array(1000)
    .fill(0)
    .map((v, i) => faker.vehicle.bicycle());
};

export function UseDeferredHookExamples() {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const bicycleNames = useMemo(() => getMockBicycleName(), []);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setFilterText(event.target.value);
    // startTransition(() => setFilterText(event.target.value));
  };
  const getFilteredBicycleNames = () => {
    return isEmpty(filterText)
      ? bicycleNames
      : filter(bicycleNames, (b) =>
          includes(lowerCase(b), lowerCase(filterText))
        );
  };
  const filteredNames = getFilteredBicycleNames();
  const deferredValues = useDeferredValue(filteredNames);
  return (
    <div>
      <div>
        Bicycle Name <input value={searchText} onChange={onChangeText} />
      </div>
      <ul className="list-group">
        {map(deferredValues, (b, i) => (
          <li key={i} className="list-group-item">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
