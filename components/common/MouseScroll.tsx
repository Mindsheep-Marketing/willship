//TODO change from bounce to move back and forth

const MouseScroll = () => {
  return (
    <div className="h-7 w-4 rounded-lg border-white border-2 flex flex-row items-start pt-1.5 justify-center my-2">
      <div className="w-0 h-2 bg-white border animate-bounce border-white"></div>
    </div>
  )
};

export default MouseScroll;