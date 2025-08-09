"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../ui/button";

interface QuantitySelectorProps {
  quantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const QuantitySelector = ({
  quantity,
  handleDecrease,
  handleIncrease,
}: QuantitySelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex w-28 items-center justify-between rounded-lg border">
        <Button onClick={handleDecrease} size="icon" variant="ghost">
          <MinusIcon />
        </Button>
        <p>{quantity}</p>
        <Button onClick={handleIncrease} size="icon" variant="ghost">
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
