import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <article className="container mt-3 h-36 w-[95%] rounded-md bg-white shadow-md">
      <div className="grid h-full grid-cols-2 items-center gap-1">
        <img src="/banners/bnr.png" alt="Banner" />
        <div className="space-y-1">
          <p className="text-xl font-semibold">Fresh & Healthy Organic Food</p>
          <p className="text-[10px]">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <Button className="h-6 w-16 text-[9px]">Shop now</Button>
        </div>
      </div>
    </article>
  );
};
