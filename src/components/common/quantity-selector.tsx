"use client";

import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "../ui/button";

const QuantitySelector = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex w-28 items-center justify-between rounded-lg border">
        <Button size="icon" variant="ghost">
          <MinusIcon />
        </Button>
        <p>1</p>
        <Button size="icon" variant="ghost">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
