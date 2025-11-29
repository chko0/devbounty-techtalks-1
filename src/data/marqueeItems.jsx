import { Zap, Package, Sparkles, Gift, TrendingUp } from "lucide-react";
import IconText from "../components/common/IconText";
import Button from "../components/common/Button";

export const marqueeItems = [
  <IconText
    key="limited"
    icon={Zap}
    className="text-yellow-400"
    iconClassName="animate-pulse"
  >
    <span className="font-semibold">Limited Stock</span>
  </IconText>,

  <div className="flex flex-items gap-2 items-center">
    <div className="animate-pulse bg-cyan-400 w-1.5 h-1.5 rounded-full" />
    <IconText key="new" icon={Sparkles} iconClassName="text-cyan-400">
      <span className="text-white font-bold">NEW RELEASE</span>
      <span className="text-gray-300">Techtalks Card Game</span>
    </IconText>
  </div>,

  <IconText key="delivery" icon={Package} iconClassName="text-purple-500">
    <span className="text-gray-300">Delivery all over Lebanon</span>
  </IconText>,

  <IconText key="perfect" icon={Gift} iconClassName="text-pink-500">
    <span className="text-gray-300">Perfect for Tech Enthusiasts</span>
  </IconText>,

  <Button
    icon={TrendingUp}
    className="rounded-lg h-9 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 hover:scale-105 transition-all duration-200"
    to="https://shop.techtalkslb.com"
    aria-label="Shop Now"
  >
    <span className="font-bold">Shop Now</span>
  </Button>,
];
