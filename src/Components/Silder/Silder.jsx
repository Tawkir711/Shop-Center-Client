import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://i.postimg.cc/k47yMq48/What-s-a-Good-Amazon-Ro-AS.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.postimg.cc/CM7Fmgf2/walmart2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.postimg.cc/YCZg0grQ/Top-Selling-Items-on-e-Bay-in-2023.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
