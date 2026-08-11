import { IonButton } from "@ionic/react";
import { ReactNode } from "react";

const PlanorbanButton: React.FC<{
  children: ReactNode;
  variant: "red" | "blue" | "yellow" | "link";
  href?: string;
  onClick?: () => void;
}> = ({ children, variant, href, onClick }) => {
  let color: "danger" | "primary" | "warning" = "primary";
  switch (variant) {
    case "red":
      color = "danger";
      break;
    case "blue":
      break;
    case "yellow":
      color = "warning";
      break;
    default:
      break;
  }
  return (
    <>
      <IonButton
        color={color}
        href={href}
        target="_blank"
        fill={variant === "link" ? "clear" : "solid"}
        onClick={onClick}
      >
        {children}
      </IonButton>
    </>
  );
};

export default PlanorbanButton;
