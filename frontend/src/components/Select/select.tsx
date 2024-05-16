import { ChangeEventHandler } from "react";
//import OptionType from "../../types/OptionType";

type SelectProps = {
  options: any[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  labelText: string;
  label: string;
  defaultOption: string;
  defaultValue?: string;
  classname: string;
};

const Select = ({ options, onChange, labelText, label, defaultOption, defaultValue, classname = "" }: SelectProps) => {
  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <select name={label} id={label} onChange={onChange} value={defaultValue} className={classname} >
        {<option value={defaultOption}>{defaultOption}</option>}
        {options.map(({ name, id }) => (
          <option key={label + id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
