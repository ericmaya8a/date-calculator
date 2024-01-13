import { Holydays, setStringToArray } from "../utils";

type HolydayInputProps = {
  label: string;
  index: number;
  holydays: Holydays;
  setHolydays: (value: React.SetStateAction<Holydays>) => void;
};

export function HolydayInput({
  holydays,
  index,
  label,
  setHolydays,
}: HolydayInputProps) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        className="input"
        value={holydays[index].join(",")}
        onChange={({ target: { value } }) =>
          setHolydays({
            ...holydays,
            [index]: setStringToArray(value),
          })
        }
      />
    </div>
  );
}
