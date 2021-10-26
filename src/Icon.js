import ReactAnimatedWeather from "react-animated-weather";
import "./Icon.css";

export default function Icon(props) {
  return (
    <div>
      <ReactAnimatedWeather
        icon="SLEET"
        color="skyblue"
        size={props.sizeIcon}
        animate={true}
      />
    </div>
  );
}
