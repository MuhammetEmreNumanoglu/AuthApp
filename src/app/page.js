import Image from "next/image";
import { Button } from '@heroui/react';
import NavbarComponent from "./components/nav/header";
export default function Home() {
  return (
   <div className="myColor bg-white">
    <NavbarComponent></NavbarComponent>
    <Button className="bg-primary">
      My Button
    </Button>
   </div>
  );
}
