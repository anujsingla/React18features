import faker from "@faker-js/faker";
import { filter, includes, isEmpty, lowerCase, map } from "lodash";
import { ChangeEvent, useMemo, useState, useTransition } from "react";

const getMockBicycleName = () => {
  return Array(1000)
    .fill(0)
    .map((v, i) => faker.vehicle.bicycle());
};

export function UseTransitionHookExamples() {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [isPending, startTransition] = useTransition();
  const bicycleNames = useMemo(() => getMockBicycleName(), []);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    startTransition(() => setFilterText(event.target.value));
  };
  const getFilteredBicycleNames = () => {
    return isEmpty(filterText)
      ? bicycleNames
      : filter(bicycleNames, (b) =>
          includes(lowerCase(b), lowerCase(filterText))
        );
  };
  const filteredNames = getFilteredBicycleNames();
  return (
    <div>
      <div>{isPending ? "Loading" : "Loaded"}</div>
      <div>
        Bicycle Name <input value={searchText} onChange={onChangeText} />
      </div>
      <ul className="list-group">
        {map(filteredNames, (b, i) => (
          <li key={i} className="list-group-item">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
