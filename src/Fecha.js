import "./Fecha.css";

export default function Fecha() {
  // --- Dates ---
  let dateNow = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = dateNow.getDay();
  let month = dateNow.getMonth();

  let minNow = 0;
  if (dateNow.getMinutes() <= 9) {
    minNow = `0${dateNow.getMinutes()}`;
  } else {
    minNow = dateNow.getMinutes();
  }
  return (
    <div>
      <h2 className="dateToday">
        {months[month]} {dateNow.getDate()}, {dateNow.getFullYear()} |{" "}
        {dateNow.getHours()}:{minNow}
      </h2>
      <h3 className="dayToday">{days[day]}</h3>
    </div>
  );
}
