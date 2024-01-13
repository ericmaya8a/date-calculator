import { addDays } from "date-fns";
import { useState } from "react";
import { Holydays, getDateFromString, handleNonWorkingDays } from "../utils";
import { Button } from "./Button";
import { Header } from "./Header";
import { HolydayInput } from "./HolydayInput";
import { ResultDate } from "./ResultDate";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function Calculator() {
  const [date, setDate] = useState<string>("");
  const [waitingDays, setWaitingDays] = useState<string>("");
  const [result, setResult] = useState<Date>();
  const [holydays, setHolydays] = useState<Holydays>({
    0: ["1"],
    1: ["6"],
    2: ["20"],
    3: ["6", "7"],
    4: ["1", "10"],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: ["20"],
    11: ["25"],
  });

  const handleCalculate = () => {
    const selectedDate = getDateFromString(date);
    const selectedDays = Number(waitingDays);
    setResult(handleNonWorkingDays(selectedDate, selectedDays, holydays));
  };

  const handleClean = () => {
    setDate("");
    setWaitingDays("");
    setResult(undefined);
  };

  const handleNaturalDays = () => {
    const selectedDate = getDateFromString(date);
    const selectedDays = Number(waitingDays);
    setResult(addDays(selectedDate, selectedDays));
  };

  return (
    <>
      <Header>Días Feriados</Header>
      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {months.map((day, index) => (
          <HolydayInput
            key={day}
            index={index}
            label={day}
            holydays={holydays}
            setHolydays={setHolydays}
          />
        ))}
      </div>

      <Header>Cálculos</Header>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="">Fecha de Inicio</label>
          <input
            className="input"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={({ target: { value } }) => setDate(value)}
          />
        </div>

        <div>
          <label htmlFor="">Número de días hábiles</label>
          <input
            className="input"
            type="number"
            value={waitingDays}
            onChange={({ target: { value } }) => setWaitingDays(value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Button
          label="Calcular con días inhábiles"
          disabled={!date || !waitingDays}
          handleClick={handleCalculate}
        />
        <Button
          label="Calcular en días naturales"
          variant="success"
          disabled={!date || !waitingDays}
          handleClick={handleNaturalDays}
        />
        <Button
          label="Limpiar"
          variant="danger"
          disabled={!date || !waitingDays}
          handleClick={handleClean}
        />
      </div>

      <ResultDate date={result} />
    </>
  );
}
