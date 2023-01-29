// The frame should render a 720px video aspect ratio.
function Frame() {
  return (
    <section className="w-full">
      <div className="bg-black aspect-video w-full h-auto border mt-8 rounded-sm border-stone-900">
        <div>
          <h1 className="font-semibold text-4xl">[as]</h1>
        </div>
      </div>
    </section>
  );
}

export default Frame;
