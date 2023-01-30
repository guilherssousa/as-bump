import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

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
];

// The frame should render a 720px video aspect ratio.
function Frame() {
  const { onReady, editor } = useFabricJSEditor();
  const canvas = editor?.canvas as fabric.Canvas;

  const addTextNode = (_canvas?: fabric.Canvas) => {
    const defaultText = lorem[Math.floor(Math.random() * lorem.length) + 1];

    const text = new fabric.Text(defaultText, {
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

  const handleLoadCanvas = (canvas: fabric.Canvas) => {
    canvas.setDimensions({
      width: 1280,
      height: 720,
    });
    canvas.setBackgroundColor("#000", () => {});
    onReady(canvas);
    addTextNode(canvas);
  };

  return (
    <section className="w-full">
      <FabricJSCanvas
        className="rounded-md border bg-white border-stone-900 mt-8 overflow-hidden"
        onReady={handleLoadCanvas}
      />

      <div className="mt-2 flex items-center gap-x-2">
        <button
          onClick={() => clearCanvas()}
          className="border px-3 font-semibold py-2 rounded-md border-stone-900 text-stone-400"
        >
          Clear Canvas
        </button>
        <button
          onClick={() => addTextNode()}
          className="border px-3 font-semibold py-2 rounded-md border-stone-900 text-stone-400"
        >
          Add new Text
        </button>
      </div>
    </section>
  );
}

export default Frame;
