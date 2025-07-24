function Projects() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>Summarizer</strong>: Full-stack tool using Flask, Whisper, BART for video/audio summarization.</li>
        <li><strong>MindMate</strong>: Emotion-aware mental health app using React Native and TensorFlow.</li>
        <li><strong>HomeTeq</strong>: E-commerce platform with secure login and product/payment systems.</li>
      </ul>
    </div>
  );
}

export default Projects;