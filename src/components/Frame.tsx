import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

// Lorem is a list of texts that imitate the style of Adult Swim bumpers.
const lorem = [
  "Code is poetry, but debugging is haiku.",
  "Debugging is like being a detective in a crime movie where you're also the murderer.",
  "A program without bugs is like a fish without bicycles.",
  "Programming is 10% coding and 90% fixing things you broke in the first 9%.",
  "Coding is easy, it's the humans that are the hard part.",
  "Growing old is mandatory, growing up is optional... just like debugging code.",
  "Patience is a virtue, unless you're waiting for code to compile.",
  "Work smarter, not harder... unless you're a computer, then just work harder.",
  "Life is like a box of chocolates, full of bugs and unexpected crashes.",
  "The road to success is always under construction, just like your code.",
  "It doesn't matter how well can you see, you'll always forget a semicolon.",
];

// The frame should render a 720px video aspect ratio.
function Frame() {
  const { onReady, editor } = useFabricJSEditor();
  const canvas = editor?.canvas as fabric.Canvas;

  const addTextNode = (_canvas?: fabric.Canvas) => {
    const defaultText = lorem[Math.floor(Math.random() * lorem.length)];

    const text = new fabric.IText(defaultText, {
      fontFamily: "HelveticaNeue Condensed",
      fontSize: 32,
      fill: "#fff",
      fontWeight: "bold",
      top: 720 / 2 - 32 / 2,
      left: 1280 / 2 - defaultText.length * 6,
    });

    if (!_canvas) {
      canvas.add(text);
      return;
    }

    _canvas.add(text);
  };

  const clearCanvas = () => {
    canvas.clear();
    canvas.setBackgroundColor("#000", () => {});
  };

  const saveAsJpeg = () => {
    const dataURL = canvas.toDataURL({
      format: "jpeg",
      quality: 1,
      multiplier: 1,
    });

    const link = document.createElement("a");
    link.download = "adult-swim-bumper.jpeg";
    link.href = dataURL;
    link.click();
  };

  const handleLoadCanvas = (canvas: fabric.Canvas) => {
    canvas.setDimensions({
      width: 1280,
      height: 720,
    });
    canvas.setBackgroundColor("#000", () => {});
    onReady(canvas);
    addTextNode(canvas);
  };

  const buttons = [
    {
      text: "Clear Canvas",
      onClick: () => clearCanvas(),
    },
    {
      text: "Add new Text",
      onClick: () => addTextNode(),
    },
    {
      text: "Save as JPEG",
      onClick: () => saveAsJpeg(),
    },
  ];

  return (
    <section className="w-full">
      <FabricJSCanvas
        className="rounded-md border bg-white border-stone-900 mt-8 overflow-hidden aspect-video w-full h-auto"
        onReady={handleLoadCanvas}
      />

      <div className="mt-2 flex items-center gap-x-2">
        {buttons.map((button) => (
          <button
            key={button.text}
            onClick={button.onClick}
            className="border px-3 font-semibold py-2 rounded-md border-stone-900 text-stone-400"
          >
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Frame;
