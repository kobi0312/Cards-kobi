import { Button } from "@mui/material";
import MyButton from "./propsAndChildren/MyButton";
import MyMessage from "./propsAndChildren/MyMessage";
import Counter from "./states/Counter";
import Countries from "./effects/Countries";

export default function SandboxPage() {
  return (
    <div>
      <Countries />
    </div>
  );
}
