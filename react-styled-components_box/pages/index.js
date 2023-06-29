import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponent from "../components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponent />
      <BoxWithStyledComponent isBlack />
    </div>
  );
}
