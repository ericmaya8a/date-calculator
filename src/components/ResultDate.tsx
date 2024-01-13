import { format } from "date-fns";
import { es } from "date-fns/locale";

export function ResultDate({ date }: { date?: Date }) {
  if (date)
    return (
      <div className="mx-auto mt-4 w-full rounded-full border p-4 text-center shadow-md sm:w-1/2">
        <p className="text-2xl font-bold lg:text-3xl">
          {format(date, "PPPP", { locale: es })}
        </p>
      </div>
    );

  return null;
}
