import { MessageCircle } from "lucide-react";
import Button from "../common/Button";
import Tooltip from "../common/Tooltip";

export default function ChatButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Tooltip content="Need help? Let's chat!" position="top">
        {/* WhatsApp Floating Button */}
        <Button
          as="a"
          href="https://api.whatsapp.com/send/?phone=96179051760&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600
          hover:from-green-400 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl text-white z-1"
        >
          <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </Button>
      </Tooltip>

      {/* Outer Ping */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping" />

      {/* Online indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse z-2" />
    </div>
  );
}
